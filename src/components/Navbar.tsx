import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import Switchbar from "../components/SwitchMode";
import Search from "./Search";

interface Props {
  onSearch: (searchItem: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <Image boxSize="60px" src={logo}></Image>
        <Search onSearch={onSearch} />
        <Switchbar />
      </HStack>
    </>
  );
};

export default Navbar;
