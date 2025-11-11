import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: calc(100vw - var(--scrollbar-width));
  padding: 1.2rem;
  background-color: var(--negro);
  position: relative;
  z-index: 999;

  .img__logo {
    width: 175px;
    height: auto;
  }

  .nav__burger,
  .nav__close {
    color: var(--naranja);
  }

  .nav__toggle {
    position: relative;
    width: 32px;
    height: 32px;
    display: none; /* Ocultar por defecto */
  }

  .nav__burger,
  .nav__close {
    position: absolute;
    inset: 0;
    margin: auto;
    font-size: 1.7rem;
    cursor: pointer;
    transition: opacity 0.3s, transform 0.4s;
  }

  .nav__close {
    opacity: 0;
  }

  .show-icon .nav__burger {
    opacity: 0;
    transform: rotate(90deg);
  }
  .show-icon .nav__close {
    opacity: 1;
    transform: rotate(90deg);
  }

  .nav__menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 2rem;
    width: 45%;
    gap: 2rem;
  }

  .no-scroll {
    overflow: hidden;
    height: 100vh;
  }

  @media (min-width: 1245px) and (max-width: 1412px) {
    .nav__menu {
      width: 45%;
    }
  }

  @media (max-width: 1244px) {
    .nav__menu {
      width: 50%;
    }

    @media (max-width: 1092px) {
      .nav__menu {
        width: 57%;
      }
    }
  }
  @media screen and (max-width: 960px) {
    .img__logo {
      width: 215px;
    }

    .nav__menu {
      display: none;
      position: fixed; /* Ajuste para que el menú esté fijo en la pantalla */
      top: 0;
      right: 0;
      width: 75%;
      height: 100%; /* Ocupa toda la pantalla */
      background-color: #1b1b1b; /* Color oscuro según el diseño */
      padding: 2rem 0; /* Espaciado interno */
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s ease-in-out;
      z-index: 1000; /* Asegura que el menú esté encima de otros elementos */
    }

    .nav__list {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 5rem 3rem;
      height: 100%;
      width: 99%;
      gap: 2rem;
    }

    .show-menu {
      display: flex;
      opacity: 1;
      pointer-events: all;
    }

    /* Iconos de apertura y cierre */
    .nav__toggle {
      display: block;
      width: 40px;
      height: 40px;
      z-index: 1100;
    }

    .nav__burger,
    .nav__close {
      color: var(--naranja);
    }

    .nav__close {
      position: absolute;
      font-size: 2rem;
      cursor: pointer;
    }

    /* Submenús */

    .dropdown__item {
      position: relative; /* Hace que los hijos usen este contenedor como referencia */
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem; /* Espacio entre cada dropdown */
    }

    .dropdown__menu {
      position: absolute; /* Permite ajustar con precisión */
      top: 0; /* Alínealo al nivel superior del contenedor */
      left: 0;
      padding: 1rem; /* Ajusta espacio interno */
      background-color: #1b1b1b !important;
      border-radius: 10px;
      max-height: 0; /* Inicialmente colapsado */
      overflow: hidden;
      transition: max-height 0.4s ease, opacity 0.3s ease-in-out;
    }

    .dropdown__link:hover {
      background-color: rgb(54, 53, 53) !important;
    }

    .dropdown__item.show-dropdown .dropdown__menu {
      position: relative;
      max-height: 300px; /* Despliegue */
      opacity: 1; /* Transición suave */
      top: 1.5rem; /* Ajusta este valor para acercarlo a "Rubros" */
    }

    .nav__link {
      width: fit-content;
      color: white;
    }

    .nav__toggle,
    .nav__burger,
    .nav__close,
    .dropdown__item {
      -webkit-tap-highlight-color: transparent;
    }

    @media (min-width: 360px) and (max-width: 500px) {
      padding: 0.5rem;
      .img__logo {
        width: 175px;
      }
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    height: 70px;
  }
`;

export const UlContainer = styled.ul`
  display: flex;
  gap: 3rem;
  color: var(--naranja);

  .nav__link {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: var(--naranja);
    font-size: 1.1rem;
    font-weight: 600;
  }

  .li__empty {
    padding: 1rem;
  }

  .dropdown__item {
    position: relative;
    cursor: pointer;
  }

  .dropdown__arrow {
    position: relative;
    top: 1px;
    color: var(--naranja);
    font-size: 1.2rem;
  }

  .dropdown__menu {
    position: absolute;
    top: 18px;
    right: -130px;
    width: 230px;
    background-color: var(--negro);
    border-radius: 15px;
    padding: 0.5rem 0;
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 10;
  }

  .dropdown__item:hover .dropdown__menu {
    max-height: 1000px;
    transition: max-height 0.4s ease-in;
  }

  .dropdown__item.show-dropdown .dropdown__menu {
    display: block;
    opacity: 1;
  }

  .dropdown__link {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0.75rem 0.9rem;
    font-weight: 650;
    color: var(--naranja);
  }

  .hand__icon {
    font-size: 1.1rem;
  }

  .dropdown__link:hover {
    background-color: rgb(36, 46, 44);
    border-radius: 15px;
    margin: 0 1rem;
    font-weight: 800;
    color: white;
  }

  .nav__link:hover,
  .nav__link:hover .dropdown__arrow {
    color: white; /* Color en hover */
  }

  @media (max-width: 1090px) {
    gap: 2.7rem;
  }

  @media (max-width: 960px) {
    .li__empty {
      display: none;
    }

    .nav__link {
      padding: 0;
    }
  }

  @media (min-width: 961px) {
    .dropdown__item:hover .nav__link + .dropdown__menu {
      display: block;
      opacity: 1;
    }
  }
`;
