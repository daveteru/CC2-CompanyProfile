import Editblogmodule from "@/components/Editblogmodule";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Blogs_hero from "./Blogs_hero";

export default function Blogs_edit() {

  return (
    <div className="bg-red-400">
      <Navbar />
      <Blogs_hero />
      <div className="bg-red-400 mt-25 h-full flex justify-center">
        <h1 className="font-[Borel] text-5xl text-white">Edit selected Blog</h1>
      </div>
      <Editblogmodule/>
      <Footer />
    </div>
  );
}
