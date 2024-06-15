import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

export const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
        Sort Games
      </MenuButton>
      <MenuList>
        <MenuItem>Revelance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Relace date</MenuItem>
        <MenuItem>popularuty</MenuItem>
        <MenuItem>Average raging</MenuItem>
      </MenuList>
    </Menu>
  );
};
