import React from "react";
import { Box, Image, Center, Text, Link } from "@chakra-ui/react";

const ProjectBox = ({
  projectImg,
  projectTitle,
  projectSubTitle,
  projectDescription,
  demoLink,
  codeLink,
}) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" background="brand.700">
      <Image borderRadius="lg" src={projectImg} alt="Twitter Clone Web" />
      <Box p="6">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
            alignItems="center"
            textAlign="center"
          >
            {projectTitle}
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {projectSubTitle}
        </Box>

        <Box>
          <Box as="span" color="gray.600" fontSize="sm">
            {projectDescription}
          </Box>
        </Box>
        <Center>
          <Box
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
                bg="brand.600"
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
    </Box>
  );
};

export default ProjectBox;
