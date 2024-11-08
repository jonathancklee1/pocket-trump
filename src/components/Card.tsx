import useApi from "../hooks/useApi";

function Card() {
    const { data, error, isLoading } = useApi(
        "https://pokeapi.co/api/v2/pokemon/psyduck"
    );
    console.log(data);
    return (
        !isLoading && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] aspect-[63/88] px-3 py-2 bg-[#7D78A3] text-black rounded-xl border-8 border-[#FFDE00]">
                <p className="text-4xl font-bold capitalize mb-3">
                    {data.name}
                </p>

                <div className="bg-slate-50">
                    <picture>
                        <img
                            src={data.sprites.front_default}
                            alt=""
                            className="w-full mb-5"
                        />
                    </picture>
                </div>
                {data.stats.map((stat) => {
                    return (
                        <div className="text-xl mb-4 flex justify-between">
                            <span className="uppercase font-semibold">
                                {stat.stat.name}:{" "}
                            </span>
                            <span className="uppercase font-semibold">
                                {stat.base_stat}
                            </span>
                        </div>
                    );
                })}
            </div>
        )
    );
}

export default Card;
