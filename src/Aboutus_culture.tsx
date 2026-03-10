import culturehero from "./assets/aboutus_culture.webp";

export default function Aboutus_culture() {
  return (
    <div className="w-screen h-fit bg-[#B0E4E8] ">
      <section className="w-screen h-fit grid grid-cols-2 container mx-auto ">
        <article className="w-full h-200  flex justify-center items-center text-center flex-col">
          <div className="bg-gray-400 w-full h-full overflow-hidden ">
            <img
              src={culturehero}
              className="object-cover h-full w-full "
            ></img>
          </div>
        </article>
        <article className="relative w-full h-200  flex flex-col justify-between items-left p-12 gap-10 overflow-hidden">
          <p className="font-[Borel] text-5xl w-100 text-[#323F51]">
            Bergabung menjadi keluarga PDHB. drh.Cucu!
          </p>
          <p className="font-[inter] w-100 text-[14px] font-light text-[#323F51]">
            Cucu Kartini menyelesaikan pendidikan dokter hewan di Fakultas
            Kedokteran Hewan Institut Pertanian Bogor (FKH IPB) pada tahun 1982.
            Pada tahun berikutnya, bersama dengan Prof Drh Dondin Sajuthi, PhD,
            ia merintis praktik hewan kecil yang menjadi cikal bakal berdirinya
            Klinik PDHB 24 Jam di Sunter pada tahun 1997. <br />
            <br />
            Klinik ini berkembang dengan pesat, memiliki dua gedung tambahan
            untuk layanan maternity, ophthalmology, dan klinik khusus kucing,
            serta cabang di Green Garden dan satelit di Alam Sutera.
          </p>
          <button className="w-fit h-fit p-4 bg-blue-700 rounded-full text-white hover:bg-white hover:text-[#A83271] transition">
            TENTANG KAMI
          </button>
        </article>
      </section>
    </div>
  );
}
