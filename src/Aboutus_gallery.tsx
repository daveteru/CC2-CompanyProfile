import gallery1 from "./assets/aboutus_gallery_1.webp";
import gallery2 from "./assets/aboutus_gallery_2.webp";
import gallery3 from "./assets/aboutus_gallery_3.webp";
import gallery4 from "./assets/aboutus_gallery_4.webp";
import galleryall from "./assets/Group 7.png";
import Button1 from "./components/Button1";

export default function Aboutus_gallery() {
  return (
    <div className="w-screen h-220 bg-[#FFC738] p-10 ">
      <div className="h-full flex px-5 container mx-auto relative justify-center items-center">
        <h1 className="font-[Borel] text-6xl  text-center mt-10 text-red-400">
          Clinic Gallery
        </h1>

        <div className="h-full w-full relative flex justify-center items-center ">
          {" "}
          <p className="relative z-5 text-white font-[Caveat] text-3xl w-70 bottom-70 rotate-6">
            Another Day Another Happy Day at the Clinic!
          </p>
          <p className="relative z-5 text-white font-[Caveat] text-3xl w-70 top-50 -rotate-6">
            Happy Park day Out!!
          </p>
          <img
            src={galleryall}
            alt=""
            className="w-[80%] absolute z-3"
          ></img>{" "}
        </div>
      </div>
    </div>
  );
}
