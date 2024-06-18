import meh from "../assets/icons8-meh-48.png";
import bullsUp from "../assets/icons8-eye-94.png";
import thumbsUp from "../assets/icons8-thumbs-up-48.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25" },
    4: { src: thumbsUp, alt: "recomended", boxSize: "25" },
    5: { src: bullsUp, alt: "exceptional", boxSize: "35" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
