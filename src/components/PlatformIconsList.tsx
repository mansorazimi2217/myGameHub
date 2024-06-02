import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaApple,
  FaAndroid,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/useGames";
import { HStack, Text, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface Props {
  platform: Platform[];
}

export const PlatformIconsList = ({ platform }: Props) => {
  const mapIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    linux: FaLinux,
    mac: FaApple,
    android: FaAndroid,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={"2"}>
      {platform.map((platform) => (
        <Icon
          key={platform.id}
          as={mapIcons[platform.slug]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};
