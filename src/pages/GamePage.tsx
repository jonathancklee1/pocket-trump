import { useEffect, useState } from "react";
import GameBoard from "../components/GameBoard";
import useRandomPokemonArray from "../hooks/useRandomPokemonArray";
import { PokemonCard } from "../types/GameTypes";
import { useLocation } from "react-router-dom";
import grassScene from "../assets/images/grass-scene.jpg";
import lakeScene from "../assets/images/lake-scene.webp";
import mountainScene from "../assets/images/mountain-scene.jpg";
import waterScene from "../assets/images/water-scene.avif";
const scenes = [grassScene, lakeScene, mountainScene, waterScene];

function randomScene() {
  return scenes[Math.floor(Math.random() * scenes.length)];
}
function GamePage() {
  const pokemonMaxId = 1025;
  let cardCount = 2;
  const location = useLocation();
  const { gameType } = location.state;
  useEffect(() => {
    if (gameType === "quick") {
      cardCount = 5;
    } else if (gameType === "medium") {
      cardCount = 10;
    } else if (gameType === "long") {
      cardCount = 15;
    }
  }, [gameType]);

  if (gameType === "quick") {
    cardCount = 5;
  } else if (gameType === "medium") {
    cardCount = 10;
  } else if (gameType === "long") {
    cardCount = 15;
  }
  const playerCards = useRandomPokemonArray(cardCount, pokemonMaxId);
  const opponentCards = useRandomPokemonArray(cardCount, pokemonMaxId);
  const [formattedPlayerCards, setFormattedPlayerCards] = useState(
    [] as PokemonCard[],
  );
  const [formattedOpponentCards, setFormattedOpponentCards] = useState(
    [] as PokemonCard[],
  );

  useEffect(() => {
    if (!playerCards.pending && !opponentCards.pending) {
      setFormattedPlayerCards(
        playerCards.data.map((card) => formatCards(card)),
      );
      setFormattedOpponentCards(
        opponentCards.data.map((card) => formatCards(card)),
      );
    }
  }, [playerCards.pending, opponentCards.pending]);

  return (
    <div className="bg-blue-gradient">
      <main className="">
        <GameBoard
          playerCards={formattedPlayerCards}
          opponentCards={formattedOpponentCards}
        />
      </main>
    </div>
  );
}
function formatCards(cardData) {
  return {
    name: cardData?.name,
    sprite: cardData?.sprites?.other?.["official-artwork"]?.front_default,
    stats: cardData?.stats.map((stat) => ({
      name: stat?.stat?.name,
      value: stat?.base_stat,
    })),
    types: cardData?.types?.map((type) => type?.type?.name),
    background: randomScene(),
  };
}

export default GamePage;
