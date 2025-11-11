import { motion } from "framer-motion";
import { FaCrown, FaBolt, FaHandshake } from "react-icons/fa";
import {
  Beneficio,
  BeneficiosRow,
  BgImage,
  Btn,
  Card,
  CardContent,
  Grid,
  IconWrap,
  Intro,
  Overlay,
  Section,
} from "./services-styles";
import { useNavigate } from "react-router-dom";
import { TripleWave } from "../waves/TripleWave";
import { TripleWaveTop } from "../waves/TripleWaveTop";

// --- texto institucional ---
const introText = `
En Colorfilm llevamos más de 20 años brindando soluciones gráficas 
de calidad en el sector de la preimpresión, offset digital y gigantografía. 
Nuestra experiencia nos permite acompañar a cada cliente con innovación, 
tecnología de vanguardia y un compromiso constante en cada proyecto.
`;

// --- beneficios con iconos ---
const beneficios = [
  {
    icon: <FaCrown size={40} color="#FF822F" />,
    title: "Calidad garantizada",
    desc: "Impresión de alto nivel con acabados profesionales.",
  },
  {
    icon: <FaBolt size={40} color="#1F83C1" />,
    title: "Rapidez y eficiencia",
    desc: "Procesos optimizados para cumplir con tus tiempos.",
  },
  {
    icon: <FaHandshake size={40} color="#FF822F" />,
    title: "Atención cercana",
    desc: "Asesoramiento personalizado en cada etapa del proyecto.",
  },
];

// --- trabajos ---
const trabajos = [
  {
    title: "Gigantografía",
    img: "/assets/imgs/img/gigantografia-img.webp",
    path: "/gigantografia",
  },
  {
    title: "Preimpresión",
    img: "/assets/imgs/img/img-ctp.webp",
    path: "/preimpresion",
  },
  {
    title: "Offset/Digital",
    img: "/assets/imgs/img/offset-img.webp",
    path: "/offsetdigital",
  },
];

export const ServicesRow = () => {
  const navigate = useNavigate();
  return (
    <Section id="nosotros">
      {/* Intro */}
      <Intro>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          20 Años de Experiencia en el Sector Gráfico
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {introText}
        </motion.p>
      </Intro>

      {/* Beneficios debajo */}
      <BeneficiosRow>
        {beneficios.map((b, i) => (
          <Beneficio
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <IconWrap>{b.icon}</IconWrap>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </Beneficio>
        ))}
      </BeneficiosRow>

      <Grid>
        {trabajos.map((t, i) => (
          <Card
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(t.path)} // 👉 ahora todo el card es clickeable
            style={{ cursor: "pointer" }}
          >
            <BgImage src={t.img} alt={t.title} />
            <Overlay />
            <CardContent>
              <h3>{t.title}</h3>
              {/* Si querés, podés borrar el Btn o dejarlo como adorno */}
              <Btn to={t.path}>Ver más..</Btn>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};
