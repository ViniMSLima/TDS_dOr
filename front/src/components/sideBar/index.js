import { Nav, Ul, Li, Span, A } from './styled';
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import gameIcon from '../../assets/siteImages/icons/home.png'
import logoutIcon from '../../assets/siteImages/icons/logout.png'
import descIcon from '../../assets/siteImages/icons/description.png'

export default function SideBar() {
    const navigate = useNavigate();

    return (
        <>
            <Nav>
                <Ul>
                    <Li>
                        <A src={gameIcon}></A>
                    </Li>
                    <Li>
                        <Span>Description</Span>
                    </Li>
                    <Li>
                        <Span>Description</Span>
                    </Li>
                </Ul>
            </Nav>
        </>
    )
}