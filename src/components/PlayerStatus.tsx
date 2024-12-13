import { PlayerStatusProps } from "../types/GameTypes";

import Deckcards from "../assets/svgs/Deckcards";
function PlayerStatus({
  isInverse,
  handCount,
  name,
  avatar,
}: PlayerStatusProps) {
  return (
    <div
      style={{
        clipPath: isInverse
          ? "polygon(0 33%, 0 100%, 100% 100%, 100% 0, 60% 0, 45% 33%)"
          : "polygon(0 0, 1% 100%, 100% 100%, 100% 39%, 60% 37%, 42% 1%)",
      }}
      className={`relative flex w-full items-center gap-2 ${isInverse ? "bg-opponent-status-bar" : "bg-player-status-bar"} px-3 py-3 text-white ${isInverse && "justify-end"}`}
    >
      {/* Profile pic */}
      <div className={`flex items-center gap-2`}>
        <img src={avatar} alt="" className="size-8 rounded-full bg-white" />
        {/* Name */}
        <p className="text-lg font-semibold md:text-xl">{name}</p>
      </div>

      {/* Score */}
      <div
        className={`absolute bottom-0 grid grid-cols-2 place-items-center gap-1 text-xl ${isInverse ? "left-4" : "right-4"}`}
      >
        <Deckcards />
        <span className="font-semibold md:text-xl">{handCount}</span>
      </div>
    </div>
  );
}

export default PlayerStatus;
