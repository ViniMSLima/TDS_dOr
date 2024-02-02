import React from 'react';
import { Container, Game, GameInfo, Input, Text, GameTitle, GameName, GameRating, GameDescription, RatingSection, RatingLabel, CommentsSection, CommentsLabel, Comment, GameImage, DownloadButton } from './styled';
import game from "../../games/etsTycoon.zip"
import "./style.css";

function GameScreen() {
  return (
    <>
      <Container>
        <Game>
          <GameInfo>
            <GameTitle>
              <GameName>Game Name</GameName>
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
          <GameImage src="https://i.pinimg.com/564x/79/95/eb/7995ebe5a61d943b171d33ac7c73921b.jpg"></GameImage>
        </Game>
        <Game>
          <CommentsSection>
            <CommentsLabel>Comments:</CommentsLabel>
            <Input></Input>
            <Comment>This is a great game!</Comment>
            <Comment>I can't wait for the sequel!</Comment>
            <Comment>The graphics are amazing.</Comment>
          </CommentsSection>
          <a href={game} download>
            <DownloadButton>DOWNLOAD</DownloadButton>
          </a>
        </Game>
      </Container>
    </>
  );
}

export default GameScreen;