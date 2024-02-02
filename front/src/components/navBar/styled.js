import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Nav = styled.nav `
    display: none;
    background-color: #440046;
    @media (
        max-width: 768px
    )
    {
        display: flex;
    }
`;

export const Ul = styled.ul `
    display: flex;
    justify-content: space-between;	
`;

export const Li = styled.li `
`;

export const A = styled.a `
`;

export const Img = styled.img `
    height: 3vw;
    width: 3vw;
`;

export const Span = styled.span `
`;
