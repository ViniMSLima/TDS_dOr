import { Container, Card, Column, Row } from './styled';
import { useState, useEffect } from "react";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';


export default function DeletePage() {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();


    async function getGames() {
        try {
            const res = await axios.get('http://localhost:8080/api/game/get');
            setGames(res.data.game);
        } catch (error) {
            console.error('Error fetching game data:', error);
        }
    }

    async function handleClick(id) {
        let isadm = isAdm();

        if (isadm) {
            const response = await fetch('http://localhost:8080/api/game/deletegame', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id }),
            });
        } else {
            alert("only adm's can delete games")
        }

        getGames();
    }

    async function isAdm() {
        const token = sessionStorage.getItem('token');
        const decodeToken = jwtDecode(token)

        let id = decodeToken.id
        const res = await axios.post('http://localhost:8080/api/user/isadm', {
            id
        });            

        let resultado = res.data.is
        return resultado
    }

    async function verify() {
        let adm = await isAdm();
        if(adm == false)
            navigate("/home");
    }

    useEffect(() => {
            getGames();
            verify();
    }, [])

    const RenderImages = () => {
        return games.map(gamy => {
            return (
                <Column key={gamy._id} onClick={() => handleClick(gamy._id)}>
                    <Card src={gamy.imgPath}>
                        Delete
                    </Card>
                </Column>
            )
        })
    }

    return (
        <>
            <Container>
                <Row>
                    <RenderImages />
                </Row>
            </Container>
        </>
    )
}