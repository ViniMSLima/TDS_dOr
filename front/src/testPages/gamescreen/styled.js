import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const GameTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const GameRating = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const GameDescription = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
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
`;

export const CommentsLabel = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Comment = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const GameImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;