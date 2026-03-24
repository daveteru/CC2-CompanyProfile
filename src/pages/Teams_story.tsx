import illust from "../assets/teams_illustration.png";

export default function Teams_story() {
  return (
    <div className="w-screen h-fit bg-[#FFC738]">
      <section className="w-screen h-fit grid lg:grid-cols-2 container mx-auto lg:px-15 ">
        <div className="md:w-[85%] h-[full] py-20 px-10 flex flex-col justify-center gap-5">
          <h1 className="font-[Borel] text-2xl md:text-[48px] text-[#323F51] text-center md:text-left">
            Tim Dokter Hewan Berpengalaman yang Siap Merawat Hewan Kesayangan Anda
          </h1>
          <p className="lg:leading-8 leading-6 text-center md:text-left text-sm md:text-xl lg:text-md md:leading-10">
            Dengan pengalaman lebih dari 20 tahun dalam dunia kedokteran hewan,
            tim dokter kami memahami bahwa setiap hewan peliharaan adalah bagian
            tak terpisahkan dari keluarga Anda. Kami menggabungkan keahlian medis
            terkini dengan pendekatan yang lembut dan penuh perhatian, memastikan
            setiap pasien mendapatkan perawatan terbaik. Dari pemeriksaan rutin
            hingga penanganan darurat, kami selalu siap memberikan layanan
            kesehatan yang berkualitas untuk sahabat berbulu Anda.
          </p>
        </div>
        <div className="flex flex-col items-end justify-end p-10">
          <img src={illust} alt="" loading="lazy" />
        </div>
      </section>
    </div>
  );
}
