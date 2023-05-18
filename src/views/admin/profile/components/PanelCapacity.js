// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Progress,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import IconBox from "components/icons/IconBox";
import Menu from "components/menu/MainMenu";
import React from "react";
// Assets
import { MdStorage } from "react-icons/md";

export default function PanelCapacity(props) {
  const {
    used1,
    panel1,
    total1,
    used2,
    panel2,
    total2,
    used3,
    panel3,
    total3,
  } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = "gray.400";
  const box = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center">
      <Flex justify="space-between" align="start" px="10px" pt="5px">
        <Text color={textColorPrimary} fontSize="xl" fontWeight="600">
          Panel Capacity
        </Text>
      </Flex>
      <IconBox
        mx='auto'
        h='100px'
        w='100px'
        icon={
          <Icon as={MdStorage} color={brandColor} h='46px' w='46px' />
        }
        bg={box}
      />
      <Box w="100%" mt="auto">
        <Flex w="100%" justify="space-between" mb="10px" mt="10px">
          <Text color={textColorSecondary} fontSize="sm" maxW="40%">
            {used1} Devices
          </Text>
          <Text color={textColorSecondary} fontSize="sm" maxW="40%">
            Panel {panel1}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" maxW="40%">
            {total1} Devices
          </Text>
        </Flex>
        <Progress
          align="start"
          colorScheme="brandScheme"
          value={(used1 / total1) * 100}
          w="100%"
        />
        <Flex w="100%" justify="space-between" mb="10px" mt="10px">
          <Text color={textColorSecondary} fontSize="sm" maxW="40%">
            {used2} Devices
          </Text>
          <Text color={textColorSecondary} fontSize="sm" maxW="40%">
            Panel {panel2}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" maxW="40%">
            {total2} Devices
          </Text>
        </Flex>
        <Progress
          align="start"
          colorScheme="brandScheme"
          value={(used2 / total2) * 100}
          w="100%"
        />
        <Flex w="100%" justify="space-between" mb="10px" mt="10px">
          <Text color={textColorSecondary} fontSize="sm" maxW="40%">
            {used3} Devices
          </Text>
          <Text color={textColorSecondary} fontSize="sm" maxW="40%">
            Panel {panel3}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" maxW="40%">
            {total3} Devices
          </Text>
        </Flex>
        <Progress
          align="start"
          colorScheme="brandScheme"
          value={(used3 / total3) * 100}
          w="100%"
        />
      </Box>
    </Card>
  );
}
