import { Link } from "react-router";
import overviewhero from "../assets/bg_over.webp";

export default function Home_overview() {
  return (
    <div className="w-screen h-fit bg-[#F0D6F6] ">
      <section className="w-screen h-fit grid lg:grid-cols-2 container mx-auto py-5 md:py-10 ">
        <article className="md:w-full w-full md:h-200 h-100  flex justify-center items-center text-center flex-col px-5 gap-10">
          <div className="bg-gray-400 w-full h-full rounded-4xl overflow-hidden ">
            <img
              src={overviewhero}
              alt="Clinic overview"
              className="object-cover h-full w-full "
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="relative w-full h-200  flex flex-col md:justify-between items-left p-12 gap-10 overflow-hidden">
          <p className="font-[Borel] text-3xl md:text-5xl md:w-100 text-[#323F51]">
            klinik hewan pertama yang beroperasi 24 jam
          </p>
          <p className="font-[inter] lg:w-100 text-md font-medium text-[#323F51]">
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
<Link to="/about">
            <button className="w-fit  rounded-full px-5 py-2  cursor-pointer border-4 border-[#A83271] bg-white hover:bg-[#A83271] hover:text-white font-bold drop-shadow-[0px_8px_0px_rgba(94,29,63,1)]   active:translate-y-2 active:drop-shadow-none transition-all">TENTANG TEAM KAMI</button>
  
</Link>
        </article>
      </section>
    </div>
  );
}
