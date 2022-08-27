import styled from "styled-components";

import banner from "../assets/blitzPizzaBanner.jpg";

export const Banner = styled.div`
  height: 450px;
  background-image: url(${banner});
  background-size: cover;
  object-fit: contain;
  background-position: center;
`;
