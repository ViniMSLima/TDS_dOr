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

    async function handleSubmit(e) {
        e.preventDefault();
        if (!formValid()) return

        const json = {
            email, cpf, name, birthday, password, confirmPassword
        }

        const jsonCrypt = CryptoJS.AES.encrypt(JSON.stringify(json), SECRET).toString();

        try {
            var res = await axios.post('http://localhost:8080/', {
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
        }
        catch (error) {
            console.log(error);
            setMessage(error.message);
            setVariant('danger')
            setShow(true);
        }
    }

    function formValid() {
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

    return (
        <>
            <Container>
                <Div>
                    <P>Login</P>
                    <Form>
                        <InputBox>
                            <Input type='email' placeholder='Email' />
                            <Input type='password' placeholder='Password' />
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

            <Container>
                <Div>
                    <P>Sign Up</P>
                    <Form>
                        <InputBox>
                            <Input type='email' placeholder='Email' />
                            <Input type='Text' placeholder='Entire Name' />
                            <Input type='Text' placeholder='CPF' />
                            <Input type='Date' />
                            <Input type='password' placeholder='Password' />
                            <Input type='password' placeholder='Confirm Password' />
                        </InputBox>
                        <Links>
                            <A>Login</A>
                        </Links>
                        <InputBox>
                            <Button type='submit' />
                        </InputBox>
                    </Form>
                </Div>
            </Container >
        </>
    )
}