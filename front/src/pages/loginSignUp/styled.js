import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    z-index: 1;
`;

export const Div = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 450px;
    width: 450px;
    text-align: center;
    border-radius: 10%;
    font-size: 35px;
    background-color: #7a1879;
    background: transparent;
    backdrop-filter: blur(5px);
    border: 4px solid gray;
`;

export const Form = styled.form `

`;

export const P = styled.p `
    font-size: 40px;
`;

export const InputBox = styled.div `

`;

export const Links = styled.div `

`;

export const A = styled.a `
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    transition: 1s;

    &:hover{
        transition: 1s;
    }
`;

export const Input = styled.input `
    background: transparent;
    backdrop-filter: blur(5px);
    border: 2px solid gray;
    border-radius: 50px;
    margin-top: 10px;
`;

export const Button = styled.input `
    border-radius: 50px;
    border: none;
    width: 250px;
`;

export const Img = styled.img `
    display: flex;
    position: absolute;
    z-index: -1;
    min-height: 100vh;
`;