import React from "react";
import styled from "styled-components";

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
        {MenuData.map((foodItem) => {
          return (
            <>
              <p>{foodItem.name}</p>
              {/* <img src={foodItem.img} alt="" /> */}
            </>
          );
        })}
      </FoodMenuStyled>
    </>
  );
}
