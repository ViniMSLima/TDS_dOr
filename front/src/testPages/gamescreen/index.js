import React, { useEffect, useState } from 'react';
import { Container, Game, GameInfo, Input, Text, GameTitle, CommentButton, GameName, GameRating, GameDescription, RatingSection, RatingLabel, CommentsSection, CommentsLabel, Comment, GameImage, DownloadButton, TextArea } from './styled';
import game from "../../games/etsTycoon.zip"
import "./style.css";
import { Void } from '../../components/common/styled';
import axios from 'axios';

function GameScreen() {
  const [images, setImages] = useState([]);
  const [gamePath, setGamePath] = useState();
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const id = "65c36790113cf9660cbe1d43";

  async function getGame() {
    try {
      const res = await axios.get('http://localhost:8080/api/game/get', {
        params: { id: '65c36790113cf9660cbe1d43' }
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
            <a href={gamePath} download>
              <DownloadButton>DOWNLOAD</DownloadButton>
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