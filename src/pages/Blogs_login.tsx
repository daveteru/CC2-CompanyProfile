import LoginUI from "../components/LoginUI";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Blogs_login() {
  return (
    <div className="bg-red-400 ">
      <Navbar />
      {/* <Blogs_hero /> */}
      <div className="bg-red-400 pt-40 md:pt-50  pb-10 md:pb-20 h-full flex justify-center">
        <h1 className="font-[Borel] text-3xl md:text-5xl text-white">User Login</h1>
      </div>
      <LoginUI/>
      <Footer />
    </div>
  );
}
