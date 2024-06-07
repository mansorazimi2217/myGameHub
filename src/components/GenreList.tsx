import { List, ListItem, HStack, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

const GenreList = () => {
  //   const { data } = useData<Genre>("/genres");
  const { data } = useGenres();
  return (
    <>
      <List>
        {data.map((gen) => (
          <ListItem padding="5px" key={gen.id}>
            <HStack key={gen.id}>
              <Image
                key={gen.id}
                boxSize="38px"
                borderRadius={8}
                src={getCroppedImageUrl(gen.image_background)}
              />
              <Text key={gen.id} fontSize="lg">
                {gen.name}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
