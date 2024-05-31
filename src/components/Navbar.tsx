import React from "react";
import { HStack, Image, Text, Switch } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import Switchbar from "../components/SwitchMode";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} padding={"20px"}>
        <Image boxSize="60px" src={logo}></Image>
        <Switchbar />
      </HStack>
    </>
  );
};

export default Navbar;
