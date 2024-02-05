import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Nav = styled.nav `
    display: none;
    flex-direction: column;
    justify-content: center;
    position: fixed;
	min-height: 100vh;
	width: 75px;
	background-color: #440046;
    border-radius: 0 20px 20px 0;
    @media (
        min-width: 769px
    )
    {
        display: flex;
    }

`;

export const UlTop = styled.ul `
    display: flex;
    flex-direction: column;
	color: white;
    list-style-type: none;
    padding: 0;
    padding-top: 0.5vw;
    padding-left: 0.5vw;
`;

export const UlMid = styled.ul `
    display: flex;
    flex-direction: column;
	color: white;
    list-style-type: none;
    gap: 2vw;
    padding: 0;
    margin: auto;
`;

export const UlBott = styled.ul `
    display: flex;
    flex-direction: column;
	color: white;
    list-style-type: none;
    padding: 0;
    padding-left: 0.5vw;
`;

export const Li = styled.li `
    cursor: crosshair;
`;

export const A = styled.a `
    display: block;
`;

export const Img = styled.img `
    display: block;
    height: 55px;
    width: 55px;
`;

export const ImgLogo = styled.img `
    display: block;
    height: 37px;
    width: 55px;
`;

export const Span = styled.span `
    display: ${props => props.mouseOver?"inline-block" : "none"};
    position: absolute;
    background-color: #440046;
    padding: 8px 15px;
    margin-top: -43px;
    font-size: 13px;
    position: absolute;
    left: 90px;
    border-radius: 10px;
`;
