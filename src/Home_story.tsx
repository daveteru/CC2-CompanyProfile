import { Link } from "react-router";

export default function Home_story() {
  return (
    <div className="w-screen h-fit herogradient">
      <section className="w-screen h-fit grid grid-cols-2 container mx-auto ">
        <article className="w-full h-200 bg-[#B0E4E8] flex justify-center items-center text-center flex-col p-25 gap-10">
          <img src="src/assets/cat_story.png" alt="" className="w-80" />
          <p className="font-[Borel] text-5xl w-80 text-blue-700">
            a reliable team to care for your pet
          </p>
          <p className="font-[inter] w-100 text-[14px] font-light">
            PDHB drh. Cucu Kartini S. dkk memiliki dokter hewan dan staff yang
            berpengalaman serta fasilitas pelayanan medis yang lengkap. Kami
            memerikan layanan terbaik untuk hewan kesayangan anda
          </p>
          <Link to="/services"><button className="border rounded-full border-blue-400 px-5 py-2 cursor-pointer bg-white hover:bg-blue-400 hover:text-white font-bold drop-shadow-[0px_8px_0px_rgba(25,118,210,1)]   active:translate-y-2 active:drop-shadow-none transition-all">CEK SERVICE KAMI</button></Link>
        </article>
        <article className="relative w-full h-200 bg-[#FFC738] flex flex-col justify-center items-center p-12 gap-10 overflow-hidden">
          <div className="max-full h-150 bg-gray-400 rounded-4xl overflow-hidden">
            {" "}
            <img
              className="object-cover w-full h-full"
              src="src/assets/polaroid2.png"
              alt=""
            />{" "}
          </div>
          <img
            src="src/assets/paw.png"
            alt=""
            className="w-50 h-50 absolute bottom-35 left-70 rotate-30"
          />
          <div className="flex justify-between w-full">
            <p className="font-[borel] w-60 text-3xl text-red-400">
              with care & Love est.1997
            </p>
            <img
              src="src/assets/home-illust.png"
              alt=""
              className="-rotate-7 w-60"
            />
          </div>
        </article>
      </section>
    </div>
  );
}
