import { Nav, Ul, Li, A, Img, Span } from './styled';
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import gameIcon from '../../assets/siteImages/icons/home.png'
import logoutIcon from '../../assets/siteImages/icons/logout.png'
import profileIcon from '../../assets/siteImages/icons/profile.png'

export default function NavBar() {
    const [mouseOverGames, setMouseOverGames] = useState(false);
    const [mouseOverProfile, setMouseOverProfile] = useState(false);
    const [mouseOverLogout, setMouseOverLogout] = useState(false);
    const navigate = useNavigate();

    function handleMouseOverGames() {
        setMouseOverGames(!mouseOverGames);
        setMouseOverProfile(false);
        setMouseOverLogout(false);
    }
    function handleMouseOverProfile() {
        setMouseOverGames(false);
        setMouseOverProfile(!mouseOverProfile);
        setMouseOverLogout(false);
    }
    function handleMouseOverLogout() {
        setMouseOverGames(false);
        setMouseOverProfile(false);
        setMouseOverLogout(!mouseOverLogout);
    }

    return (
        <>
            <Nav>
                <Ul>
                    <Li>
                        <A onMouseOver={handleMouseOverGames} onMouseLeave={handleMouseOverGames} onClick={() => navigate('/home')}><Img src={gameIcon}></Img></A>
                        <Span mouseOver={mouseOverGames}>Games</Span>
                    </Li>
                    <Li>
                        <A onMouseOver={handleMouseOverProfile} onMouseLeave={handleMouseOverProfile} onClick={() => navigate('/home')}><Img src={profileIcon}></Img></A>
                        <Span mouseOver={mouseOverProfile}>Descriptions</Span>
                    </Li>
                    <Li>
                        <A onMouseOver={handleMouseOverLogout} onMouseLeave={handleMouseOverLogout} onClick={() => navigate('/home')}><Img src={logoutIcon}></Img></A>
                        <Span mouseOver={mouseOverLogout}>Logout</Span>
                    </Li>
                </Ul>
            </Nav>
        </>
    )
}