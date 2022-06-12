import styled from "styled-components";
import { Title } from "../styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const FoodImage = styled(Title)`
  height: 150px;
  background-image: ${({ img }) => `url(${img});`};
  color: #3c1361;
  padding: 15px;
  background-size: cover;
  object-fit: contain;
  background-position: center;
  letter-spacing: 1px;
  font-size: 20px;
  border-radius: 20px;
  transition-property: opacity, margin-bottom;
  transition-duration: 0.2s;
  box-shadow: 0 0 2px 0 grey;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    margin-top: 0px;
  }
`;

export const FoodLabel = styled.div`
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 5px;
`;
