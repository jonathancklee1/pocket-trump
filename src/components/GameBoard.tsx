import React from "react";
import Card from "./Card";

function GameBoard() {
    return (
        <div className="h-screen grid place-items-center">
            <div className="relative h-4/5 w-1/2 border-2 border-black grid">
                <div className="w-full h-full border-2 border-black bg-[#CC0000]"></div>
                <div className="w-full h-full border-2 border-black bg-[#3B4CCA]"></div>
                <Card />
            </div>
        </div>
    );
}

export default GameBoard;
