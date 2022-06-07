import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
interface ProfileProps {
  showProfileData?: boolean;
}
export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Diego Lucas</Text>
          <Text color="gray.300" fontSize="small">
            lukasxdp@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Diego Lucas"
        mr={["4"]}
        src="https://avatars.githubusercontent.com/u/81238955?v=4"
      />
    </Flex>
  );
};
