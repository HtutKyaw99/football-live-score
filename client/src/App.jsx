import React from "react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GameList from "./components/GameList";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      {/* <GamesGrid /> */}
      <GameList />
    </QueryClientProvider>
  );
}
