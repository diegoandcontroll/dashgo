import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Diego Lucas</Text>
        <Text color="gray.300" fontSize="small">
          lukasxdp@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Diego Lucas"
        src="https://avatars.githubusercontent.com/u/81238955?v=4"
      />
    </Flex>
  );
};
