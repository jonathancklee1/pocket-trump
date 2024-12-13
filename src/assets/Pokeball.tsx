function Pokeball() {
  return (
    <div className="relative h-fit w-2/3">
      <div className="top-circle aspect-[2/1] border-b-[5px] border-b-black bg-red-600 shadow-inner"></div>
      <div className="bottom-circle aspect-[2/1] border-t-[5px] border-t-black bg-white shadow-2xl"></div>
      <div className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black">
        <div className="size-6 rounded-full bg-white"></div>
      </div>
    </div>
  );
}

export default Pokeball;
