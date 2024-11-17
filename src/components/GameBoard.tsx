import { useEffect, useState } from "react";
import Card from "./Card";
import useGameStore from "../store/GameStore";
import { PokemonData } from "../types/GameTypes";
import PlayerStatus from "./PlayerStatus";
import CardModal from "./CardModal";

interface GameBoardProps {
    playerCards: PokemonData[];
    opponentCards: PokemonData[];
}
function GameBoard({ playerCards, opponentCards }: GameBoardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(playerCards, opponentCards);

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
        if (playerCards && opponentCards) {
            generatePlayerHand(playerCards);
            generateOpponentHand(opponentCards);
            setPlayerActiveCard();
            setOpponentActiveCard();
        }
    }, [playerCards, opponentCards]);

    return (
        <div className="h-screen grid place-items-center overflow-hidden">
            <CardModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            {/* <Card cardData={playerActiveCard} isFullSize /> */}
            <div className="relative h-4/5 w-4/5 border-2 border-black grid">
                <div className="relative  w-full h-full border-2 border-black bg-[#CC0000]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
                        <Card cardData={opponentActiveCard} />
                    </div>
                </div>
                <div className=" relative w-full h-full border-2 border-black bg-[#3B4CCA] grid place-items-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center ">
                        <Card
                            cardData={playerActiveCard}
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

export default GameBoard;
