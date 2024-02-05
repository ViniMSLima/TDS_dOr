import { Container, Card, Column, Row, Text, H1, Img, A } from './styled';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from '../../assets/gameImages/logoAmelia.png';
import logo2 from '../../assets/gameImages/logoFut.png';
import logo3 from '../../assets/gameImages/logoMoto.png';
import logo4 from '../../assets/gameImages/logoHabbo.png';

export default function HomePage() {
    const [imgArr, setImgArr] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setImgArr([logo1, logo2, logo3, logo4])
    }, [])

    const RenderImages = () => {
        return imgArr.map(img => {
            return (
                <Column>
                    <Card src={img}>
                            Name
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