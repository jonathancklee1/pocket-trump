import React from "react";
import { PlayerStatusProps } from "../types/GameTypes";
import useGameStore from "../store/GameStore";

function PlayerStatus({ isInverse, handCount, name }: PlayerStatusProps) {
    return (
        <div className="flex gap-2 items-center justify-between w-full px-3 py-5 bg-orange-50">
            {/* Profile pic */}
            <div
                className={`flex gap-2 items-center ${
                    isInverse && "order-last"
                }`}
            >
                <div className="rounded-full size-8 bg-slate-600">
                    <img src="" alt="" />
                </div>
                {/* Name */}
                <p className="text-xl font-semibold">{name}</p>
            </div>

            {/* Score */}
            <div>
                <span className="font-semibold">
                    Cards in hand: {handCount}
                </span>
            </div>
        </div>
    );
}

export default PlayerStatus;
