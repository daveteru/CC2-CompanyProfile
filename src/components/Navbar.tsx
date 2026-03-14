import { Link } from "react-router";
import logo from "../assets/logo_white.png";
import { useState, useEffect } from "react";
import Loginbutton from "./Loginbutton";
import Navbarbuttons from "./Navbarbuttons";
import Burgermenu from "./Burgermenu";
import Burgericon from "./Burgericon";
import { useBurgerStore } from "../store/store";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setisMobile] = useState(window.innerWidth < 700);

  useBurgerStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setisMobile(window.innerWidth < 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="w-full fixed z-50 pointer-events-none flex justify-end">
          <Burgermenu />
      </div>
      <div
        className={`fixed z-10 w-screen box-border px-5 md:px-10 lg:px-20 py-5 flex justify-between continer items-center transition ${scrolled ? "bg-[#A83271]" : ""}`}
      >
        <Link to="/">
          {" "}
          <img src={logo} alt="" className="h-[50px] object-contain" />
        </Link>
        <div className="w-full h-fit flex lg:flex-row gap-5 justify-end items-end ">
          {isMobile ? "" : <Navbarbuttons />}
          <Loginbutton />
          {!isMobile ? "" : <Burgericon />}
        </div>
      </div>
    </div>
  );
}
