import styled from 'styled-components';
import deleteIcon from '../../assets/siteImages/icons/delete.png';

export const Container = styled.div`
    background-color: #11001c;
    min-height: 100vh;
    overflow-x: hidden;
`;

export const Row = styled.div`
    margin: 0 -5px;

    ::after {
        content: "";
        display: table;
        clear: both;
    }
`;

export const Column = styled.div`
    float: left;
    margin-left: 8%;
    margin-top: 2%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        .column {
            width: 100%;
            display: block;
            margin-bottom: 20px;
        }
    }
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    image-rendering: pixelated;
    background-image:url(${props => props.src});
    background-size: cover;
    background-position: center center;
    flex-direction: column;
    height: 300px;
    width: 300px;
    text-align: center;
    border-radius: 10%;
    transition:1s;
    color: transparent;
    font-size: 50px;

    &:hover {
        transition:1s;
        filter: grayscale(80%);
        color: white;
        font-size: 40px;
        border-radius: 10%;
        cursor: pointer;
    }
`;

export const Img = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 10%;
`;