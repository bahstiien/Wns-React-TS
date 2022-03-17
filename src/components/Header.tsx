import React from "react";
import styled from "styled-components";
import Container from "./Container";

const TitleOfPage = styled.h1`
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-align: center;
  font-style: italic;
`;

const LinkOfHeader = styled.h2`
text-decoration: none;  
display: flex;
flex-direction: row;
justify-content: space-around
`;

export const ContainerHeader = styled(Container)`
  height: 8rem;
`;

const Header = () => {
  return (
    <div>
      <header>
        <ContainerHeader>
          <TitleOfPage>Wilders Book</TitleOfPage>
          <LinkOfHeader>

            <a href="/"> 
              <h2>
                    Home                
                </h2>
            </a>

            <a href="/about"> 
   <h2>
                      About                
                  </h2>
            </a>

            <a href="/form"> 

              <h2>
                  Ajout                
              </h2>
            </a>
            </LinkOfHeader>
        </ContainerHeader>
      </header>
    </div>
  );
};

export default Header;