import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { SidebarNav } from "./SidebarNav";

export const Sidebar = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
};
