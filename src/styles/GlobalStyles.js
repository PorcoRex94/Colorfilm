import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Roboto', 'Sans-Serif';
    }

    :root{
        --azul: #1F83C1;
        --naranja: #FE6601;
        --negro: #1A1C21;
    }
`;

export const ContainerWaveTop = styled.div`
  width: 100%;
  position: relative;
  top: 4px;
`;

export const ContainerWaveBottom = styled.div`
  width: 100%;
  position: relative;
  z-index: 50;
`;
