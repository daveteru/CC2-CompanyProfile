import bgPink from "../assets/Background_pink.png";

export default function Backgroundlines() {
  return (
    <div className="w-full absolute z-0">
      <img src={bgPink} alt="" className="w-full object-cover" />
    </div>
  );
}
