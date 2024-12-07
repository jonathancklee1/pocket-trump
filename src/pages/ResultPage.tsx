import { Link } from "react-router-dom";
import useGameStore from "../store/GameStore";

function ResultPage() {
  const { resetStore, gameResult } = useGameStore();

  return (
    <div className="bg-blue-gradient flex h-screen flex-col items-center justify-center px-6">
      <div>
        <h1 className="heebo-font mb-6 text-center text-4xl font-bold text-white">
          {gameResult}
        </h1>
        <h2 className="heebo-font mb-6 text-center text-4xl font-bold text-white">
          {gameResult === "You Win!"
            ? "You have beaten your opponent!"
            : "Your opponent has beaten you! Battle again!"}
        </h2>
      </div>
      <Link
        to="/"
        className="hover: rounded-2xl border-4 border-[#f94144] px-6 py-4 text-3xl font-bold text-[#f94144] transition-all duration-500 hover:bg-[#f94144] hover:text-white"
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
