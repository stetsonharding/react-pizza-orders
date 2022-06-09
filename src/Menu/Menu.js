import React from "react";
import styled from "styled-components";
import { FoodGrid } from "../MenuGrid/MenuGrid";
import { FoodImage } from "../MenuGrid/MenuGrid";

import { MenuData } from "../Data/MenuData";

const FoodMenuStyled = styled.div`
  border: 1px solid black;
  margin: 0 400px 50px 20px;
  height: 1000px;
`;

export function FoodMenu() {
  return (
    <>
      <FoodMenuStyled>
        <FoodGrid>
          {MenuData.map((foodItem) => {
            return (
              <>
                <FoodImage img={foodItem.img}>{foodItem.name}</FoodImage>
              </>
            );
          })}
        </FoodGrid>
      </FoodMenuStyled>
    </>
  );
}
