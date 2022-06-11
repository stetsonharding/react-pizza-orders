import styled from "styled-components";
import { Title } from "../styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  // border: 1px solid red;
`;

export const FoodImage = styled(Title)`
  height: 200px;
  background-image: ${({ img }) => `url(${img});`};
  color: white;
  padding: 15px;
  background-size: cover;
  object-fit: contain;
  background-position: center;
  letter-spacing: 1px;
  font-size: 20px;
  border-radius: 20px;
`;
