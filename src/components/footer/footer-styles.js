import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: calc(100vw - var(--scrollbar-width));
  background: #1a1c21;
  color: #ccc;
  text-align: center;
  position: relative;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto 2rem;

  .logo {
    position: relative;
    right: 50px;
    width: 350px;
    height: auto;
  }
`;

export const FooterCol = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #ff822f;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    .datos {
      margin: 0.8rem;
    }

    li {
      margin: 0.5rem;

      a {
        color: #ccc;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;

  a {
    color: #fff;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #ff822f;
    transition: background 0.3s ease, transform 0.2s ease;

    &:hover {
      background: #1f83c1;
      transform: scale(1.1);
    }
  }
`;

export const Copy = styled.div`
  font-size: 0.9rem;
  color: white;
  margin-top: 2rem;
  border-top: 1px solid #222;
  padding-top: 1rem;
`;
