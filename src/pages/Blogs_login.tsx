import LoginUI from "../components/LoginUI";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function Blogs_login() {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  return (
    <div className="bg-red-400 ">
      <Navbar />
      {/* <Blogs_hero /> */}
      <div className="bg-red-400 pt-40 md:pt-50  pb-10 md:pb-20 h-screen  flex flex-col items-center gap-20 justify-center">
        <h1 className="font-[Borel] text-3xl md:text-5xl text-white">User Login</h1>
      <LoginUI/>
      </div>
      <Footer />
    </div>
  );
}
