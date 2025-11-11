import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: calc(100vw - var(--scrollbar-width));
  background-color: #fe6601;
  color: #fff;
  overflow: hidden;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Intro = styled.div`
  max-width: 900px;
  margin: 0 auto 60px;
  text-align: center;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: white;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-bottom: 60px;
  padding: 2rem;

  @media (max-width: 926px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactCard = styled(motion.a)`
  background: #24262d;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  color: inherit;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #ff822f;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 1rem;
    color: #bbb;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
  }

  @media (max-width: 1050px) {
    padding: 2rem 1.5rem;
  }
`;
