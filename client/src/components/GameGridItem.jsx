import { Box, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export default function GameGridItem({ gameInfo }) {
  const utcDateStr = gameInfo.utcDate;
  const utcDate = new Date(utcDateStr);

  const mmtOptions = {
    timeZone: "Asia/Yangon",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };
  const mmtTimeStr = utcDate.toLocaleTimeString("en-US", mmtOptions);

  const trimmedMmtTimeStr = mmtTimeStr.split(":").slice(0, 2).join(":");
  return (
    <SimpleGrid columns={3} gap="10px" paddingY="10px">
      <Box>
        <Image marginX="auto" boxSize="32px" src={gameInfo.homeTeam.crest} />
      </Box>
      {gameInfo.status === "FINISHED" ? (
        <HStack justifyContent="center">
          <Text textAlign="center">{gameInfo.score.fullTime.home}</Text>

          <Text textAlign="center">:</Text>

          <Text textAlign="center">{gameInfo.score.fullTime.away}</Text>
        </HStack>
      ) : (
        <Text textAlign="center">{trimmedMmtTimeStr}</Text>
      )}
      <Box>
        <Image marginX="auto" boxSize="32px" src={gameInfo.awayTeam.crest} />
      </Box>
    </SimpleGrid>
  );
}
