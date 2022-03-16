import React from "react";
import styled from "styled-components";
import Container from "./Container";

const TitleOfPage = styled.h1`
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-align: center;
  font-style: italic;
`;

export const ContainerHeader = styled(Container)`
  height: 5rem;
`;

const Header = () => {
  return (
    <div>
      <header>
        <ContainerHeader>
          <TitleOfPage>Wilders Book</TitleOfPage>
        </ContainerHeader>
      </header>
    </div>
  );
};

export default Header;