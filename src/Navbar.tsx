import { Link } from "react-router";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-10 w-screen box-border px-20 py-5 flex justify-between continer items-center transition ${scrolled ? "bg-[#A83271]" : ""}`}
    >
      <Link to="/">
        {" "}
        <img src="src/assets/logo_white.png" alt="" className="h-[50px]" />
      </Link>
      <div className="w-[50%] flex gap-5 justify-end">
        <div className="min-w-[600px] h-[40px] flex justify-between items-center rounded-full box-border border-2 overflow-hidden bg-[white] drop-shadow-[0px_5px_0px_rgba(0,0,0,1)]">
          {" "}
          <Link to="/about" className="w-full">
            <button className="hover:bg-[#A83271] hover:text-white transition px-5 py-4 w-full cursor-pointer ">
              ABOUT US
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
      </div>
    </div>
  );
}
