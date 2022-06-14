import React from "react";
import styled from "styled-components";
import { FoodGrid, FoodImage, FoodLabel } from "../MenuGrid/MenuGrid";
// import { foodSections } from "../Data/MenuData";

import { foodSections } from "../Data/MenuData";

const FoodMenuStyled = styled.div`
  margin: 0 600px 50px 20px;
  height: 1250px auto;
`;

export function FoodMenu({ setOpenFood }) {
  return (
    <>
      <FoodMenuStyled>
        <h1 style={{ textAlign: "center" }}>
          Blitz Menu - Flavors for royalty.
        </h1>
        {/* iterating over key value pairs, displaying section name and food image */}
        {Object.entries(foodSections).map(([sectionsName, foodItems]) => (
          <>
            <h2>{sectionsName}</h2>
            <FoodGrid>
              {foodItems.map((item) => (
                <FoodImage onClick={() => setOpenFood(item)} img={item.img}>
                  <FoodLabel>{item.name}</FoodLabel>
                </FoodImage>
              ))}
            </FoodGrid>
          </>
        ))}
      </FoodMenuStyled>
    </>
  );
}
