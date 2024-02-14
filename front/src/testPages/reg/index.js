import React, { useEffect, useState } from 'react';
import { Container, Game, GameInfo, Input, Text, GameTitle, CommentButton, GameName, GameRating, GameDescription, RatingSection, RatingLabel, CommentsSection, CommentsLabel, Comment, GameImage, DownloadButton, TextArea } from './styled';
import "./style.css";
import { Void } from '../../components/common/styled';
import axios from 'axios';
import { saveAs } from 'file-saver';


function Register() {
  const [images, setImages] = useState([])
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [file, setFile] = useState("");
  const [bg, setBg] = useState("");
  const [img, setImg] = useState("");

  async function register() {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('rating', rating);
    formData.append('bgPath', bg);
    formData.append('imgPath', img);
    formData.append('gamePath', file);

    try {
      const res = await fetch('http://localhost:8080/api/game/create', {
        method: 'POST',
        headers: {
          ...formData.getHeaders()
        },
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
      <Container src={images[0]}>
        <input type='file' onChange={(e) => setFile(e.target.files)}></input>
        <input placeholder="name" onChange={(e) => setFile(e.target.value)}></input>
        <input placeholder="rating" onChange={(e) => setFile(e.target.files)}></input>
        <input placeholder="description" onChange={(e) => setFile(e.target.value)}></input>

        <h4>imgPath</h4>
        <input  onChange={(e) => setImg(e.target.value)}></input>
        <h4>bgPath</h4>
        <input  onChange={(e) => setBg(e.target.value)}></input>

        <button onClick={register}>Enviar</button>
      </Container>
    </>
  );
}

export default Register;