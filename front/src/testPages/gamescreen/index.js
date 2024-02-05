import React from 'react';
import { Container, Game, GameInfo, Input, Text, GameTitle, CommentButton, GameName, GameRating, GameDescription, RatingSection, RatingLabel, CommentsSection, CommentsLabel, Comment, GameImage, DownloadButton } from './styled';
import game from "../../games/etsTycoon.zip"
import "./style.css";
import gameImage from "../../assets/gameImages/ameliaAndTheThirdDimension/logo.png";

function GameScreen() {
  return (
    <>
      <Container>
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
                tortor at ligula posuere, vulputate finibus nulla gravida. Maecenas luctus iaculis commodo.
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
          <div style={{ display: 'flex', flexDirection: 'column', height: '80%'}}>
            <GameImage src= {gameImage}></GameImage>
            <a href={game} download>
              <DownloadButton>DOWNLOAD</DownloadButton>
            </a>
          </div>
        </Game>
        <Game>
          <CommentsSection>
            <CommentsLabel>COMMENTS</CommentsLabel>

            <div style={{ display: 'flex' }}>
              <Input />
              <CommentButton>COMMENT</CommentButton>
            </div>
            <div style={{ marginTop: '50px' }}>
              <Comment>This is a great game!</Comment>
              <Comment>I can't wait for the sequel!</Comment>
              <Comment>The graphics are amazing.</Comment>
            </div>
          </CommentsSection>

        </Game>
      </Container>
    </>
  );
}

export default GameScreen;