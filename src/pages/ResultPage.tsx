import React from "react";
import { Link } from "react-router-dom";

function ResultPage() {
  return (
    <div className="bg-blue-gradient flex h-screen flex-col items-center justify-center px-6">
      <div>
        <h1 className="heebo-font mb-6 text-center text-4xl font-bold text-white">
          You Win!
        </h1>
        <h2 className="heebo-font mb-6 text-center text-4xl font-bold text-white">
          You have defeated your opponent
        </h2>
      </div>
      <Link
        to="/"
        className="hover: rounded-full border-4 border-[#f94144] px-6 py-4 text-3xl font-bold text-[#f94144] transition-all duration-500 hover:bg-[#f94144] hover:text-white"
      >
        Play Again
      </Link>
    </div>
  );
}

export default ResultPage;
