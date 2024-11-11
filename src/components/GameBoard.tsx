import { useEffect } from "react";
import Card from "./Card";
import useGameStore from "../store/GameStore";
import { PokemonData } from "../types/GameTypes";
import useMultipleApi from "../hooks/useRandomPokemonArray";

function GameBoard() {
    const pokemonMaxId = 1025;
    const cardCount = 10;

    const { data, pending } = useMultipleApi(cardCount, pokemonMaxId);
    console.table(data);

    const { playerHand, generatePlayerHand } = useGameStore();

    useEffect(() => {
        if (data) {
            generatePlayerHand(data);
        }
    }, [pending]);

    return (
        <div className="h-screen grid place-items-center">
            <div className="relative h-4/5 w-4/5 border-2 border-black grid">
                <div className="w-full h-full border-2 border-black bg-[#CC0000]"></div>
                <div className="w-full h-full border-2 border-black bg-[#3B4CCA]"></div>
                <div className="grid grid-cols-4 flex-wrap w-full justify-between">
                    {playerHand.map((card: PokemonData, index) => {
                        return <Card cardData={card} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default GameBoard;
