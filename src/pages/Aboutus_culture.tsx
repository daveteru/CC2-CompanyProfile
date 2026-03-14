import culturehero from "../assets/aboutus_culture.webp";

export default function Aboutus_culture() {
  return (
    <div className="w-screen h-fit bg-[#B0E4E8] ">
      <section className="w-screen h-fit grid lg:grid-cols-2  lg:mx-auto ">
        <article className="w-full h-100 md:h-200  flex justify-center items-center text-center flex-col">
          <div className="bg-gray-400 w-full h-full overflow-hidden ">
            <img
              src={culturehero}
              className="object-cover h-full w-full "
            ></img>
          </div>
        </article>
        <article className="relative w-full h-200  flex flex-col justify-between items-center text-center  px-5 py-30 gap-10 overflow-hidden">
          <p className="font-[Borel] text-5xl w-100 text-[#323F51]">
            Our Company Culture
          </p>
          <p className="font-[inter] md:w-100 text-[14px] font-light text-[#323F51]">
            Di klinik kami, kami percaya bahwa merawat hewan dimulai dari
            menciptakan lingkungan kerja yang penuh kasih, profesional, dan
            kolaboratif. Setiap anggota tim — dari dokter hewan hingga staf
            pendukung — bekerja dengan semangat yang sama: memberikan yang
            terbaik bagi setiap pasien berbulu kami. <br />
            <br />
            Kami mendorong budaya belajar yang berkelanjutan, saling mendukung
            satu sama lain, dan selalu mengutamakan kesejahteraan hewan di atas
            segalanya. Bergabunglah bersama kami dan jadilah bagian dari tim
            yang peduli dan berdedikasi.
          </p>
          <button className="border md:w-100 rounded-full border-blue-400 px-5 py-2 cursor-pointer bg-blue-400 hover:bg-blue-100 text-white hover:text-blue-900 font-bold drop-shadow-[0px_8px_0px_rgba(25,118,210,1)]   active:translate-y-2 active:drop-shadow-none transition-all">BERGABUNG DENGAN KAMI</button>

        </article>
      </section>
    </div>
  );
}
