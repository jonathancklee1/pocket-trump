import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import Pokeball from "../assets/Pokeball";

function StartPage() {
  return (
    <div className="bg-blue-gradient flex h-screen flex-col items-center justify-center">
      <div className="flex w-full max-w-[320px] items-center justify-center">
        <Pokeball />
      </div>
      <Heading />
      <Link
        to="/game"
        className="hover: rounded-full border-4 border-[#f94144] px-6 py-4 text-3xl font-bold text-[#f94144] transition-all duration-500 hover:bg-[#f94144] hover:text-white"
      >
        Start Game
      </Link>
    </div>
  );
}

export default StartPage;
