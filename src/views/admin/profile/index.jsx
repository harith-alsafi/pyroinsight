// Chakra imports
import { Box, Grid, SimpleGrid } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/profile/components/Banner";
import General from "views/admin/profile/components/General";
import Notifications from "views/admin/profile/components/Notifications";
import Projects from "views/admin/profile/components/Projects";
import Storage from "views/admin/profile/components/Storage";
import PanelCapacity from "views/admin/profile/components/PanelCapacity";
import Upload from "views/admin/profile/components/Upload";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import React from "react";

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px" mb="20px">
        <Banner
          banner={banner}
          avatar="Kumar Acharjee"
          name="Kumar Acharjee"
          job="Software Engineer Intern"
          sites="2"
          panels="3"
          devices="250"
        />
        <PanelCapacity
          used1={60}
          panel1={"1 - Pro215D"}
          total1={250}
          used2={125}
          panel2={"2 - MX4000"}
          total2={500}
          used3={400}
          panel3={"3 - Pro32xD"}
          total3={500}
        />
        <Upload pe="20px" pb={{ base: "100px", lg: "20px" }} />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px" mb="20px">
        <Projects/>
        <Notifications/>
        <General/>
      </SimpleGrid>
    </Box>
  );
}
