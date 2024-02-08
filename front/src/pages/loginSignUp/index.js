import axios from 'axios';
import CryptoJS from 'crypto-js';
import { SECRET } from '../../env';
import { useNavigate } from "react-router-dom";
import { AlertContext } from '../../context/alert';
import { useState, useEffect, useContext } from "react";
import { Container, Div, Form, InputBox, Links, A, Button, Input, P } from './styled';

export default function LoginSignUp() {
    const navigate = useNavigate();
    const { setMessage, setShow, setVariant } = useContext(AlertContext);
    var [email, setEmail] = useState('');
    var [name, setName] = useState('');
    var [cpf, setCpf] = useState('');
    var [birthday, setBirthday] = useState(Date())
    var [password, setPassword] = useState('');
    var [confirmPassword, setConfirmPassword] = useState('');
    var [isAdm, setIsAdm] = useState(false);

    async function handleSubmitRegister(e) {
        e.preventDefault();
        if (!formValidRegister()) return

        const json = {
            email, cpf, name, birthday, password, confirmPassword, isAdm
        }

        const jsonCrypt = CryptoJS.AES.encrypt(JSON.stringify(json), SECRET).toString();

        try {
            var res = await axios.post('http://localhost:8080/api/user/register', {
                jsonCrypt
            })
            setMessage(res.data.message);
            setVariant('success')
            setShow(true);
            setEmail('');
            setCpf('');
            setName('');
            setBirthday('');
            setPassword('');
            setConfirmPassword('');
            setIsAdm(false);
            navigate('/home')
        }
        catch (error) {
            console.log(error);
            setMessage(error.message);
            setVariant('danger')
            setShow(true);
        }
    }

    function formValidRegister() {
        if (!name.includes(' ')) {
            setMessage('Insert your first and lastname')
            setShow(true);
            setVariant('danger')
            return false;
        }
        if (name.length < 5) {
            setMessage('Your name must contain more than 5 letters')
            setShow(true);
            setVariant('danger')
            return false;
        }
        if (!email.includes('@')) {
            setMessage('Your email must contain a "@"')
            setShow(true);
            setVariant('danger')
            return false;
        }
        if (email.length < 5) {
            setMessage('Your email must contain more than 5 characters')
            setShow(true);
            setVariant('danger')
            return false;
        }
        if (confirmPassword !== password) {
            setMessage("The passwords doesn't match")
            setShow(true);
            setVariant('danger')
            return false;
        }
        if (password.length < 6) {
            setMessage('Your password must contain more than 5 characters')
            setShow(true);
            setVariant('danger')
            return false
        };
        return true
    }

    async function handleSubmitLogin(e)
    {
        e.preventDefault();
        console.log(formValidLogin());

        if (!formValidLogin()) return

        const json = {
            email, password
        }

        try {
            const jsonCrypt = CryptoJS.AES.encrypt(JSON.stringify(json), SECRET).toString();
            var res = await axios.post('http://localhost:8080/api/user/login', {
                jsonCrypt
            })
            sessionStorage.setItem('token', res.data.token);
            navigate('/home')
        } catch (error) {
            console.log(error);
            setMessage('Erro ao se conectar');
            setShow(true);
            setVariant('danger');
        }
    }

    function formValidLogin() {
        if (!email.includes('@')) {
            setMessage('Insira um e-mail válidos')
            setShow(true);
            setVariant('danger')
            return false;
        }
        if (email.length < 5) {
            setMessage('Insira um e-mail válido')
            setShow(true);
            setVariant('danger')
            return false;
        }
        return true
    }

    return (
        <>
            <Container>
                <Div>
                    <P>Login</P>
                    <Form onSubmit={handleSubmitLogin}>
                        <InputBox>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                            <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                        </InputBox>
                        <Links>
                            <A>Sign Up</A>
                        </Links>
                        <InputBox>
                            <Button type='submit' />
                        </InputBox>
                    </Form>
                </Div>
            </Container>

            {/* <Container>
                <Div>
                    <P>Sign Up</P>
                    <Form onSubmit={handleSubmitRegister}>
                        <InputBox>
                            <Input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' />
                            <Input value={name} onChange={e => setName(e.target.value)} type='Text' placeholder='Entire Name' />
                            <Input value={cpf} onChange={e => setCpf(e.target.value)} type='Text' placeholder='CPF' />
                            <Input value={birthday} onChange={e => setBirthday(e.target.value)} type='Date' />
                            <Input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' />
                            <Input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type='password' placeholder='Confirm Password' />
                            <select value={isAdm} onChange={e => setIsAdm(e.target.value)}>
                                <option value={true}>
                                    ADM??
                                </option>
                                <option value={false}>
                                    USER??
                                </option>
                            </select>
                        </InputBox>
                        <Links>
                            <A>Login</A>
                        </Links>
                        <InputBox>
                            <Button type='submit' />
                        </InputBox>
                    </Form>
                </Div>
            </Container > */}
        </>
    )
}