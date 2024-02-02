import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Nav = styled.nav `
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
	min-height: 100vh;
	width: 4vw;
	background-color: #440046;
`;

export const Ul = styled.ul `
    display: flex;
    flex-direction: column;
	color: white;
    list-style-type: none;
    gap: 2vw;
    padding: 0;
    margin: auto;
`;

export const Li = styled.li `
	cursor: pointer;
`;

export const A = styled.a `
    display: block;
`;

export const Img = styled.img `
    display: block;
    height: 3vw;
    width: 3vw;
`;

export const Span = styled.span `
    display: ${props => props.mouseOver?"inline-block" : "none"};
    position: absolute;
    background-color: #440046;
    padding: 8px 15px;
    margin-top: -43px;
    font-size: 13px;
    position: absolute;
    left: 5vw;
    border-radius: 10px;
`;