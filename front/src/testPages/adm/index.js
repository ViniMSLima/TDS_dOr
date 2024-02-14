import React, { useEffect, useState } from 'react';
import { Container, Game, GameInfo, Input, Text, GameTitle, CommentButton, GameName, GameRating, GameDescription, RatingSection, RatingLabel, CommentsSection, CommentsLabel, Comment, GameImage, DownloadButton, TextArea } from './styled';
import "./style.css";
import { Void } from '../../components/common/styled';
import axios from 'axios';
import { saveAs } from 'file-saver';


function GameScreen() {

  useEffect(() => {
    getGames();
  }, [])

  return (
    <>
        <h3>Delete Games</h3>

      </>
  );
}

export default GameScreen;