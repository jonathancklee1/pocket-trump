import { CardProps } from "../types/GameTypes";

function Card({ cardData }: CardProps) {
    console.log(cardData);
    return (
        <div className=" md:w-[300px]  px-3 py-2 bg-[#81affe] text-black rounded-xl border-[12px] border-[#FFDE00] overflow-hidden">
            <p className="text-4xl font-bold capitalize mb-3">
                {cardData?.name}
            </p>

            <div className="bg-slate-50 aspect-video w-full overflow-hidden flex justify-center items-center mb-3 border-4 border-gray-400">
                <picture className="h-full">
                    <img
                        src={cardData?.sprite}
                        alt=""
                        className="w-full h-full"
                    />
                </picture>
            </div>

            <div className="px-3 py-5 bg-[#a3c5ff]">
                <div className="flex gap-2 mb-4">
                    {cardData?.types?.map((type) => {
                        return (
                            <span
                                className="text-sm font-semibold uppercase px-2 py-1 rounded-3xl cursor-pointer shadow-2xl bg-red-700 text-white "
                                key={type}
                            >
                                {type}
                            </span>
                        );
                    })}
                </div>
                {cardData?.stats?.map((stat) => {
                    return (
                        <div
                            className="text-md mb-4 flex justify-between px-4 py-2 rounded-3xl cursor-pointer shadow-2xl hover:shadow-inner border border-white "
                            key={stat.name}
                        >
                            <span className="uppercase font-semibold">
                                {stat.name}:{" "}
                            </span>
                            <span className="uppercase font-semibold">
                                {stat.value}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Card;
