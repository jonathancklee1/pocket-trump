import { useEffect, useState } from "react";
import Card from "./Card";
import useGameStore from "../store/GameStore";
import { PokemonData } from "../types/GameTypes";
import useMultipleApi from "../hooks/useRandomPokemonArray";
import PlayerStatus from "./PlayerStatus";
import CardModal from "./CardModal";

function GameBoard() {
    const pokemonMaxId = 1025;
    const cardCount = 10;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const playerCards = useMultipleApi(cardCount, pokemonMaxId);
    const opponentCards = useMultipleApi(cardCount, pokemonMaxId);
    console.log(playerCards.data);

    const {
        playerActiveCard,
        setPlayerActiveCard,
        generatePlayerHand,
        opponentActiveCard,
        setOpponentActiveCard,
        generateOpponentHand,
        playerHand,
        opponentHand,
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
        <div className="h-screen grid place-items-center overflow-hidden">
            <CardModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <Card cardData={formatCard(playerActiveCard)} isFullSize />
            </CardModal>
            <div className="relative h-4/5 w-4/5 border-2 border-black grid">
                <div className="relative  w-full h-full border-2 border-black bg-[#CC0000]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
                        <Card cardData={formatCard(opponentActiveCard)} />
                    </div>
                </div>
                <div className=" relative w-full h-full border-2 border-black bg-[#3B4CCA] grid place-items-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center ">
                        <Card
                            cardData={formatCard(playerActiveCard)}
                            onClickEvent={() => setIsModalOpen(true)}
                        />
                    </div>
                </div>
                <div className="absolute top-0 right-0 -translate-y-full pb-3 w-full">
                    <PlayerStatus
                        isInverse
                        handCount={opponentHand.length}
                        name="Opponent"
                    />
                </div>
                <div className="absolute bottom-0 left-0 translate-y-full pt-3 w-full">
                    <PlayerStatus
                        handCount={playerHand.length}
                        name="Player (You)"
                    />
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
