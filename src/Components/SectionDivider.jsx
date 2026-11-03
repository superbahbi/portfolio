import React from "react";
import theme from "../theme";
import Waves from "./Animation/Waves";

const variants = {
  header: {
    animation: true,
    waves: [0, 3, 5, 7],
    wavesOpacity: [0.7, 0.5, 0.3, 1],
    waveColor: theme.colors.brand[700],
    data: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z",
    viewBox: "0 24 150 28",
  },
  about: {
    backgroundColor: theme.colors.brand[700],
    waveColor: theme.colors.brand[600],
    data: "M0,224L80,186.7C160,149,320,75,480,69.3C640,64,800,128,960,149.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
    viewBox: "0 0 1440 320",
  },
  projects: {
    backgroundColor: theme.colors.brand[700],
    waveColor: theme.colors.brand[600],
    data: "M0,224L30,208C60,192,120,160,180,170.7C240,181,300,235,360,266.7C420,299,480,309,540,272C600,235,660,149,720,138.7C780,128,840,192,900,181.3C960,171,1020,85,1080,74.7C1140,64,1200,128,1260,170.7C1320,213,1380,235,1410,245.3L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z",
    viewBox: "0 0 1440 320",
  },
  technology: {
    backgroundColor: "transparent",
    waveColor: theme.colors.brand[700],
    data: "M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z",
    viewBox: "0 0 1440 320",
  },
};

export default function SectionDivider({ variant }) {
  const config = variants[variant];

  if (!config) {
    throw new Error(`Unknown section divider variant: ${variant}`);
  }

  return <Waves {...config} />;
}
