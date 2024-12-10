import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
function MenuPage() {
  const [gameType, setGameType] = useState<string | null>(null);
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

  return (
    <div className="bg-blue-gradient flex h-screen flex-col items-center justify-center px-4">
      <h1
        id="heading"
        className="heebo-font mb-8 text-center text-3xl text-white"
      >
        Choose Game Type
      </h1>

      <div className="mb-8 flex items-center justify-center gap-4 md:mb-12">
        <button
          className={`rounded-xl border-[2px] px-3 py-2 text-xl font-bold text-white hover:bg-[#42a409] hover:text-white ${gameType === "quick" && "bg-[#42a409] text-white"}`}
          onClick={() => setGameType("quick")}
        >
          Quick <p className="text-sm">(5 cards)</p>
        </button>
        <button
          className={`rounded-xl border-[2px] px-3 py-2 text-xl font-bold text-white hover:bg-[#1248a3] hover:text-white ${gameType === "medium" && "bg-[#1248a3] text-white"}`}
          onClick={() => setGameType("medium")}
        >
          Medium <p className="text-sm">(10 cards)</p>
        </button>
        <button
          className={`rounded-xl border-[2px] px-3 py-2 text-xl font-bold text-white hover:bg-[#aa191c] hover:text-white ${gameType === "long" && "bg-[#aa191c] text-white"}`}
          onClick={() => setGameType("long")}
        >
          Long <p className="text-sm">(15 cards)</p>
        </button>
      </div>

      {gameType && (
        <Link
          id="start-button"
          to={{
            pathname: "/game",
          }}
          state={{ gameType: gameType }}
          className="mt-4 rounded-xl border-4 bg-[#dd2e31] px-6 py-4 text-3xl font-bold text-white hover:bg-[#f94144] hover:text-white"
        >
          Start Game
        </Link>
      )}
    </div>
  );
}

export default MenuPage;
