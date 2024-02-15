import Bg from '../../assets/bgs/loginBg.png';
import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from 'react';
import { TranslateContext } from '../../context/translate';
import { Button, Container, InputBox, Input, Div, Img, Form, P, PTitle } from './styled';

function GameRegister() {
  const navigate = useNavigate();
  const { language } = useContext(TranslateContext);
  const [images, setImages] = useState([])
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [file, setFile] = useState("");
  const [bg, setBg] = useState("");
  const [img, setImg] = useState("");

  async function gameRegister(e) {
    e.preventDefault();
    console.log(file)
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('rating', rating);
    formData.append('bgPath', bg);
    formData.append('imgPath', img);
    formData.append('gamePath', file[0]);
  
    try {
      const res = await fetch('http://localhost:8080/api/game/create', {
        method: 'POST',
        body: formData
      });
      console.log(res);
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Img src={Bg} />
      <Container src={images[0]}>
        <Div>
          <P>{language === 'en' ? 'Game Register' : 'Cadastrar Jogo'}</P>
          <Form>
            <InputBox>
              <Input type='file' onChange={(e) => setFile(e.target.files)} />
              <Input placeholder={language === 'en' ? 'Game Name' : 'Nome do Jogo'} onChange={(e) => setName(e.target.value)} />
              <Input placeholder={language === 'en' ? 'Game Rating' : 'Avaliação do Jogo'} onChange={(e) => setRating(e.target.value)} />
              <Input placeholder={language === 'en' ? 'Game Description' : 'Descrição do Jogo'} onChange={(e) => setDescription(e.target.value)} />
            </InputBox>
            <PTitle>{language === 'en' ? 'Image Path' : 'Caminho da Imagem'}</PTitle>
            <InputBox>
              <Input onChange={(e) => setImg(e.target.value)} />
            </InputBox>
            <PTitle>{language === 'en' ? 'Background Image Path' : 'Caminho da Imagem de Fundo'}</PTitle>
            <InputBox>
              <Input onChange={(e) => setBg(e.target.value)} />
            </InputBox>
              <Button onClick={gameRegister}>{language === 'en' ? 'Submit' : 'Enviar'}</Button>
          </Form>
        </Div>
      </Container>
    </>
  );
}

export default GameRegister;