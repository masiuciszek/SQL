import styled from "@emotion/styled";
import React from "react";
import { GlobalStyles } from "./global-styles";
import Nav from "./nav";

const Main = styled.main`
  margin: 0 auto;
  max-width: 900px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Main>{children}</Main>
    </>
  );
};
