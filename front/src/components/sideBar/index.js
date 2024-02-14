import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TranslateContext } from '../../context/translate';
import etsIcon from '../../assets/siteImages/icons/ets.png';
import gameIcon from '../../assets/siteImages/icons/home.png';
import logoutIcon from '../../assets/siteImages/icons/logout.png';
import translateIcon from '../../assets/siteImages/icons/translate.png';
import { Nav, UlTop, UlMid, UlBott, Li, A, Img, ImgLogo, Span } from './styled';

export default function SideBar() {
    const navigate = useNavigate();
    const { language, translate } = useContext(TranslateContext);
    const [mouseOverGames, setMouseOverGames] = useState(false);
    const [mouseOverLogout, setMouseOverLogout] = useState(false);
    const [mouseOverTranslate, setMouseOverTranslate] = useState(false);

    function handleMouseOverGames() {
        setMouseOverGames(!mouseOverGames);
        setMouseOverLogout(false);
        setMouseOverTranslate(false);
    }
    function handleMouseOverLogout() {
        setMouseOverGames(false);
        setMouseOverLogout(!mouseOverLogout);
        setMouseOverTranslate(false);
    }
    function handleMouseOverTranslate() {
        setMouseOverGames(false);
        setMouseOverLogout(false);
        setMouseOverTranslate(!mouseOverTranslate);
    }

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
                    <Li>
                        <A onMouseOver={handleMouseOverTranslate} onMouseLeave={handleMouseOverTranslate} onClick={() => translate()}><Img src={translateIcon}></Img></A>
                        <Span mouseOver={mouseOverTranslate}>{language === 'en' ? 'Translate' : 'Tradução'}</Span>
                    </Li>
                </UlMid>
                <UlBott>
                    <Li>
                        <A onMouseOver={handleMouseOverLogout} onMouseLeave={handleMouseOverLogout}><Img src={logoutIcon}></Img></A>
                        <Span mouseOver={mouseOverLogout}>{language === 'en' ? 'Logout' : 'Sair'}</Span>
                    </Li>
                </UlBott>
            </Nav>
        </>
    )
}