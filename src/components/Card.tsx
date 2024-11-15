import useGameStore from "../store/GameStore";
import { CardProps } from "../types/GameTypes";

function Card({ cardData, onClickEvent, isFullSize }: CardProps) {
    console.log(cardData);
    const {
        playerActiveCard,
        setPlayerActiveCard,
        playerHand,
        reAddToPlayerHand,
    } = useGameStore();

    return (
        <>
            <div
                onClick={onClickEvent}
                className={`shrink-0 px-3 py-2 bg-[#81affe] text-black rounded-xl border-[12px] border-[#FFDE00] overflow-hidden max-w-[320px] z-10  ${
                    !isFullSize && "scale-[40%]"
                }`}
            >
                <p className="text-2xl md:text-4xl font-bold capitalize mb-1">
                    {cardData?.name}
                </p>

                <div className="bg-slate-50 aspect-video w-full overflow-hidden flex justify-center items-center mb-2 border-4 border-gray-400">
                    <picture className="h-full">
                        <img
                            src={cardData?.sprite}
                            alt=""
                            className="w-full h-full"
                        />
                    </picture>
                </div>

                <div className="px-3 py-3 bg-[#a3c5ff]">
                    <div className="flex gap-2 mb-2">
                        {cardData?.types?.map((type) => {
                            return (
                                <span
                                    className="text-sm font-semibold uppercase px-3 py-1 rounded-3xl cursor-pointer shadow-2xl bg-red-700 text-white "
                                    key={type}
                                >
                                    {type}
                                </span>
                            );
                        })}
                    </div>
                    {cardData?.stats?.map((stat) => {
                        return (
                            <button
                                className="w-full text-sm last-of-type:mb-0 mb-2 flex justify-between px-4 py-2 rounded-3xl cursor-pointer shadow-2xl hover:shadow-inner border border-white "
                                key={stat.name}
                                type="button"
                                onClick={() => reAddToPlayerHand()}
                            >
                                <span className="uppercase font-semibold">
                                    {stat.name}:{" "}
                                </span>
                                <span className="uppercase font-semibold">
                                    {stat.value}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Card;
