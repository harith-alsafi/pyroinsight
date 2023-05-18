// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        General Information
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        PyroInsight is a web application provides real-time data on detectors for customers and 
        field engineers to proactively manage the system and minimize downtime. The solution 
        eliminates the need for physical site visits, saving on commuting costs and fees, 
        and enables quick resolution of malfunctioning detectors potentially saving lives
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='Team name'
          value='FireWatch Data Analysts'
        />
        <Information
          boxShadow={cardShadow}
          title='Prototype made using'
          value='React JS'
        />
        <Information
          boxShadow={cardShadow}
          title='Software Engineer Intern'
          value='Kumar Acharjee'
        />
        <Information
          boxShadow={cardShadow}
          title='Software Engineer Intern'
          value='Harith Al-Safi'
        />
        <Information
          boxShadow={cardShadow}
          title='Test Engineer'
          value='Daniel Sikar'
        />
        <Information
          boxShadow={cardShadow}
          title='SQA Engineer'
          value='Mumtaz Mukherjee'
        />
      </SimpleGrid>
    </Card>
  );
}
