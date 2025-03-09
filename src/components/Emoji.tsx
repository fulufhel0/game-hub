import { Image, ImageProps } from "@chakra-ui/react";
import BullsEye from "../assets/bulls-eye.webp";
import Meh from "../assets/meh.webp";
import ThumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMapping: { [key : number] : ImageProps } = {
    3: { src: Meh, alt: "Meh", boxSize: "25px" },
    4: { src: ThumbsUp, alt: "Excellent", boxSize: "25px" },
    5: { src: BullsEye, alt: "Exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMapping[rating]} />;
};

export default Emoji;
