import gallery1 from "./assets/aboutus_gallery_1.webp";
import gallery2 from "./assets/aboutus_gallery_2.webp";
import gallery3 from "./assets/aboutus_gallery_3.webp";
import gallery4 from "./assets/aboutus_gallery_4.webp";
import Button1 from "./components/Button1";

export default function Aboutus_gallery() {
  return (
    <div className="w-screen h-250 bg-[#FFC738] p-10 ">
      <div className="h-full w-full grid grid-cols-3 gap-1">
        <div className="h-full  relative">
          <img
            src={gallery1}
            alt=""
            className="absolute w-100 rotate-5 top-5 left-20 z-3"
          />
          <img
            src={gallery4}
            alt=""
            className="absolute w-100 -rotate-5 bottom-5 -right-20 z-1"
          />
        </div>
        <div className="h-full  relative">
          <img
            src={gallery2}
            alt=""
            className="absolute -rotate-8 top-100 right-10 z-2"
          />
        </div>
        <div className="h-full  relative flex flex-col justify-end items-end">
          <img
            src={gallery3}
            alt=""
            className="absolute rotate-8 top-10 right-20 z-2"
          />
          <div className="relative flex text-right gap-5 items-end justify-end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            architecto debitis, harum sint aliquam iure error blanditiis nihil
            numquam reprehenderit.
            <Button1 label="Contact our Whatsapp" color="#E09038" />
          </div>
        </div>
      </div>
    </div>
  );
}
