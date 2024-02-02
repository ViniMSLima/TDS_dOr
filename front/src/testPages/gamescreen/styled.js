import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: black;
  height: 100vh;
  color: white;
  background-image: url("https://images.alphacoders.com/134/1341414.png");
  background-attachment: fixed;
  overflow-x: hidden;

`;

export const Game = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  height: 70vh;
  width: 100vw;

`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

`;

export const GameName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  font-size: 7vh;
  margin-left: 12px;
  text-align: center;

`;

export const GameTitle = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 3vw;
  height: 30vh;

`;

export const GameRating = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  font-size: 7vw;
  font-size: 8vw;
`;

export const Text = styled.div`
  margin: 2vw;
`;

export const GameDescription = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  width: 80%;
  text-align: center;
  background-color: #313443;
  border-radius: 15px;
  box-shadow: 5px 5px #7a1879;
`;

export const RatingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

`;

export const RatingLabel = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CommentsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const CommentsLabel = styled.div`
  font-size: 2vh;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Comment = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  background-color: #313443;
  width: 37vw;
  height: 8vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &:hover {
    background-color: #7a1879;
  }

`;

export const GameImage = styled.img`
  width: 35vw;
  height: 100%;
  object-fit: auto;
  border-radius: 15px;
  box-shadow: 5px 5px #7a1879;
  margin-bottom: 30px;

`;

export const DownloadButton = styled.button`
  height: 15vh;
  width: 35vw;
  border-radius: 15px;
  background-color: #6c126c;
  color: white;
  font-size: 2vw;
  font-weight: 700;
  
  &:hover {
    background-color: #7a1879;
  }
`;


export const CommentButton = styled.button`
  height: 6vh;
  width: 6vw;
  border-radius: 15px;
  background-color: #6c126c;
  color: white;
  font-size: 1.8vh;
  font-weight: 700;
  
  &:hover {
    background-color: #7a1879;
  }

`;

export const Input = styled.textarea`
  height: 6vh;
  width: 33vw;
  margin-right: 10px;
  border-radius: 15px;
  background-color: #313443;
  color: white;
  font-size: 2vh;
  font-weight: 700;
  
`;