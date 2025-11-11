import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  width: calc(100vw - var(--scrollbar-width));
  position: relative;
  background-color: var(--negro);
  overflow: hidden;
  padding: 3rem 2rem;
`;

export const Intro = styled.div`
  max-width: 900px;
  margin: 0 auto 60px;
  text-align: center;

  h2 {
    color: #ff822f;
    font-size: 2.2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #e2e8f0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); /* achicado */
  gap: 40px;
  max-width: 1200px; /* limite opcional */
  margin: 0px auto 0; /* centrado con margen arriba */
  padding: 5rem 0 3.5rem 0;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

export const BeneficiosRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 5rem;
`;

export const Beneficio = styled(motion.div)`
  max-width: 350px;
  text-align: center;

  h3 {
    margin-top: 15px;
    font-size: 1.3rem;
    color: #fff;
  }

  p {
    color: #cbd5e1;
    margin-top: 8px;
    font-size: 0.95rem;
  }

  @media (max-width: 960px) {
    margin-bottom: 2rem;
  }
`;

export const IconWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 320px;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(26, 28, 33, 0.4),
    rgba(26, 28, 33, 0.9)
  );
`;

export const CardContent = styled.div`
  position: absolute;
  z-index: 2;
  h3 {
    position: absolute;
    bottom: 175px;
    left: 115px;
    color: #ff822f;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 8px;
    width: 138px;
  }

  @media (max-width: 1200px) {
    h3 {
      left: 105px;
    }
  }

  @media (max-width: 1100px) {
    h3 {
      left: 80px;
    }
  }

  @media (max-width: 960px) {
    left: 31.5%;
  }

  @media (max-width: 700px) {
    left: 26%;
  }

  @media (max-width: 500px) {
    left: 14%;
  }

  @media (max-width: 450px) {
    left: 9%;
  }
`;
export const Btn = styled(Link)`
  position: absolute;
  z-index: 56;
  bottom: 120px;
  left: 140px;
  padding: 0;
  margin: 0;
  font-size: 1.1rem;
  width: 95px;
  border-radius: 4px;
  padding: 0.5rem;
  background-color: var(--naranja);
  border: none;
  color: white;

  &:hover {
    background-color: var(--negro);
    transform: scale(1.1);
    color: white;
  }

  @media (max-width: 1200px) {
    left: 130px;
  }

  @media (max-width: 1100px) {
    left: 105px;
  }
`;
