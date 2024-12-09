import { Link } from "react-router-dom";
import useGameStore from "../store/GameStore";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function ResultPage() {
  const { resetStore, gameResult } = useGameStore();

  useGSAP(() => {
    gsap.from("#play-again-button", {
      duration: 1.5,
      opacity: 0,
      ease: "ease",
      translateY: 100,
      delay: 0.5,
    });
    gsap.from("#result-text", {
      duration: 0.7,
      opacity: 0,
      ease: "power2",
      translateY: -100,
    });
    gsap.from("#play-again-text", {
      duration: 0.7,
      opacity: 0,
      ease: "ease",
      delay: 0.5,
    });
  });
  return (
    <div className="bg-blue-gradient flex h-screen flex-col items-center justify-center px-6">
      <div>
        <h1
          id="result-text"
          className="heebo-font mb-6 text-center text-4xl font-bold text-white"
        >
          {gameResult}
        </h1>
        <h2
          id="play-again-text"
          className="heebo-font mb-12 text-center text-4xl font-bold text-white"
        >
          {gameResult === "You Win!"
            ? "You have beaten your opponent!"
            : "Your opponent has beaten you! Battle again!"}
        </h2>
      </div>
      <Link
        to="/"
        id="play-again-button"
        className="animate-pulse rounded-2xl border-4 border-[#f94144] px-6 py-4 text-3xl font-bold text-[#f94144] hover:bg-[#f94144] hover:text-white"
        onClick={() => {
          resetStore();
        }}
      >
        Play Again
      </Link>
    </div>
  );
}

export default ResultPage;
