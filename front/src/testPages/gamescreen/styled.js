import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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
  width: 100vw;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

`;

export const GameName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 7vh;
  text-align: center;

`;

export const GameTitle = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30vh;
  width: 90%;
`;

export const GameRating = styled.div`
  margin: auto;
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
  background: transparent;
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 5px 5px 5px #7a1879;
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

  @media (max-width: 768px) {
    width: 75%;
  }
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

  @media (max-width: 768px) {
    width: 100%;
  }

`;

export const GameImage = styled.img`
  width: 30vw;
  height: 80%;
  object-fit: auto;
  border-radius: 15px;
  box-shadow: 5px 5px #7a1879;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 55vw;
  }

`;

export const DownloadButton = styled.button`
  height: 15vh;
  width: 100%;
  border-radius: 15px;
  background-color: #6c126c;
  color: white;
  font-size: 18px;
  font-weight: 700;
  
  &:hover {
    background-color: #7a1879;
  }
`;


export const CommentButton = styled.button`
  height: 6vh;
  width: 100%;
  border-radius: 15px;
  background-color: #6c126c;
  color: white;
  font-size: 1.8vh;
  font-weight: 700;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: #7a1879;
  }

`;

export const Input = styled.textarea`
  height: 6vh;
  width: 100%;
  border-radius: 15px;
  background-color: #313443;
  color: white;
  font-size: 2vh;
  font-weight: 700;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextArea = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 75%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 75%;
  }
`