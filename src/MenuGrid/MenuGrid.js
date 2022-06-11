import styled from "styled-components";
import { Title } from "../styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodImage = styled(Title)`
  height: 200px;
  background-image: ${({ img }) => `url(${img});`};
  color: #3c1361;
  padding: 15px;
  background-size: cover;
  object-fit: contain;
  background-position: center;
  letter-spacing: 1px;
  font-size: 20px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const FoodLabel = styled.div`
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 5px;
`;
