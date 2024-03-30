import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      paddingX="30px"
      paddingY="15px"
    >
      <Text fontSize="2xl" fontWeight="bold">
        HiKi
      </Text>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
    </HStack>
  );
}
