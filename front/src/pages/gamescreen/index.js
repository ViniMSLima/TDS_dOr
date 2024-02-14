import "./style.css";
import axios from 'axios';
import { saveAs } from 'file-saver';
import React, { useEffect, useState, useContext } from 'react';
import { Void } from '../../components/common/styled';
import { TranslateContext } from '../../context/translate';
import { Container, Game, GameInfo, Input, Text, GameTitle, CommentButton, GameName, GameRating, GameDescription, RatingSection, RatingLabel, CommentsSection, CommentsLabel, Comment, GameImage, DownloadButton, TextArea } from './styled';


function GameScreen() {
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const { language } = useContext(TranslateContext);

  async function getGame() {
    sessionStorage.setItem('id', "65c638ce49601d493e86f544");
    const id = sessionStorage.getItem('id');
    
    try {
      const res = await axios.post('http://localhost:8080/api/game/get', {
        id: id
      });

      setImages([res.data.game.bgPath, res.data.game.imgPath]);
      setName(res.data.game.name);
      setRating(res.data.game.rating);
      setDescription(res.data.game.description);
    } catch (error) {
      console.error('Error fetching game data:', error);
    }
  }

  const [loading, setLoading] = useState(false);

  const downloadZip = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/game/getzip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name }),
      });

      if (!response.ok) {
        throw new Error('Erro ao baixar o arquivo');
      }

      const blob = await response.blob();
      saveAs(blob, name + '.zip');
      const deleteZip = await fetch('http://localhost:8080/api/game/deletezip', {
        method: 'DELETE'
      });

    } catch (error) {
      console.error('Erro ao baixar o arquivo:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGame();
  }, [])

  return (
    <>
      <Container src={images[0]}>
        <Game>
          <GameInfo>
            <GameTitle>
              <GameName>{name}</GameName>
              <GameRating>{rating}</GameRating>
            </GameTitle>

            <GameDescription>
              <Text>
                {description}
              </Text>
            </GameDescription>
          </GameInfo>
          <Void />
          <div style={{ display: 'flex', flexDirection: 'column', height: '80%' }}>
            <GameImage src={images[1]}></GameImage>
              <DownloadButton onClick={downloadZip} disabled={loading}>{language === 'en' ? 'DOWNLOAD' : 'BAIXAR'}</DownloadButton>
          </div>
          <Void />
        </Game>
        <Game>
          <CommentsSection>
            <CommentsLabel>{language === 'en' ? 'COMMENTS' : 'COMENTARIOS'}</CommentsLabel>

            <TextArea>
              <Input />
              <CommentButton>{language === 'en' ? 'COMMENT' : 'COMENTAR'}</CommentButton>
            </TextArea>
            <TextArea>
              <Comment>This is a great game!</Comment>
              <Comment>I can't wait for the sequel!</Comment>
              <Comment>The graphics are amazing.</Comment>
              <Comment>The graphics are amazing.</Comment>
              <Comment>The graphics are amazing.</Comment>
              <Comment>The graphics are amazing.</Comment>
            </TextArea>
            <Void />
            <Void />
          </CommentsSection>
        </Game>
      </Container>
    </>
  );
}

export default GameScreen;