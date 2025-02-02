import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import useGameStore from "../store/GameStore";
import Gary from "../assets/images/gary.webp";
import N from "../assets/images/n.png";
import Barry from "../assets/images/barry.jpg";
function MenuPage() {
  const [gameType, setGameType] = useState<string | null>(null);

  const { opponent, setOpponent } = useGameStore();

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from("#start-button", {
      duration: 1.5,
      delay: 0.7,
      opacity: 0,
    });
    gsap.from("#heading", {
      duration: 1,
      opacity: 0,
    });
  });

  const opponentProfileArray = [
    {
      name: "Blue Oak",
      avatar: Gary,
    },
    {
      name: "Barry",
      avatar: Barry,
    },
    {
      name: "N",
      avatar: N,
    },
  ];

  return (
    <div className="bg-blue-gradient flex h-screen flex-col items-center justify-center px-4 text-white">
      <div className="max-w-4xl">
        <h2
          id="heading"
          className="heebo-font mb-4 text-center text-2xl md:text-3xl"
        >
          How to play
        </h2>
        <p className="mb-8 text-center text-lg font-semibold md:mb-14">
          Each player will have a hand of Pocket Trump cards as well as an
          active card in play. Player must select a stat from their active card
          to battle with the opponent. The stats are compared and the highest
          number wins the round. The winner will take the opponent's active card
          and add it to their hand. <br />
          <br />
          The first to take all of the cards from the opponent's hand wins the
          game!
        </p>
        <h2
          id="heading"
          className="heebo-font mb-4 text-center text-2xl md:text-3xl"
        >
          Choose your Opponent
        </h2>

        <div className="mb-8 flex items-center justify-center md:mb-12 md:gap-6">
          {opponentProfileArray.map((rival) => {
            return (
              <button
                className={`flex min-w-[110px] flex-col items-center justify-center gap-4 rounded-xl px-3 py-2 text-xl font-bold hover:scale-105 ${opponent.name === rival.name && "text-[#42a409]"}`}
                onClick={() => setOpponent(rival.name, rival.avatar)}
                key={rival.name}
              >
                <img
                  src={rival.avatar}
                  alt=""
                  className={`size-14 rounded-full bg-white object-cover object-top md:size-20 ${opponent.name === rival.name && "border-4 border-[#42a409]"}`}
                />
                {rival.name}
              </button>
            );
          })}
        </div>
        <h2
          id="heading"
          className="heebo-font mb-4 text-center text-2xl md:text-3xl"
        >
          Choose Game Type
        </h2>

        <div className="mb-8 flex items-center justify-center gap-4 md:mb-12">
          <button
            className={`rounded-xl border-[2px] px-3 py-2 text-xl font-bold hover:bg-[#42a409] ${gameType === "quick" && "bg-[#42a409]"}`}
            onClick={() => setGameType("quick")}
          >
            Quick <p className="text-sm">(5 cards)</p>
          </button>
          <button
            className={`rounded-xl border-[2px] px-3 py-2 text-xl font-bold hover:bg-[#1248a3] ${gameType === "medium" && "bg-[#1248a3]"}`}
            onClick={() => setGameType("medium")}
          >
            Medium <p className="text-sm">(10 cards)</p>
          </button>
          <button
            className={`rounded-xl border-[2px] px-3 py-2 text-xl font-bold hover:bg-[#aa191c] ${gameType === "long" && "bg-[#aa191c]"}`}
            onClick={() => setGameType("long")}
          >
            Long <p className="text-sm">(15 cards)</p>
          </button>
        </div>
        <div className="flex w-full items-center justify-center">
          {gameType && opponent.name !== "" && (
            <Link
              id="start-button"
              to={{
                pathname: "/game",
              }}
              state={{ gameType: gameType }}
              className="mt-4 rounded-xl border-4 bg-[#dd2e31] px-6 py-4 text-3xl font-bold hover:bg-[#f94144]"
            >
              Start Game
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
