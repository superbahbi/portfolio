import { Box, Center, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { resolveTechnologies } from "../Data/technologies";
import BrandIcon from "./BrandIcon";
import "./ProjectCard.css";

function ProjectFront({ project }) {
  if (!project.image) {
    return (
      <Center h="100%" bg="brand.700" p={6}>
        <Text
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          {project.title}
        </Text>
      </Center>
    );
  }

  return (
    <Image
      src={project.image}
      alt={project.title}
      h="100%"
      w="100%"
      objectFit="cover"
    />
  );
}

function ProjectBack({ project }) {
  const stack = resolveTechnologies(project.stack);

  return (
    <Box
      h="100%"
      bg="brand.700"
      p={6}
      display="flex"
      flexDirection="column"
    >
      <Box
        fontWeight="semibold"
        letterSpacing="wide"
        textTransform="uppercase"
        textAlign="center"
        mb={3}
      >
        {project.title}
      </Box>

      <Box mb={4} textAlign="center">
        {stack.map((technology) => (
          <BrandIcon
            key={technology.name}
            name={technology.name}
            Icon={technology.Icon}
          />
        ))}
      </Box>

      <Box
        as="p"
        color="gray.600"
        fontSize="md"
        w="250px"
        m="auto"
        textAlign="center"
      >
        {project.description}
      </Box>

      <Center mt="auto" gap={2}>
        {project.codeUrl && (
          <Link href={project.codeUrl} isExternal>
            <Box
              as="span"
              borderRadius="md"
              bg="brand.500"
              color="white"
              px={4}
              h={8}
              display="grid"
              placeItems="center"
            >
              Code
            </Box>
          </Link>
        )}
        {project.demoUrl && (
          <Link href={project.demoUrl} isExternal>
            <Box
              as="span"
              borderRadius="md"
              bg="brand.900"
              color="white"
              px={4}
              h={8}
              display="grid"
              placeItems="center"
            >
              Demo
            </Box>
          </Link>
        )}
      </Center>
    </Box>
  );
}

export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-back">
          <ProjectBack project={project} />
        </div>
        <div className="card-front">
          <ProjectFront project={project} />
        </div>
      </div>
    </div>
  );
}
