import { useEffect, useState } from "react";
import Card from "./Card";
import useGameStore from "../store/GameStore";
import { PokemonCard } from "../types/GameTypes";
import PlayerStatus from "./PlayerStatus";
import CardModal from "./CardModal";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Ash from "../assets/images/ash.png";
interface GameBoardProps {
  playerCards: PokemonCard[];
  opponentCards: PokemonCard[];
}
function GameBoard({ playerCards, opponentCards }: GameBoardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const navigateTo = useNavigate();

  useGSAP(() => {
    gsap.from("#game-board", {
      duration: 2,
      opacity: 0,
      ease: "ease",
    });
    gsap.from("#player-status", {
      duration: 1,
      opacity: 0,
      translateY: 100,
      ease: "power2",
      delay: 1,
    });
    gsap.from("#opponent-status", {
      duration: 1,
      opacity: 0,
      translateY: -100,
      ease: "power2",
      delay: 1,
    });
  });
  const {
    playerActiveCard,
    setPlayerActiveCard,
    generatePlayerHand,
    opponentActiveCard,
    setOpponentActiveCard,
    generateOpponentHand,
    playerHand,
    opponentHand,
    gameResult,
    opponent,
  } = useGameStore();

  useEffect(() => {
    if (playerCards && opponentCards) {
      generatePlayerHand(playerCards);
      generateOpponentHand(opponentCards);
      setPlayerActiveCard();
      setOpponentActiveCard();
    }
  }, [playerCards, opponentCards]);
  useEffect(() => {
    setIsGameStarted(true);
  }, []);

  useEffect(() => {
    if (gameResult) {
      navigateTo("/results");
    }
  }, [gameResult]);
  return (
    <div
      id="game-board"
      className="mx-auto grid h-screen max-w-5xl -translate-y-[50px] place-items-center"
    >
      <CardModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        isGameStarted={isGameStarted}
      />
      <div
        className="relative grid h-4/5 w-4/5 border-2 border-[#eeeeee]"
        style={{
          transform: "perspective(80em) rotateX(18deg)",
        }}
      >
        <div className="bg-board-red relative h-full w-full border-2 border-[#eeeeee]">
          <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center">
            <Card cardData={opponentActiveCard} isFlipped />
          </div>
        </div>
        <div className="bg-board-blue relative grid h-full w-full place-items-center border-2 border-[#eeeeee]">
          <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center">
            <Card
              cardData={playerActiveCard}
              onClickEvent={() => setIsModalOpen(true)}
            />
          </div>
        </div>
        <div
          id="opponent-status"
          className="absolute right-0 top-0 w-full -translate-y-full pb-3"
        >
          <PlayerStatus
            isInverse
            handCount={opponentHand.length}
            name={opponent.name}
            avatar={opponent.avatar}
          />
        </div>
        <div
          id="player-status"
          className="absolute bottom-0 left-0 w-full translate-y-full pt-3"
        >
          <PlayerStatus
            handCount={playerHand.length}
            name="Player (You)"
            avatar={Ash}
          />
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
