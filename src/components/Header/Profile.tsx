import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Myltiane Alves</Text>
          <Text color="gray.300" fontSize="small">
            myltiane.aux@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Myltiane Alves" src="https://github.com/Myltiane-Alves.png"/>
    </Flex>
  )
}