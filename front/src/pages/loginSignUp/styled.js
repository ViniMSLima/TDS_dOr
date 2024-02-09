import styled from "styled-components";

export const Img = styled.img `
    display: flex;
    position: absolute;
    z-index: -1;
    object-fit: cover;
    height: 100vh;
    width: 100vw;
`;

export const ContainerLogin = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    z-index: 1;
`;

export const DivLogin = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 450px;
    width: 450px;
    text-align: center;
    border-radius: 10%;
    font-size: 35px;
    background: transparent;
    backdrop-filter: blur(5px);
    border: 4px solid lightgray;

    @media screen and (max-width: 1200px) {
        width: 50%;
    }

    @media screen and (max-width: 850px) {
        width: 80%;
    }
`;

export const FormLogin = styled.form `
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        width: 50%;
    }
`;

export const PLogin = styled.p `
    font-size: 40px;
    background-color: lightgray;
    width: 150px;
    border-radius: 0px 0px 20px 20px;
    color: black;
`;

export const InputBoxLogin = styled.div `

`;

export const LinksLogin = styled.div `
    background-color: lightgray;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 80px;
    transition: 1s;

    &:hover{
        transition: 1s;
        transform: scale(0.95);
        background-color: gray;
    }
`;

export const ALogin = styled.a `
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    transition: 1s;
    color: black;
`;

export const InputLogin = styled.input `
    background: transparent;
    backdrop-filter: blur(5px);
    border: 2px solid lightgray;
    border-radius: 20px;
    margin-top: 10px;

    &::placeholder {
        color: lightgray;
    }

    @media screen and (max-width: 768px) {
        width: 82%;
    }
`;

export const ButtonLogin = styled.input `
    border-radius: 20px;
    border: none;
    width: 250px;
    background-color: lightgray;
    transition: 1s;

    &:hover{
        transition: 1s;
        transform: scale(0.95);
        background-color: gray;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ContainerSignUp = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    z-index: 1;
`;

export const DivSignUp = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    height: auto;
    width: 950px;
    text-align: center;
    border-radius: 50px;
    font-size: 35px;
    background: transparent;
    backdrop-filter: blur(5px);
    border: 4px solid lightgray;

    @media screen and (max-width: 1200px) {
        width: 50%;
    }

    @media screen and (max-width: 850px) {
        width: 80%;
    }
`;

export const FormSignUp = styled.form `
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1200px) {
        width: 50%;
    }
`;

export const PSignUp = styled.p `
    font-size: 40px;
    background-color: lightgray;
    width: 190px;
    border-radius: 0px 0px 20px 20px;
    color: black;
`;

export const InputBoxSignUp = styled.div `
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
`;

export const LinksSignUp = styled.div `
    background-color: lightgray;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 60px;
    transition: 1s;

    &:hover{
        transition: 1s;
        transform: scale(0.95);
        background-color: gray;
    }
`;

export const ASignUp = styled.a `
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    transition: 1s;
    color: black;
`;

export const InputSignUp = styled.input `
    background: transparent;
    backdrop-filter: blur(5px);
    border: 2px solid lightgray;
    border-radius: 20px;
    margin: 5px 5px 5px 5px;
    width: 430px;

    &::placeholder {
        color: lightgray;
    }

    @media screen and (max-width: 768px) {
        width: 82%;
    }
`;

export const ButtonSignUp = styled.input `
    border-radius: 20px;
    border: none;
    width: 250px;
    background-color: lightgray;

    transition: 1s;

    &:hover{
        transition: 1s;
        transform: scale(0.95);
        background-color: gray;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;