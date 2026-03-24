import { Link } from "react-router";
import Loginbutton from "./Loginbutton";
import { useBurgerStore } from "../store/store";
import xasd from "../assets/xicon.png";

export default function Burgermenu() {
  const { isBurgerOpen, closeburger } = useBurgerStore();
  return (
    <div className={`flex w-fit pointer-events-auto font-[inter] bg-red-200 transition-all  ${isBurgerOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div
        className={`w-[250px] h-screen bg-[#A83271] flex flex-col items-center py-5 z-30 font-bold`}
      >
        <Loginbutton />
        <Link to="/about" className="w-full">
          <button className="hover:bg-[#A83271] hover:text-white transition w-full py-5 mt-10 cursor-pointer bg-[#d372a1]" onClick={closeburger}>
            ABOUT
          </button>
        </Link>
        <Link to="/services" className="w-full">
          <button className="hover:bg-[#A83271] hover:text-white transition py-5 w-full cursor-pointer bg-[#E0A8C8]" onClick={closeburger}>
            SERVICES
          </button>
        </Link>
        <Link to="/teams" className="w-full">
          <button className="hover:bg-[#A83271] hover:text-white transition  py-5 w-full cursor-pointer bg-[#d372a1]" onClick={closeburger}>
            TEAM
          </button>
        </Link>
        <Link to="/blogs" className="w-full">
          <button className="hover:bg-[#A83271] hover:text-white transition  py-5 w-full cursor-pointer bg-[#E0A8C8]" onClick={closeburger} >
            BLOGS
          </button>
        </Link>
        <button onClick={closeburger} aria-label="Close menu"><img src={xasd} alt="" className="w-10 mt-10" loading="lazy" /></button>
      </div>
    </div>
  );
}
