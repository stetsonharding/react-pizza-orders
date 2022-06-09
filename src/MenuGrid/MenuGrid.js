import styled from "styled-components";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  border: 1px solid red;
`;

export const FoodImage = styled.div`
  height: 200px;
  background-image: ${({ img }) => `url(${img});`};
  color: white;

  background-size: cover;
  object-fit: contain;
  background-position: center;
`;
