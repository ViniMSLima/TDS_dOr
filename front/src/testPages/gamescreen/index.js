import React from 'react';
import { Container, Column, GameInfo, GameTitle, GameRating, GameDescription, RatingSection, RatingLabel, CommentsSection, CommentsLabel, Comment, GameImage } from './styled';

function GameScreen() {
  return (
    <Container>
      <Column>
        <GameInfo>
          <GameTitle>Game Title</GameTitle>
          <GameRating>Rating: 9.5/10</GameRating>
          <GameDescription>
            This is a description of the game. It can be a few sentences or
            paragraphs long, depending on how much information you want to
            provide.
          </GameDescription>
        </GameInfo>
      </Column>
      <Column>
        <GameImage src="https://i.pinimg.com/564x/79/95/eb/7995ebe5a61d943b171d33ac7c73921b.jpg" alt="Game Cover" />
      </Column>
      <RatingSection>
        <RatingLabel>Rate the game:</RatingLabel>
        <select name="rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </RatingSection>
      <CommentsSection>
        <CommentsLabel>Comments:</CommentsLabel>
        <Comment>This is a great game!</Comment>
        <Comment>I can't wait for the sequel!</Comment>
        <Comment>The graphics are amazing.</Comment>
      </CommentsSection>
    </Container>
  );
}

export default GameScreen;