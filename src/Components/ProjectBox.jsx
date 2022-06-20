import React from "react";
import { Box, Image, Center, Link } from "@chakra-ui/react";

import BrandIcon from "./BrandIcon";
const ProjectBox = ({
  projectImg,
  projectTitle,
  projectStack,
  projectDescription,
  demoLink,
  codeLink,
}) => {
  return (
    <Box width="350px" height="350px" background="brand.700">
      {projectImg && <Image src={projectImg} alt={projectTitle} />}
      {!projectImg && (
        <Box p="6">
          <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight">
            <Box
              fontWeight="semibold"
              letterSpacing="wide"
              textTransform="uppercase"
              ml="2"
              alignItems="center"
              textAlign="center"
            >
              {projectTitle}
            </Box>
          </Box>

          <Box mb={4}>
            {projectStack &&
              projectStack.map((stack, index) => {
                return (
                  <BrandIcon key={index} name={stack.name} icon={stack.icon} />
                );
              })}
          </Box>

          <Box as="p" color="gray.600" fontSize="md" w="250px" m="auto">
            <Center>{projectDescription}</Center>
          </Box>
          <Center>
            <Box
              position="absolute"
              bottom="0"
              mb={4}
              display="grid"
              gridTemplateColumns="repeat(2, 1fr)"
              mt="2"
              w="200px"
            >
              <Link href={codeLink}>
                <Box
                  as="button"
                  borderRadius="md"
                  bg="brand.500"
                  color="white"
                  px={4}
                  h={8}
                >
                  Code
                </Box>
              </Link>
              <Link href={demoLink}>
                <Box
                  as="button"
                  borderRadius="md"
                  bg="brand.900"
                  color="white"
                  px={4}
                  h={8}
                >
                  Demo
                </Box>
              </Link>
            </Box>
          </Center>
        </Box>
      )}
    </Box>
  );
};

export default ProjectBox;
