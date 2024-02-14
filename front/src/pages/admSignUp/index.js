import axios from 'axios';
import CryptoJS from 'crypto-js';
import { SECRET } from '../../env';
import { useState, useContext } from "react";
import Bg from '../../assets/bgs/loginBg.png';
import { useNavigate } from "react-router-dom";
import { AlertContext } from '../../context/alert';
import { TranslateContext } from '../../context/translate';
import { Img, Container, Div, Form, InputBox, Button, Input, PTitle, P, InputAdm } from './styled';

export default function AdmSignUp() {
    const navigate = useNavigate();
    const { language } = useContext(TranslateContext);
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

    return (
        <>
            <Img src={Bg} />
            <Container>
                <Div>
                    <P>{language === 'en' ? 'Sign Up' : 'Cadastrar'}</P>
                    <Form onSubmit={handleSubmitRegister}>
                        <InputBox>
                            <Input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' />
                            <Input value={name} onChange={e => setName(e.target.value)} type='Text' placeholder={language === 'en' ? 'Entire Name' : 'Nome Completo'} />
                            <Input value={cpf} onChange={e => setCpf(e.target.value)} type='Text' placeholder='CPF' />
                            <Input value={birthday} onChange={e => setBirthday(e.target.value)} type='Date' />
                            <Input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder={language === 'en' ? 'Password' : 'Senha'} />
                            <Input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type='password' placeholder={language === 'en' ? 'Confirm Password' : ' Confirmar Senha'} />
                        </InputBox>
                        <PTitle>ADM</PTitle>
                        <InputBox>
                            <InputAdm type="checkbox" value={isAdm} onChange={e => setIsAdm(e.target.value)} />
                        </InputBox>
                        <InputBox>
                            <Button type='submit'>{language === 'en' ? 'Submit' : 'Enviar'}</Button>
                        </InputBox>
                    </Form>
                </Div>
            </Container>
        </>
    )
}