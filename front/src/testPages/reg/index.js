import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

const Register = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [file, setFile] = useState(null);
  const [bg, setBg] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('rating', rating);
    formData.append('bgPath', bg);
    formData.append('imgPath', img);
    formData.append('gamePath', file);

    try {
      const res = await axios.post('http://localhost:8080/api/game/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input placeholder="name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="rating" onChange={(e) => setRating(e.target.value)} />
        <input placeholder="description" onChange={(e) => setDescription(e.target.value)} />

        <h4>imgPath</h4>
        <input type="file" onChange={(e) => setImg(e.target.files)} />
        <h4>bgPath</h4>
        <input type="file" onChange={(e) => setBg(e.target.files)} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Register;