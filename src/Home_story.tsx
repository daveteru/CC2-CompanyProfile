export default function Home_story() {
  return (
    <div>
      <section className="w-screen h-[650px] grid grid-cols-2 bg-[#B0E4E8]">
        <article className="w-full h-full bg-[#B0E4E8] flex justify-center items-center text-center flex-col p-25 gap-10">
          <img src="src/assets/cat_story.png" alt="" className="w-80" />
          <p className="font-[Borel] text-4xl w-65">
            a better way to care for your pet
          </p>
          <p className="font-[inter] w-100">
            PDHB drh. Cucu Kartini S. dkk memiliki dokter hewan dan staff yang
            berpengalaman serta fasilitas pelayanan medis yang lengkap. Kami
            memerikan layanan terbaik untuk hewan kesayangan anda
          </p>
        </article>
        <article className="relative w-full h-full bg-[#FFC738] flex flex-col justify-center items-center p-12 gap-10 overflow-hidden">
          <div className="max-w-145 h-175 bg-gray-400 rounded-4xl overflow-hidden">
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
            <p className="font-[borel] w-60 text-3xl">
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
