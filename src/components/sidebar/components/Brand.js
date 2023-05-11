import React from "react";
import logo from "./logo 2.png";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { PyroInsight } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Flex align='center' direction='row' gap="10px">
        <img src={logo} alt="logo" style={{ width: "35px", height: "55px" }}/>
        <PyroInsight h='50px' w='180px' my='10px' color={logoColor} />
      </Flex>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
