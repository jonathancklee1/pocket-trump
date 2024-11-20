import { useEffect, useState } from "react";
import GameBoard from "../components/GameBoard";
import useRandomPokemonArray from "../hooks/useRandomPokemonArray";
import { PokemonCard } from "../types/GameTypes";

function GamePage() {
  const pokemonMaxId = 1025;
  const cardCount = 10;
  const playerCards = useRandomPokemonArray(cardCount, pokemonMaxId);
  const opponentCards = useRandomPokemonArray(cardCount, pokemonMaxId);
  console.log("gamepage rendered", playerCards, opponentCards);
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

  console.log("formatted", formattedPlayerCards, formattedOpponentCards);
  return (
    <div className="bg-[#04081e]">
      {/* <Heading /> */}
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
  // console.log(cardData);
  return {
    name: cardData?.name,
    sprite: cardData?.sprites?.other?.["official-artwork"]?.front_default,
    stats: cardData?.stats.map((stat) => ({
      name: stat?.stat?.name,
      value: stat?.base_stat,
    })),
    types: cardData?.types?.map((type) => type?.type?.name),
  };
}

export default GamePage;
