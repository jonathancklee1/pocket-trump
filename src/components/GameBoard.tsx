import { useEffect, useState } from "react";
import Card from "./Card";
import useGameStore from "../store/GameStore";
import { PokemonCard } from "../types/GameTypes";
import PlayerStatus from "./PlayerStatus";
import CardModal from "./CardModal";

interface GameBoardProps {
  playerCards: PokemonCard[];
  opponentCards: PokemonCard[];
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
      console.log("playercards", playerCards);
      generatePlayerHand(playerCards);
      generateOpponentHand(opponentCards);
      setPlayerActiveCard();
      setOpponentActiveCard();
      // console.log("playeractive", playerActiveCard);
    }
  }, [playerCards, opponentCards]);

  return (
    <div className="grid h-screen -translate-y-[50px] place-items-center">
      <CardModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      {/* <Card cardData={playerActiveCard} isFullSize /> */}
      <div
        className="relative grid h-4/5 w-4/5 border-2 border-[#eeeeee]"
        style={{
          transform: "perspective(80em) rotateX(18deg)",
        }}
      >
        <div className="relative h-full w-full border-2 border-[#eeeeee] bg-[#831010]">
          <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center">
            <Card cardData={opponentActiveCard} isFlipped />
          </div>
        </div>
        <div className="relative grid h-full w-full place-items-center border-2 border-[#eeeeee] bg-[#1a2682]">
          <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center">
            <Card
              cardData={playerActiveCard}
              onClickEvent={() => setIsModalOpen(true)}
            />
          </div>
        </div>
        <div className="absolute right-0 top-0 w-full -translate-y-full pb-3">
          <PlayerStatus
            isInverse
            handCount={opponentHand.length}
            name="Opponent"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full translate-y-full pt-3">
          <PlayerStatus handCount={playerHand.length} name="Player (You)" />
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
