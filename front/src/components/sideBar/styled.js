import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Nav = styled.nav `
    display: inline-block;
	min-height: 100vh;
	width: 80px;
	background-color: #313443;
	float: left;
`;

export const Input = styled.input `
    /* display: none; */
    &:checked {
        color: red;
    }
`;

export const A = styled.a `
    display: block;
    height: 2em;
`;

export const Ul = styled.ul `
    text-align: center;
	color: white;
`;

export const Li = styled.li `
    padding: 28px 0;
	cursor: pointer;
	transition: all ease-out 120ms;
`;

export const Span = styled.span `
    
`;