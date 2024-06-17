import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (selectOrder: string) => void;
  sortOrder: string;
}

export const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortSelector = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: "Date added" },
    { value: "name", lable: "Name" },
    { value: "-released", lable: "Release Date" },
    { value: "-metacritic", lable: "popularity" },
    { value: "-rating", lable: "average raging" },
  ];

  const temp = sortSelector.find((order) => order.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
        ordered by : {temp?.lable || "Relevance"}
      </MenuButton>

      <MenuList>
        {sortSelector.map((select) => (
          <MenuItem
            onClick={() => onSelectSortOrder(select.value)}
            key={select.value}
            value={select.value}
          >
            {select.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
