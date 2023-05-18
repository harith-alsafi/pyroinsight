// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdOutlineHealing,
  MdDataset,
  MdDoDisturbOn,
  MdDoDisturbOff,
  MdHealthAndSafety,
  MdOutlineHealthAndSafety,
} from "react-icons/md";

import Orders from "views/admin/default/components/Orders";
import AveragePanel from "views/admin/default/components/AveragePanel";
import Checklist from "views/admin/default/components/Checklist";
import PanelPieCard from "views/admin/default/components/PanelPieCard";
import Panel1 from "views/admin/default/components/Panel1";
import Panel2 from "views/admin/default/components/Panel2";
import Notification from "views/admin/default/components/NotificationsCard";
import WeeklyUpdate1 from "views/admin/default/components/WeeklyUpdate1";
import WeeklyUpdate2 from "views/admin/default/components/WeeklyUpdate2";
import Card from "components/card/Card.js";
import {
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <Panel1 />
        <WeeklyUpdate1 />
        <Panel2 />
        <WeeklyUpdate2 />
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 3, lg: 3 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="32px"
                  h="32px"
                  as={MdDoDisturbOff}
                  color={brandColor}
                />
              }
            />
          }
          name="Devices disabled this year"
          value="10"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdDoDisturbOn} color={brandColor} />
              }
            />
          }
          name="Devices faulty this year"
          value="76"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="32px"
                  h="32px"
                  as={MdOutlineHealing}
                  color={brandColor}
                />
              }
            />
          }
          name="Devices replaced this year"
          value="3"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdDataset} color={brandColor} />
              }
            />
          }
          name="Number of sites being used"
          value="2"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="32px"
                  h="32px"
                  as={MdHealthAndSafety}
                  color={brandColor}
                />
              }
            />
          }
          name="Number of devices healthy"
          value="99"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="32px"
                  h="32px"
                  as={MdOutlineHealthAndSafety}
                  color={brandColor}
                />
              }
            />
          }
          name="Average panel health"
          value="68%"
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="20px" mb="20px">
        <Card p="0px">
          <Flex
            align={{ sm: "flex-start", lg: "center" }}
            justify="space-between"
            w="100%"
            px="22px"
            py="18px"
          >
            <Text color={textColor} fontSize="xl" fontWeight="600">
              Notifications
            </Text>
            <Button variant="action">See all</Button>
          </Flex>

          <Notification
            name="General check"
            color={brandColor}
            message="Book for general service."
            date="5m ago"
            image={MdOutlineHealthAndSafety}
          />
          <Notification
            color={textColor}
            name="Device near failure"
            message="Device 2, Zone 1, Panel 3 needs to be replaced"
            date="3d ago"
            image={MdOutlineHealthAndSafety}
          />
          <Notification
            name="Maintenance"
            message="Maintenance completed"
            date="2w ago"
            image={MdOutlineHealthAndSafety}
          />
        </Card>
        <AveragePanel />
        <PanelPieCard />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
            <Checklist />
            <MiniCalendar h="100%" minW="100%" selectRange={false} />
          </SimpleGrid>
        <Orders
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid>
    </Box>
  );
}
