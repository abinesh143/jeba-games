'use client'

import dynamic from "next/dynamic";

const GameSection = dynamic(() => import("../../components/games/GameSection"), {
    ssr: false,
  });

const SmileyGames = () => {
    return <GameSection />
}

export default SmileyGames
