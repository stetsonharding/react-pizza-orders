import React from "react";
import styled from "styled-components";
import { FoodGrid, FoodImage, FoodLabel } from "../MenuGrid/MenuGrid";

import { MenuData } from "../Data/MenuData";

const FoodMenuStyled = styled.div`
  margin: 0 400px 50px 20px;
  height: 1000px;
`;

export function FoodMenu() {
  return (
    <>
      <FoodMenuStyled>
        <h1>Blitz Menu - Flavors for royalty. </h1>
        <FoodGrid>
          {MenuData.map((foodItem) => {
            return (
              <>
                <FoodImage img={foodItem.img}>
                  <FoodLabel>{foodItem.name}</FoodLabel>
                </FoodImage>
              </>
            );
          })}
        </FoodGrid>
      </FoodMenuStyled>
    </>
  );
}
