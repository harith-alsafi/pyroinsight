import React from "react";

// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import BarChart from "components/charts/BarChart";

// Custom components
import Card from "components/card/Card.js";
import {
  barChartMontlyPanelPerformance,
  barChartOptionsMontlyPanelPerformance,
} from "variables/charts";

export default function AveragePanelPerformance(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex justify='space-between' align='start' px='10px' pt='5px'>
        <Text color={textColor} fontSize='xl' fontWeight='600'>
          Avg Montly Panels Performances
        </Text>
      </Flex>
      <Box h='240px' mt='auto'>
        <BarChart
          chartData={barChartMontlyPanelPerformance}
          chartOptions={barChartOptionsMontlyPanelPerformance}
        />
      </Box>
    </Card>
  );
}
