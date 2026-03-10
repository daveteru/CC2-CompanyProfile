import Blogs_hero from "./Blogs_hero";
import Createblogmodule from "./components/Createblogmodule";
import LoginUI from "./components/LoginUI";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Blogs_create() {
  return (
    <div >
      <Navbar />
      <Blogs_hero />
      <div className="bg-red-400 py-25 h-full flex justify-center">
        <h1 className="font-[Borel] text-5xl text-white">Create New Blog</h1>
      </div>
      <Createblogmodule/>
      <Footer />
    </div>
  );
}
