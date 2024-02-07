import React, { useEffect, useState } from 'react';
import { Container, Game, GameInfo, Input, Text, GameTitle, CommentButton, GameName, GameRating, GameDescription, RatingSection, RatingLabel, CommentsSection, CommentsLabel, Comment, GameImage, DownloadButton, TextArea } from './styled';
import game from "../../games/etsTycoon.zip"
import "./style.css";
import gameImage from "../../assets/gameImages/logoAmelia.png";
import { Void } from '../../components/common/styled';
import gameBackground from "../../assets/gameImages/bgAmelia.png";

function GameScreen() {
  const [ images, setImages ] = useState([])

  useEffect(() => {
    setImages([gameBackground, gameImage])
  }, [])

  return (
    <>
      <Container src={images[0]}>
        <Game>
          <GameInfo>
            <GameTitle>
              <GameName>Amelia and The Third Dimension</GameName>
              <GameRating>9.5</GameRating>
            </GameTitle>
  
            <GameDescription>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim nunc, volutpat
                faucibus porttitor vitae, tincidunt nec lectus. Aenean nec tristique enim, sed scelerisque tortor.
                Curabitur eu justo non libero fringilla pharetra vel sed lacus. Praesent porttitor est vitae libero
                volutpat, eget viverra nibh hendrerit. Pellentesque vitae eros interdum, ullamcorper magna nec,
                efficitur enim. Quisque enim sem, cursus at libero ut, tincidunt semper ipsum. Nulla malesuada
                tortor at ligula posuere, vulputate finibus nulla. Maecenas luctus iaculis commodo.
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
          <Void/>
          <div style={{ display: 'flex', flexDirection: 'column', height: '80%'}}>
            <GameImage src= {images[1]}></GameImage>
            <a href={game} download>
              <DownloadButton>DOWNLOAD</DownloadButton>
            </a>
          </div>
          <Void/>
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
        <Void/>
        <Void/>
          </CommentsSection>
        </Game>
      </Container>
    </>
  );
}

export default GameScreen;