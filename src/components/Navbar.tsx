import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import Switchbar from "../components/SwitchMode";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <Image boxSize="60px" src={logo}></Image>
        <Search></Search>
        <Switchbar />
      </HStack>
    </>
  );
};

export default Navbar;
