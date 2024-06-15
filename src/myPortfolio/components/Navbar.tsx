import {
  HStack,
  Image,
  Text,
  List,
  GridItem,
  MenuItem,
  ListItem,
} from "@chakra-ui/react";
import logo from "../../assets/react.svg";
import Switchbar from "../../components/SwitchMode";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} padding={"10px"}>
        {/* <Image boxSize="60px" src={logo}></Image> */}
        <Text paddingLeft={"50px"} fontWeight={"bold"} fontSize={"x-large"}>
          LOGO
        </Text>

        <List paddingRight={"10px"}>
          <ListItem margin={"10px"} display={"inline"}>
            Home
          </ListItem>
          <ListItem margin={"10px"} display={"inline"}>
            About
          </ListItem>
          <ListItem margin={"10px"} display={"inline"}>
            Services
          </ListItem>
          <ListItem margin={"10px"} display={"inline"}>
            Projects
          </ListItem>
          <ListItem margin={"10px"} display={"inline"}>
            Contact
          </ListItem>
        </List>

        <Switchbar />
      </HStack>
    </>
  );
};

export default Navbar;
