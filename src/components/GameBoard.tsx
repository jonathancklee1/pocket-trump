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

    const {
        playerHand,
        playerActiveCard,
        setPlayerActiveCard,
        generatePlayerHand,
    } = useGameStore();

    useEffect(() => {
        if (data) {
            generatePlayerHand(data);
            setPlayerActiveCard();
        }
    }, [pending]);

    return (
        <div className="h-screen grid place-items-center">
            <div className="relative h-4/5 w-4/5 border-2 border-black grid">
                <div className="w-full h-full border-2 border-black bg-[#CC0000]"></div>
                <div className="w-full h-full border-2 border-black bg-[#3B4CCA]"></div>
                <div className=" w-full justify-between">
                    {/* {playerHand.map((card: PokemonData, index) => {
                        return <Card cardData={formatCard(card)} key={index} />;
                    })} */}
                    <Card cardData={formatCard(playerActiveCard)} />
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
