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

interface Props {
  onSelected: (genre: Genre) => void;
}

const GenreList = ({ onSelected }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        {data.map((gen) => (
          <ListItem padding="5px" key={gen.id}>
            <HStack>
              <Image
                boxSize="38px"
                borderRadius={8}
                src={getCroppedImageUrl(gen.image_background)}
              />
              <Button
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
