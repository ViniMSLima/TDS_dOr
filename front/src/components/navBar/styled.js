import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Nav = styled.nav `
    display: none;
    background-color: #440046;
    justify-content: space-between;
    border-radius: 0px 0px 20px 20px;
    @media (
        max-width: 768px
    )
    {
        display: flex;
    }
`;

export const UlLeft = styled.ul `
    display: flex;
    justify-content: space-between;	
    list-style-type: none;
`;

export const UlMid = styled.ul `
    display: flex;
    justify-content: space-between;	
    list-style-type: none;
`;

export const UlRight = styled.ul `
    display: flex;
    justify-content: space-between;	
    list-style-type: none;
`;

export const Li = styled.li `
`;

export const A = styled.a `
`;

export const Img = styled.img `
    height: 55px;
    width: 55px;
`;

export const ImgLogo = styled.img `
    height: 37px;
    width: 55px;
`;