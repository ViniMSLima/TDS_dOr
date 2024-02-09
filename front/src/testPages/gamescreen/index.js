import React, { useEffect, useState } from 'react';
import { Container, Game, GameInfo, Input, Text, GameTitle, CommentButton, GameName, GameRating, GameDescription, RatingSection, RatingLabel, CommentsSection, CommentsLabel, Comment, GameImage, DownloadButton, TextArea } from './styled';
import game from "../../games/etsTycoon.zip"
import "./style.css";
import { Void } from '../../components/common/styled';
import axios from 'axios';
import { saveAs } from 'file-saver';


function GameScreen() {
  const [images, setImages] = useState([]);
  const [gamePath, setGamePath] = useState();
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  async function getGame() {
    try {
      const res = await axios.post('http://localhost:8080/api/game/get', {
        id: '65c612800e1f40683803c39a'
      });

      setImages([res.data.game.bgPath, res.data.game.imgPath]);
      setGamePath(res.data.game.gamePath);
      setName(res.data.game.name);
      setRating(res.data.game.rating);
      setDescription(res.data.game.description);
      setGamePath(res.data.game.gamePath);
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
            <RatingSection>
              <RatingLabel>Rate the game:</RatingLabel>
              <select name="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>

            </RatingSection>
          </GameInfo>
          <Void />
          <div style={{ display: 'flex', flexDirection: 'column', height: '80%' }}>
            <GameImage src={images[1]}></GameImage>
            <a>
              <DownloadButton onClick={downloadZip} disabled={loading}>DOWNLOAD</DownloadButton>
            </a>
          </div>
          <Void />
        </Game>
        <Game>
          <CommentsSection>
            <CommentsLabel>COMMENTS</CommentsLabel>

            <TextArea>
              <Input />
              <CommentButton>COMMENT</CommentButton>
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