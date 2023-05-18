// Chakra imports
import {
  Box,
  Flex,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import DeviceProperties from "views/admin/dataTables/components/DeviceProperties";
import TimeLine from "components/dataDispaly/TimelineRow";
import AllDevices from "views/admin/dataTables/components/AllDevices";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import AverageDevice from "views/admin/dataTables/components/AverageDevice";
import {
  columnsAllDevice,
  columnsDeviceProperties,
} from "views/admin/dataTables/variables/columnsData";
import {
  MdFindReplace,
  MdEngineering,
  MdCleaningServices,
  MdFactCheck,
  MdDoDisturbOn,
  MdHealthAndSafety,
} from "react-icons/md";
import tableAllDevice from "views/admin/dataTables/variables/AllDevicesComplex.json";
import tableDeviceProperties from "views/admin/dataTables/variables/tableDeviceProperties.json";
import React from "react";

export default function Settings() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const timelineData = [
    {
      logo: MdFindReplace,
      title: "Replace zone 2 devices",
      date: "14 APRIL 2023, 15:00 PM",
      color: "brand.300",
    },
    {
      logo: MdEngineering,
      title: "Field engineer arrives",
      date: "10 APRIL 2023, 11:00 AM",
      color: "brand.300",
    },
    {
      logo: MdCleaningServices,
      title: "Clean zone 2 devices",
      date: "5 APRIL 2023, 13:00 PM",
      color: "brand.300",
    },
    {
      logo: MdFactCheck,
      title: "Check zone 2 devices",
      date: "3 APRIL 2023, 11:00 AM",
      color: "brand.300",
    },
  ];
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 3 }}
        spacing={{ base: "20px", xl: "20px" }}
      >
        <Box gridColumn={{ md: "span 2" }}>
          <AllDevices
            columnsData={columnsAllDevice}
            tableData={tableAllDevice}
          />
        </Box>
        <DeviceProperties
          tableData={tableDeviceProperties}
          columnsData={columnsDeviceProperties}
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px" mb="20px">
        <Card p="0px">
          <Flex
            align={{ sm: "flex-start", lg: "center" }}
            justify="space-between"
            w="100%"
            px="22px"
            py="18px"
          >
            <Text color={textColor} fontSize="22px" fontWeight="600">
              Timeline
            </Text>
          </Flex>
          <Flex justify="space-between" px="22px" py="18px" direction="column">
            {timelineData.map((row, index, arr) => {
              return (
                <TimeLine
                  logo={row.logo}
                  title={row.title}
                  date={row.date}
                  color={row.color}
                  index={index}
                  arrLength={arr.length}
                />
              );
            })}
          </Flex>
        </Card>
        <AverageDevice />
        <SimpleGrid columns={{ base: 1 }} gap="20px">
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
                    as={MdDoDisturbOn}
                    color={brandColor}
                  />
                }
              />
            }
            name="Devices disabled for Panel 1"
            value="0"
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
                    as={MdDoDisturbOn}
                    color={brandColor}
                  />
                }
              />
            }
            name="Devices disabled for Panel 2"
            value="10"
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
            name="Average health of devices for Panel 1"
            value="94%"
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
            name="Average health of devices for Panel 2"
            value="43%"
          />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
