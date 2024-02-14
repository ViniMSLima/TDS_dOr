import { Container, Card, Column, Row } from './styled';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

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

    function handleClick(id) {
        sessionStorage.setItem('id', id)
        navigate("/game")
    }

    useEffect(() => {
        getGames();
    }, [])

    const RenderImages = () => {
        return games.map(gamy => {
            return (
                <Column key={gamy._id} onClick={() => handleClick(gamy._id)}>
                    <Card src={gamy.imgPath}>
                        {gamy.name}
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