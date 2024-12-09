import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import Pokeball from "../assets/Pokeball";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function StartPage() {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from("#pokeball", {
      duration: 1.5,
      translateY: -100,
      opacity: 0,
      ease: "bounce",
    });
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
    <div className="bg-blue-gradient flex h-screen flex-col items-center justify-center">
      <div
        id="pokeball"
        className="flex w-full max-w-[270px] items-center justify-center"
      >
        <Pokeball />
      </div>
      <div id="heading">
        <Heading />
      </div>
      <Link
        id="start-button"
        to="/menu"
        className="hover: mt-4 animate-bounce rounded-xl border-4 bg-[#dd2e31] px-6 py-4 text-3xl font-bold text-white hover:bg-[#f94144] hover:text-white"
      >
        Play
      </Link>
    </div>
  );
}

export default StartPage;
