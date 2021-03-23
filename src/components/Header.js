import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Spacer,
  Flex,
  Box,
} from "@chakra-ui/react";
import Slider from "./Slider";

const Header = () => {
  return (
    <>
      <Flex>
        <Box p="2" bg="red.400">
          <Breadcrumb fontWeight="medium" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Galeria</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Contacto</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Spacer />
        <Box p="2" bg="green.400">
          <Image
            boxSize="200px"
            objectFit="cover"
            src="images/Botones/Cantario_landing_v1-15.png"
          />
        </Box>
      </Flex>

      <Slider />
    </>
  );
};

export default Header;
