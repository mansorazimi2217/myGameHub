import {
  List,
  ListItem,
  HStack,
  Image,
  Button,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import { Heading } from "@chakra-ui/react";

interface Props {
  onSelected: (genre: Genre) => void;
  seletedGenre: Genre | null;
}

const GenreList = ({ seletedGenre, onSelected }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((gen) => (
          <ListItem padding="5px" key={gen.id}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize="38px"
                borderRadius={8}
                src={getCroppedImageUrl(gen.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={gen.id === seletedGenre?.id ? "bold" : "normal"}
                onClick={() => {
                  onSelected(gen);
                }}
                variant={"link"}
                fontSize="lg"
              >
                {gen.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
