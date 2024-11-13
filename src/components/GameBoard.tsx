import { useEffect } from "react";
import Card from "./Card";
import useGameStore from "../store/GameStore";
import { PokemonData } from "../types/GameTypes";
import useMultipleApi from "../hooks/useRandomPokemonArray";

function GameBoard() {
    const pokemonMaxId = 1025;
    const cardCount = 10;

    const playerCards = useMultipleApi(cardCount, pokemonMaxId);
    const opponentCards = useMultipleApi(cardCount, pokemonMaxId);
    console.table(playerCards.data);

    const {
        playerActiveCard,
        setPlayerActiveCard,
        generatePlayerHand,
        opponentActiveCard,
        setOpponentActiveCard,
        generateOpponentHand,
    } = useGameStore();

    useEffect(() => {
        if (playerCards.data && opponentCards.data) {
            generatePlayerHand(playerCards.data);
            setPlayerActiveCard();
            generateOpponentHand(opponentCards.data);
            setOpponentActiveCard();
        }
    }, [playerCards.pending, opponentCards.pending]);

    return (
        <div className="h-screen grid place-items-center">
            <div className="relative h-4/5 w-4/5 border-2 border-black grid">
                <div className="w-full h-full border-2 border-black bg-[#CC0000]">
                    <div className="top-0 absolute inset-0 w-full h-full">
                        <Card cardData={formatCard(opponentActiveCard)} />
                    </div>
                </div>
                <div className="relative w-full h-full border-2 border-black bg-[#3B4CCA]">
                    <div className="absolute inset-0 w-full h-full">
                        <Card cardData={formatCard(playerActiveCard)} />
                    </div>
                </div>
            </div>
        </div>
    );
}
function formatCard(cardData) {
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
export default GameBoard;
