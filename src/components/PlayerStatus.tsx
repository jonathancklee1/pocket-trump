import React from "react";
import { PlayerStatusProps } from "../types/GameTypes";
import useGameStore from "../store/GameStore";

function PlayerStatus({ isInverse, handCount, name }: PlayerStatusProps) {
  return (
    <div className="flex w-full items-center justify-between gap-2 bg-orange-50 px-3 py-5">
      {/* Profile pic */}
      <div className={`flex items-center gap-2 ${isInverse && "order-last"}`}>
        <div className="size-8 rounded-full bg-slate-600">
          <img src="" alt="" />
        </div>
        {/* Name */}
        <p className="text-xl font-semibold">{name}</p>
      </div>

      {/* Score */}
      <div>
        <span className="font-semibold">Cards in hand: {handCount}</span>
      </div>
    </div>
  );
}

export default PlayerStatus;
