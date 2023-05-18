import React from "react";

// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import BarChart from "components/charts/BarChart";
import Menu from "components/menu/MainMenu";
// Custom components
import Card from "components/card/Card.js";
import {
  barChartDevicePerformance,
  barChartOptionsDevicePerformance,
} from "variables/charts";

export default function AverageDevice(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex justify='space-between' align='start' px='10px' pt='5px'>
        <Text color={textColor} fontSize='xl' fontWeight='600'>
          Avg Montly Device Performances
        </Text>
        <Menu/>
      </Flex>
      <Box h='240px' mt='auto'>
        <BarChart
          chartData={barChartDevicePerformance}
          chartOptions={barChartOptionsDevicePerformance}
        />
      </Box>
    </Card>
  );
}
