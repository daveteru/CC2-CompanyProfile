import Blogs_content from "./Blogs_content";
import Blogs_hero from "./Blogs_hero";
import LoginUI from "./components/LoginUI";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Blogs_login() {
  return (
    <div className="bg-red-400">
      <Navbar />
      <Blogs_hero />
      <div className="bg-red-400 py-25 h-full flex justify-center">
        <h1 className="font-[Borel] text-5xl text-white">User Login</h1>
      </div>
      <LoginUI/>
      <Footer />
    </div>
  );
}
