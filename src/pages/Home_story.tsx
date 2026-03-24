import { Link } from "react-router";
import catstory from "../assets/cat_story.png";
import polaroid2 from "../assets/polaroid2.png";
import paw from "../assets/paw.png";
import homeillust from "../assets/home-illust.png";

export default function Home_story() {
  return (
    <div className="w-screen h-fit flex justify-center herogradient">
      <section className="w-full h-fit flex  flex-col lg:grid lg:grid-cols-2 lg:container lg:mx-auto  ">
        <article className="w-full h-200 bg-[#B0E4E8] flex justify-center items-center text-center flex-col p-25 gap-10">
          <img src={catstory} alt="" className="w-80" loading="lazy" />
          <p className="font-[Borel] text-5xl w-80 text-blue-700">
            a reliable team to care for your pet
          </p>
          <p className="font-[inter] w-80 md:w-100  md:text-[18px] font-light">
            PDHB drh. Cucu Kartini S. dkk memiliki dokter hewan dan staff yang
            berpengalaman serta fasilitas pelayanan medis yang lengkap. Kami
            memerikan layanan terbaik untuk hewan kesayangan anda
          </p>
          <Link to="/services"><button className="border rounded-full border-blue-400 px-5 py-2 cursor-pointer bg-white border-4 border-blue-500 hover:bg-blue-500 hover:text-white font-bold drop-shadow-[0px_8px_0px_rgba(25,118,210,1)]   active:translate-y-2 active:drop-shadow-none transition-all">CEK SERVICE KAMI</button></Link>
        </article>
        <article className="relative w-full h-150 md:h-200 bg-[#FFC738] flex flex-col justify-center items-center p-12 gap-10 overflow-hidden">
          <div className="max-full h-150 bg-gray-400 rounded-4xl overflow-hidden">
            {" "}
            <img
              className="object-cover w-full h-full"
              src={polaroid2}
              alt=""
              loading="lazy"
            />{" "}
          </div>
          <img
            src={paw}
            alt=""
            className="w-50 h-50 absolute bottom-35 nd:left-70 rotate-30"
            loading="lazy"
          />
          <div className="flex justify-between w-full">
            <p className="font-[borel] w-60 text-3xl text-red-400">
              with care & Love est.1997
            </p>
            <img
              src={homeillust}
              alt=""
              className="-rotate-7 w-60"
              loading="lazy"
            />
          </div>
        </article>
      </section>
    </div>
  );
}
