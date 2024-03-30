import React from "react";
import useMatches from "../hooks/useMatches";
import { Box, Text } from "@chakra-ui/react";
import GamesGrid from "./GamesGrid";

export default function GameList() {
  const { data, isLoading, isError } = useMatches();

  if (isError) return <h1>Error</h1>;

  if (isLoading) return <h1>Loading</h1>;

  let leagues = data.resultSet.competitions.split(",");

  return (
    <Box>
      {leagues.map((league) => (
        <GamesGrid key={league} league={league} />
      ))}
    </Box>
  );
}
