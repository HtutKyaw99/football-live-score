import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import GameGridItem from "./GameGridItem";
import useMatches from "../hooks/useMatches";

export default function GamesGrid({ league }) {
  const { data, isLoading, isError } = useMatches();
  const { colorMode } = useColorMode();

  if (isError) return <h1>Error</h1>;

  if (isLoading) return <h1>It is loading</h1>;

  const leagueNameMap = {
    SA: "Italy Serie A",
    PL: "English Premier League",
    PD: "Spain LaLiga",
    BL1: "German Bundesliga",
    PPL: "Portugal Primera Liga",
    DED: "Netherlands Eredivisie",
    FL1: "France Ligue 1",
  };

  const leagueCrestMap = {
    SA: "https://crests.football-data.org/SA.png",
    PL: "https://crests.football-data.org/PL.png",
    PD: "https://crests.football-data.org/PD.png",
    BL1: "https://crests.football-data.org/BL1.png",
    PPL: "https://crests.football-data.org/PPL.png",
    DED: "https://crests.football-data.org/ED.png",
    FL1: "https://crests.football-data.org/FL1.png",
  };

  const matches = data.matches.filter((match) => {
    return match.competition.code === league;
  });

  console.log(matches);

  return (
    <Accordion padding="10px" defaultIndex={[0]} allowMultiple>
      <AccordionItem
        boxShadow="lg"
        bgColor={`${colorMode === "light" ? "#EEEEEE" : ""}`}
      >
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <HStack gap="15px">
                <Image boxSize="36px" src={leagueCrestMap[league]} />
                <Text fontSize="md">{leagueNameMap[league]}</Text>
              </HStack>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {matches.slice(0, 4).map((match) => (
            <GameGridItem key={match.id} gameInfo={match} />
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
