// chakra imports
import { Box, Flex, Stack, useColorModeValue, } from "@chakra-ui/react";
//   Custom components
import Brand from "components/sidebar/components/Brand";
import SiteMenu from "components/menu/SiteMenu";
import Links from "components/sidebar/components/Links";
import React from "react";

// FUNCTIONS

function SidebarContent(props) {
  const { routes } = props;
  const { ...rest } = props;
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  // SIDEBAR
  return (
    <Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
      <Brand />
      <Stack direction='column' mb='auto' mt='8px'>
        <Box ps='20px' pe={{ md: "16px", "2xl": "1px" }}>
          <Links routes={routes} />
            <SiteMenu
            ms="auto"
            align="center"
            justifyContent="center"
            bg={bgButton}
            _hover={bgHover}
            _focus={bgFocus}
            _active={bgFocus}
            w="140px"
            h="37px"
            lineHeight="100%"
            borderRadius="10px"
            {...rest}
        ></SiteMenu>
        </Box>
      </Stack>

      <Box
        ps='20px'
        pe={{ md: "16px", "2xl": "0px" }}
        mt='60px'
        mb='40px'
        borderRadius='30px'>
      </Box>
    </Flex>
  );
}

export default SidebarContent;
