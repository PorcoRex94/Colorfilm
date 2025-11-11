import styled from "styled-components";

export const Section = styled.section`
  width: calc(100vw - var(--scrollbar-width));
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: blur(12px) brightness(0.7);
  transform: scale(1.1);
  z-index: -2;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-size: 200% 200%;
  animation: gradientShift 14s ease infinite;
  z-index: 10;

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const HeroContent = styled.div`
  background: rgba(26, 28, 33, 0.6);
  backdrop-filter: blur(14px) saturate(140%);
  border-radius: 16px;
  padding: 2rem;
  min-width: 600px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  color: white;

  @media (max-width: 800px) {
    min-width: 450px;
  }

  @media (max-width: 500px) {
    min-width: 300px;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.2rem;
  color: #e9620b;
  span {
    color: var(--negro);
    font-weight: bold;
    padding-right: 0.3rem;
  }

  @media (max-width: 960px) {
    font-size: 3rem;
  }
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 1.5rem;
  color: white;
  li {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    &::before {
      content: "•";
      color: #1f83c1;
      font-weight: bold;
    }
  }
`;

export const CtaRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.7rem;
    align-items: center;
  }
`;

export const PrimaryBtn = styled.a`
  background: #ff822f;
  color: #fff;
  padding: 0.9rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  transition: 0.2s ease;
  text-decoration: none;

  &:hover {
    background: #e86d1d;
    transform: translateY(-2px);
  }
`;

export const SecondaryBtn = styled.a`
  background: #1f83c1;
  color: #fff;
  padding: 0.9rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  transition: 0.2s ease;
  text-decoration: none;

  &:hover {
    background: #16679a;
    transform: translateY(-2px);
  }
`;

export const IndicatorsBar = styled.div`
  position: absolute;
  bottom: 1.2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.6rem;
  z-index: 30;

  @media (max-width: 600px) {
    gap: 0.9rem;
  }
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: ${({ $active }) =>
    $active ? "#ff822f" : "rgba(255,255,255,0.6)"};
  transition: 0.2s ease;

  &:hover {
    background: #ff822f;
  }

  @media (max-width: 600px) {
    width: 14px;
    height: 14px;
  }
`;

export const ArrowLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  cursor: pointer;
  z-index: 35;
  padding: 0.5rem 0.8rem;
  border-radius: 25%;
  backdrop-filter: blur(4px);
  transition: 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const ArrowRight = styled(ArrowLeft)`
  left: auto;
  right: 1rem;
`;
