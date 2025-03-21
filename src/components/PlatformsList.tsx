import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { Platform } from "./hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformsList = ({ platforms }: Props) => {
    const iconMapping: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
    
        <Icon as={iconMapping[platform.slug]} key={platform.id} color="gray.500"/>
      ))}
    </HStack>
  );
};

export default PlatformsList;
