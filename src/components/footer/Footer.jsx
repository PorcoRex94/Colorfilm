import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Copy,
  FooterCol,
  FooterGrid,
  FooterWrapper,
  Socials,
} from "./footer-styles";

export const Footer = () => {
  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Teléfono",
      value: "+54 9 11 1234-5678",
      link: "tel:+5491112345678",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "contacto@colorfilm.com",
      link: "mailto:contacto@colorfilm.com",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Dirección",
      value: "Asunción 2301, Martínez, Buenos Aires",
      link: "https://www.google.com/maps/place/Colorfilm/@-34.50251,-58.519143,16z/data=!4m16!1m9!3m8!1s0x95bcb100606eec0f:0xfbcbea9b348baf8c!2sColorfilm!8m2!3d-34.5012538!4d-58.5189178!9m1!1b1!16s%2Fg%2F11vqbnqcgl!3m5!1s0x95bcb100606eec0f:0xfbcbea9b348baf8c!8m2!3d-34.5012538!4d-58.5189178!16s%2Fg%2F11vqbnqcgl?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    },
  ];
  return (
    <FooterWrapper>
      <FooterGrid>
        <Link
          to="/"
          className="nav__link"
          onClick={() => {
            toggleMenu();
            closeMenu();
          }}
        >
          <img
            src="/assets/imgs/logos/colorfilm__logo_dos.webp"
            alt="Logo colorfilm"
            className="logo"
          />
        </Link>

        <FooterCol>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/gigantografia">Gigantografía</Link>
            </li>
            <li>
              <Link to="/preimpresion">Preimpresión</Link>
            </li>
            <li>
              <Link to="/offsetdigital">Offset Digital</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </FooterCol>

        <FooterCol>
          <Socials>
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: 10 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: 10 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: 10 }}
            >
              <FaWhatsapp />
            </motion.a>
          </Socials>
          <ul>
            {contactInfo.map((item, i) => (
              <li key={i} className="datos">
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.icon} {item.value}
                </a>
              </li>
            ))}
          </ul>
        </FooterCol>
      </FooterGrid>

      <Copy>
        © {new Date().getFullYear()} Copyright © 2025 Colorfilm - Developed by
        Ambraco
      </Copy>
    </FooterWrapper>
  );
};
