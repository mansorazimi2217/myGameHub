import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={"10px"} overflow={"hidden"}>
      {children}
    </Box>
  );
};
