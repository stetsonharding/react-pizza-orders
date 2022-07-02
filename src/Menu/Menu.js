import React from "react";
import styled from "styled-components";
import { FoodGrid, FoodImage, FoodLabel } from "../MenuGrid/MenuGrid";

//format price function
import { formatPrice } from "../Data/MenuData";
import { foodSections } from "../Data/MenuData";

const FoodMenuStyled = styled.div`
  margin: 0 600px 50px 20px;
  height: 1250px auto;
`;

export function FoodMenu({ openFood, setOpenFood }) {
  return (
    <>
      <FoodMenuStyled>
        <h1 style={{ textAlign: "center" }}>
          Blitz Menu - Flavors for royalty.
        </h1>
        {/* iterating over key value pairs, displaying section name and food image */}
        {Object.entries(foodSections).map(([sectionsName, foodItems]) => (
          <div key={sectionsName}>
            <h2>{sectionsName}</h2>
            <FoodGrid>
              {foodItems.map((item) => (
                <div key={item.id}>
                  <FoodImage onClick={() => setOpenFood(item)} img={item.img}>
                    <FoodLabel>
                      <div> {item.name}</div>
                      <div> {formatPrice(item.price)}</div>
                    </FoodLabel>
                  </FoodImage>
                </div>
              ))}
            </FoodGrid>
          </div>
        ))}
      </FoodMenuStyled>
    </>
  );
}
