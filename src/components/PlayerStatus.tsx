import React from "react";
import { PlayerStatusProps } from "../types/GameTypes";

function PlayerStatus({ isInverse }: PlayerStatusProps) {
    return (
        <div className="flex gap-2 items-center justify-between w-full">
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
                <p className="text-xl font-semibold">Player</p>
            </div>

            {/* Score */}
            <div>
                <span className="font-semibold">Cards in hand: 10</span>
            </div>
        </div>
    );
}

export default PlayerStatus;
