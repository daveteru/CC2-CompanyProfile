import overviewhero from "./assets/bg_over.webp";
import polaroid2 from "./assets/polaroid2.png";
import paw from "./assets/paw.png";
import homeIllust from "./assets/home-illust.png";

export default function Home_overview() {
  return (
    <div className="w-screen h-fit bg-[#F0D6F6] p-10">
      <section className="w-screen h-fit grid grid-cols-2 container mx-auto ">
        <article className="w-full h-200  flex justify-center items-center text-center flex-col p-5 gap-10">
          <div className="bg-gray-400 w-full h-full rounded-4xl overflow-hidden ">
            <img
              src={overviewhero}
              className="object-cover h-full w-full "
            ></img>
          </div>
        </article>
        <article className="relative w-full h-200  flex flex-col justify-between items-left p-12 gap-10 overflow-hidden">
          <p className="font-[Borel] text-5xl w-100 text-[#323F51]">
            klinik hewan pertama yang beroperasi 24 jam
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
          <button className="w-fit h-fit p-4 bg-[#A83271] rounded-full text-white hover:bg-white hover:text-[#A83271] transition">
            TENTANG KAMI
          </button>
        </article>
      </section>
    </div>
  );
}
