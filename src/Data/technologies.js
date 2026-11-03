import {
  SiAngular,
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiEslint,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPassport,
  SiPostgresql,
  SiReact,
  SiReactrouter,
  SiSocketdotio,
  SiSpotify,
  SiStripe,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";

const technologies = {
  html: { name: "HTML", Icon: SiHtml5 },
  css: { name: "CSS", Icon: SiCss3 },
  javascript: { name: "JavaScript", Icon: SiJavascript },
  typescript: { name: "TypeScript", Icon: SiTypescript },
  git: { name: "Git", Icon: SiGit },
  react: { name: "React", Icon: SiReact },
  nextjs: { name: "Next.js", Icon: SiNextdotjs },
  reactRouter: { name: "React Router", Icon: SiReactrouter },
  reactNative: { name: "React Native", Icon: SiReact },
  expo: { name: "Expo", Icon: SiExpo },
  angular: { name: "Angular", Icon: SiAngular },
  express: { name: "Express", Icon: SiExpress },
  node: { name: "Node.js", Icon: SiNodedotjs },
  mysql: { name: "MySQL", Icon: SiMysql },
  postgresql: { name: "PostgreSQL", Icon: SiPostgresql },
  mongodb: { name: "MongoDB", Icon: SiMongodb },
  socketio: { name: "Socket.IO", Icon: SiSocketdotio },
  passport: { name: "Passport", Icon: SiPassport },
  firebase: { name: "Firebase", Icon: SiFirebase },
  stripe: { name: "Stripe", Icon: SiStripe },
  spotify: { name: "Spotify", Icon: SiSpotify },
  bootstrap: { name: "Bootstrap", Icon: SiBootstrap },
  chakra: { name: "Chakra UI", Icon: SiChakraui },
  styledComponents: { name: "Styled Components", Icon: SiStyledcomponents },
  tailwind: { name: "Tailwind CSS", Icon: SiTailwindcss },
  eslint: { name: "ESLint", Icon: SiEslint },
  webpack: { name: "Webpack", Icon: SiWebpack },
};

export function resolveTechnology(id) {
  const technology = technologies[id];
  if (!technology) {
    throw new Error(`Unknown technology: ${id}`);
  }
  return technology;
}

export function resolveTechnologies(ids = []) {
  return ids.map(resolveTechnology);
}

export default technologies;
