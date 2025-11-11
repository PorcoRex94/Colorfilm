import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Section,
  Container,
  HeroContent,
  BulletList,
  CtaRow,
  PrimaryBtn,
  IndicatorsBar,
  Dot,
  Overlay,
  ArrowLeft,
  ArrowRight,
  BackgroundLayer,
  Title,
} from "./hero-styles";

const rubros = [
  {
    title: "Preimpresión",
    bullets: ["CTP placas térmicas", "Preflight de archivos", "Películas HD"],
    img: "/assets/imgs/img/img-ctp.webp",
  },
  {
    title: "Gigantografía",
    bullets: [
      "Roll-ups y porta-banners",
      "Lonas front/backlight",
      "Vinilo impreso/corte",
    ],
    img: "/assets/imgs/img/gigantografia-img.webp",
  },
  {
    title: "Offset / Digital",
    bullets: ["Laminado", "Anillado", "Imanes"],
    img: "/assets/imgs/img/offset-img.webp",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => (index + 1) % rubros.length;
  const prevSlide = () => (index - 1 + rubros.length) % rubros.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(nextSlide());
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 100) setIndex(prevSlide());
    else if (info.offset.x < -100) setIndex(nextSlide());
  };

  return (
    <Section>
      {/* Fondo animado */}
      <BackgroundLayer
        as={motion.div}
        key={rubros[index].title}
        style={{
          backgroundImage: `url(${rubros[index].img})`,
          filter: "blur(25px) brightness(0.5)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />

      <AnimatePresence mode="wait">
        {rubros.map((r, i) =>
          i === index ? (
            <motion.div
              key={r.img}
              style={{ position: "absolute", inset: 0, overflow: "hidden" }}
            >
              {[...Array(8)].map((_, j) => (
                <motion.div
                  key={j}
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${r.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    clipPath: `inset(${(100 / 8) * j}% 0 ${
                      100 - (100 / 8) * (j + 1)
                    }% 0)`,
                  }}
                  initial={{ x: j % 2 === 0 ? "-100%" : "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: j % 2 === 0 ? "100%" : "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              ))}
              <motion.img
                src={r.img}
                alt={r.title}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 2,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Contenido */}
      <Container>
        <HeroContent
          as={motion.div}
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.9, delay: 0.6 }}
        >
          {/* 🧭 H1 principal del sitio */}
          <Title
            as={motion.h1}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span>Color</span>film
          </Title>

          {/* 🖨️ Rubro actual */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: 1,
              x: [0, -4, 4, -2, 0],
              skewX: [0, 15, -15, 8, 0],
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {rubros[index].title}
          </motion.h2>

          <BulletList>
            {rubros[index].bullets.map((b, i) => (
              <motion.li
                key={b}
                initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.3,
                  ease: "easeOut",
                }}
              >
                {b}
              </motion.li>
            ))}
          </BulletList>

          <CtaRow>
            <PrimaryBtn href="/subir-archivo">VER MÁS...</PrimaryBtn>
          </CtaRow>
        </HeroContent>
      </Container>

      <IndicatorsBar>
        {rubros.map((_, i) => (
          <Dot key={i} $active={i === index} onClick={() => setIndex(i)} />
        ))}
      </IndicatorsBar>
      <ArrowLeft onClick={() => setIndex(prevSlide())}>❮</ArrowLeft>
      <ArrowRight onClick={() => setIndex(nextSlide())}>❯</ArrowRight>

      <Overlay
        as={motion.div}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      />
    </Section>
  );
}
