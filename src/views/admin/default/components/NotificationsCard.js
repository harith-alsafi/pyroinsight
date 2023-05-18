import React from "react";
// Chakra imports
import { Flex, Icon, Image, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";

export default function Notification(props) {
  const { image, name, message, date } = props;
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const bgItem = useColorModeValue(
    { bg: "white", boxShadow: "0px 40px 58px -20px rgba(112, 144, 176, 0.12)" },
    { bg: "navy.700", boxShadow: "unset" }
  );
  const textColorDate = useColorModeValue("secondaryGray.600", "white");
  return (
    <Card
      _hover={bgItem}
      bg='transparent'
      boxShadow='unset'
      px='24px'
      py='21px'
      transition='0.2s linear'>
      <Flex direction={{ base: "column" }} justify='center'>
        <Flex position='relative' align='center'>
          <Icon as={image} w='40px' h='36px' borderRadius='20px' me='16px' color={brandColor} />
          <Flex
            direction='column'
            w={{ base: "70%", md: "100%" }}
            me={{ base: "4px", md: "32px", xl: "10px", "3xl": "32px" }}>
            <Text
              color={textColor}
              fontSize={{
                base: "18px",
              }}
              mb='5px'
              fontWeight='bold'
              me='14px'>
              {name}
            </Text>
            <Text
              color='secondaryGray.600'
              fontSize={{
                base: "16px",
              }}
              fontWeight='400'
              me='14px'>
              {message}
            </Text>
          </Flex>
          <Text ms='auto' fontWeight='700' fontSize='sm' color={textColorDate}>
            {date}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
