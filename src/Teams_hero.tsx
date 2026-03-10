import hero from "./assets/team_hero.webp";

export default function Teams_hero() {
  return (
    <div className="bg-[#FFC738]">
      <header className="relative w-screen h-[95vh] rounded-b-[150px]  overflow-hidden">
        <div className="w-full h-full flex justify-end flex-col gap-3 px-10 container mx-auto py-10 ">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={hero}
            alt="Hero Background"
          />
          <h1 className="font-[Borel] text-7xl w-[600px] leading-22 text-white z-2">
            Meet the Team.
          </h1>
        </div>
      </header>
    </div>
  );
}
