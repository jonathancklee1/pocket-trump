import React, { useEffect } from "react";
import Card from "./Card";
import useApi from "../hooks/useApi";
import useGameStore from "../store/GameStore";
import { PokemonData } from "../types/GameTypes";

function GameBoard() {
    const { data, error, isLoading } = useApi(
        "https://pokeapi.co/api/v2/pokemon/psyduck"
    );

    console.log("Data: ", data);
    const { playerHand, generatePlayerHand } = useGameStore();
    useEffect(() => {
        if (!isLoading) {
            generatePlayerHand(data);
        }
    }, [data]);

    console.log(playerHand);
    return (
        <div className="h-screen grid place-items-center">
            <div className="relative h-4/5 w-4/5 border-2 border-black grid">
                <div className="w-full h-full border-2 border-black bg-[#CC0000]"></div>
                <div className="w-full h-full border-2 border-black bg-[#3B4CCA]"></div>
                {playerHand.map((card: PokemonData) => {
                    return <Card cardData={card} key={card} />;
                })}
            </div>
        </div>
    );
}

export default GameBoard;
