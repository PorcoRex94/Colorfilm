import { LuArrowBigRightDash } from "react-icons/lu";
import { HeaderContainer, NavContainer, UlContainer } from "./navbar-styles.js";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useRef } from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect } from "react";

export const Navbar = () => {
  const toggleRef = useRef(null);
  const navRef = useRef(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const targetElement = document.getElementById(location.hash.substring(1));
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" });

        // Borra el hash de la URL sin recargar la página
        window.history.replaceState(null, null, " ");
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    const menuIsOpen = navRef.current.classList.contains("show-menu");

    if (!menuIsOpen) {
      // Guarda la posición actual antes de fijar
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      // Recupera la posición al cerrar el menú
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    navRef.current.classList.toggle("show-menu");
    toggleRef.current.classList.toggle("show-icon");
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index)); // Alternar entre abierto/cerrado
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.position = "unset";

    // Asegurar que el menú se cierra correctamente
    if (navRef.current) {
      navRef.current.classList.remove("show-menu");
    }

    // También aseguramos que el ícono vuelve a su estado inicial
    if (toggleRef.current) {
      toggleRef.current.classList.remove("show-icon");
    }
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <Link to="/" className="nav__logo">
          <img
            src="/assets/imgs/logos/colorfilm__logo_dos.webp"
            alt="Logo Colorfilm"
            className="img__logo"
          />
        </Link>
        <div
          className="nav__toggle"
          id="nav-toggle"
          ref={toggleRef}
          onClick={toggleMenu}
        >
          <RxHamburgerMenu className="nav__burger" />
          <IoClose className="nav__close" />
        </div>
        <div className="nav__menu" id="nav-menu" ref={navRef}>
          <UlContainer className="nav__list">
            <li>
              <Link
                to="/"
                className="nav__link"
                onClick={() => {
                  toggleMenu();
                  closeMenu();
                }}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/#nosotros"
                className="nav__link"
                onClick={() => {
                  toggleMenu();
                  closeMenu();
                }}
              >
                Nosotros
              </Link>
            </li>
            <li
              className={`dropdown__item ${
                activeDropdown === 0 ? "show-dropdown" : ""
              }`}
            >
              <div
                className="nav__link"
                onClick={() => handleDropdownToggle(0)}
              >
                Servicios <IoIosArrowDown className="dropdown__arrow" />
              </div>
              <ul className="dropdown__menu">
                <li className="li__empty"></li>
                <li>
                  <Link
                    to="/preimpresion"
                    className="dropdown__link"
                    onClick={() => {
                      setActiveDropdown(null);
                      closeMenu();
                    }}
                  >
                    <LuArrowBigRightDash className="hand__icon" /> PREIMPRESIÓN
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gigantografia"
                    className="dropdown__link"
                    onClick={() => {
                      setActiveDropdown(null);
                      closeMenu();
                    }}
                  >
                    <LuArrowBigRightDash className="hand__icon" /> GIGANTOGRAFÍA
                  </Link>
                </li>
                <li>
                  <Link
                    to="/offsetdigital"
                    className="dropdown__link"
                    onClick={() => {
                      setActiveDropdown(null);
                      closeMenu();
                    }}
                  >
                    <LuArrowBigRightDash className="hand__icon" /> OFFSETDIGITAL
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/#contacto"
                className="nav__link"
                onClick={() => {
                  toggleMenu();
                  closeMenu();
                }}
              >
                Contacto
              </Link>
            </li>
          </UlContainer>
        </div>
      </NavContainer>
    </HeaderContainer>
  );
};
