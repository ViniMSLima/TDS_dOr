import { Nav, UlLeft, UlMid, UlRight, Li, A, Img, ImgLogo, } from './styled';
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import etsIcon from '../../assets/siteImages/icons/ets.png';
import gameIcon from '../../assets/siteImages/icons/home.png';
import logoutIcon from '../../assets/siteImages/icons/logout.png';
import profileIcon from '../../assets/siteImages/icons/profile.png';

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <>
            <Nav>
                <UlLeft>
                    <Li>
                        <A><ImgLogo src={etsIcon}></ImgLogo></A>
                    </Li>
                </UlLeft>
                <UlMid>
                    <Li>
                        <A><Img src={gameIcon}></Img></A>
                    </Li>
                    <Li>
                        <A><Img src={profileIcon}></Img></A>
                    </Li>
                </UlMid>
                <UlRight>
                    <Li>
                        <A><Img src={logoutIcon}></Img></A>
                    </Li>
                </UlRight>
            </Nav>
        </>
    )
}