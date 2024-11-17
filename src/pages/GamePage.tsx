import GameBoard from "../components/GameBoard";
import useRandomPokemonArray from "../hooks/useRandomPokemonArray";

function GamePage() {
    const pokemonMaxId = 1025;
    const cardCount = 10;
    const playerCards = useRandomPokemonArray(cardCount, pokemonMaxId);
    const opponentCards = useRandomPokemonArray(cardCount, pokemonMaxId);
    console.log("gamepage rendered", playerCards, opponentCards);
    return (
        <div className="bg-[#bdd4ea]">
            {/* <Heading /> */}
            <main className="">
                <GameBoard
                    playerCards={playerCards.data}
                    opponentCards={opponentCards.data}
                />
            </main>
        </div>
    );
}

export default GamePage;
