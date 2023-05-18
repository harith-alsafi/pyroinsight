// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import SwitchField from "components/fields/SwitchField";
import Menu from "components/menu/MainMenu";

export default function Notifications(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }}>
      <Flex align="center" w="100%" justify="space-between" mb="30px">
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="2xl"
          mb="4px"
        >
          Notifications
        </Text>
        <Menu />
      </Flex>
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="1"
        label="Email me if any device is faulty"
      />
      <SwitchField
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="2"
        label="Email me if any device is disabled"
      />
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="3"
        label="Text me if any device is faulty"
      />
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="4"
        label="Email me hourly updates"
      />
      <SwitchField
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="5"
        label="Text me hourly updates"
      />
      <SwitchField
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="6"
        label="Email me daily updates"
      />
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="7"
        label="Text me daily updates"
      />
      <SwitchField
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="8"
        label="Email me weekly updates"
      />
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="9"
        label="Text me weekly updates"
      />
    </Card>
  );
}
