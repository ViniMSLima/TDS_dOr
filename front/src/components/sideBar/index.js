import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { TranslateContext } from '../../context/translate';
import etsIcon from '../../assets/siteImages/icons/ets.png';
import gameIcon from '../../assets/siteImages/icons/home.png';
import logoutIcon from '../../assets/siteImages/icons/logout.png';
import admRegisterIcon from '../../assets/siteImages/icons/adm.png';
import gameRegisterIcon from '../../assets/siteImages/icons/game.png';
import translateIcon from '../../assets/siteImages/icons/translate.png';
import deletePageIcon from '../../assets/siteImages/icons/deletePage.png';
import { Nav, UlTop, UlMid, UlBott, Li, A, Img, ImgLogo, Span } from './styled';




export default function SideBar() {
    const navigate = useNavigate();
    const { language, translate } = useContext(TranslateContext);
    const [mouseOverGames, setMouseOverGames] = useState(false);
    const [mouseOverLogout, setMouseOverLogout] = useState(false);
    const [mouseOverDeletePage, setMouseOverDeletePage] = useState(false);
    const [mouseOverAdm, setMouseOverAdm] = useState(false);
    const [mouseOverGameRegister, setMouseOverGameRegister] = useState(false);
    const [mouseOverTranslate, setMouseOverTranslate] = useState(false);
    const [adm, setAdm] = useState(false);

    function handleMouseOverGames() {
        setMouseOverGames(!mouseOverGames);
        setMouseOverLogout(false);
        setMouseOverTranslate(false);
        setMouseOverDeletePage(false);
        setMouseOverAdm(false);
        setMouseOverGameRegister(false);
    }
    function handleMouseOverLogout() {
        setMouseOverGames(false);
        setMouseOverLogout(!mouseOverLogout);
        setMouseOverTranslate(false);
        setMouseOverDeletePage(false);
        setMouseOverAdm(false);
        setMouseOverGameRegister(false);
    }
    function handleMouseOverTranslate() {
        setMouseOverGames(false);
        setMouseOverLogout(false);
        setMouseOverTranslate(!mouseOverTranslate);
        setMouseOverDeletePage(false);
        setMouseOverAdm(false);
        setMouseOverGameRegister(false);
    }
    function handleMouseOverDeletePage() {
        setMouseOverGames(false);
        setMouseOverLogout(false);
        setMouseOverTranslate(false);
        setMouseOverDeletePage(!mouseOverDeletePage);
        setMouseOverAdm(false);
        setMouseOverGameRegister(false);
    }
    function handleMouseOverAdm() {
        setMouseOverGames(false);
        setMouseOverLogout(false);
        setMouseOverTranslate(false);
        setMouseOverDeletePage(false);
        setMouseOverAdm(!mouseOverAdm);
        setMouseOverGameRegister(false);
    }
    function handleMouseOverGameRegister() {
        setMouseOverGames(false);
        setMouseOverLogout(false);
        setMouseOverTranslate(false);
        setMouseOverDeletePage(false);
        setMouseOverAdm(false);
        setMouseOverGameRegister(!mouseOverGameRegister);
    }

    function handleLogout() {
        sessionStorage.removeItem("token");
        navigate("/");
    }

    async function isAdm() {
        const token = sessionStorage.getItem('token');

        if (!token)
        {
            setAdm(false);
            return;
        }

        const decodeToken = jwtDecode(token)
        let id = decodeToken.id
        const res = await axios.post('http://localhost:8080/api/user/isadm', {
            id
        });

        let resultado = res.data.is
        console.log(decodeToken)
        setAdm(resultado)
    }

    useEffect(() => {
        isAdm();
    }, []);

    return (
        <>
            <Nav>
                <UlTop>
                    <Li>
                        <A><ImgLogo src={etsIcon}></ImgLogo></A>
                    </Li>
                </UlTop>
                <UlMid>
                    <Li>
                        <A onMouseOver={handleMouseOverGames} onMouseLeave={handleMouseOverGames} onClick={() => navigate('/home')}><Img src={gameIcon}></Img></A>
                        <Span mouseOver={mouseOverGames}>{language === 'en' ? 'Games' : 'Jogos'}</Span>
                    </Li>
                    {
                        adm && (
                            <>
                                <Li>
                                    <A onMouseOver={handleMouseOverGameRegister} onMouseLeave={handleMouseOverGameRegister} onClick={() => navigate('/home/gameregister')}><Img src={gameRegisterIcon}></Img></A>
                                    <Span mouseOver={mouseOverGameRegister}>{language === 'en' ? 'Game Register' : 'Cadastro de Jogos'}</Span>
                                </Li>
                                <Li>
                                    <A onMouseOver={handleMouseOverAdm} onMouseLeave={handleMouseOverAdm} onClick={() => navigate('/home/admregister')}><Img src={admRegisterIcon}></Img></A>
                                    <Span mouseOver={mouseOverAdm}>{language === 'en' ? 'Adm Register' : 'Cadastro de Adm'}</Span>
                                </Li>
                                <Li>
                                    <A onMouseOver={handleMouseOverDeletePage} onMouseLeave={handleMouseOverDeletePage} onClick={() => navigate('/home/delete')}><Img src={deletePageIcon}></Img></A>
                                    <Span mouseOver={mouseOverDeletePage}>{language === 'en' ? 'Delete Games' : 'Deletar Jogos'}</Span>
                                </Li>
                            </>
                        )
                    }
                    <Li>
                        <A onMouseOver={handleMouseOverTranslate} onMouseLeave={handleMouseOverTranslate} onClick={() => translate()}><Img src={translateIcon}></Img></A>
                        <Span mouseOver={mouseOverTranslate}>{language === 'en' ? 'Translate' : 'Tradução'}</Span>
                    </Li>
                </UlMid>
                <UlBott>
                    <Li>
                        <A onMouseOver={handleMouseOverLogout} onMouseLeave={handleMouseOverLogout} onClick={() => handleLogout()}><Img src={logoutIcon}></Img></A>
                        <Span mouseOver={mouseOverLogout}>{language === 'en' ? 'Logout' : 'Sair'}</Span>
                    </Li>
                </UlBott>
            </Nav>
            <Outlet />
        </>
    )
}