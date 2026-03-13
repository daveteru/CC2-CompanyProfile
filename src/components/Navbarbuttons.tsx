import { Link } from "react-router";

export default function Navbarbuttons() {
  return (
    <div className=" sm:min-w-[400px] lg:min-w-[600px] h-[40px] flex   justify-between items-center rounded-full box-border border-4 border-[#5E1D3F] overflow-hidden bg-[white] font-bold drop-shadow-[0px_8px_0px_rgba(94,29,63,1)] ">
      {" "}
      <Link to="/about" className="w-full">
        <button className="hover:bg-[#A83271] hover:text-white transition px-5 py-4 w-full cursor-pointer ">
          ABOUT
        </button>
      </Link>
      <Link to="/services" className="w-full">
        <button className="hover:bg-[#A83271] hover:text-white transition px-5 py-4  w-full cursor-pointer">
          SERVICES
        </button>
      </Link>
      <Link to="/teams" className="w-full">
        <button className="hover:bg-[#A83271] hover:text-white transition px-5 py-4 w-full cursor-pointer">
          TEAM
        </button>
      </Link>
      <Link to="/blogs" className="w-full">
        <button className="hover:bg-[#A83271] hover:text-white transition px-5 py-4 w-full cursor-pointer">
          BLOGS
        </button>
      </Link>
    </div>
  );
}
