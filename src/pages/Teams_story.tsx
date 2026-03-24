import illust from "../assets/teams_illustration.png";

export default function Teams_story() {
  return (
    <div className="h-fit w-screen bg-[#FFC738]">
      <section className="container mx-auto grid h-fit w-screen lg:grid-cols-2 lg:px-15">
        <div className="flex h-[full] flex-col justify-center gap-5 px-10 py-20 md:w-[85%]">
          <h1 className="text-center font-[Borel] text-4xl text-[#323F51] md:text-left md:text-[36px]">
            Tim Dokter Hewan Berpengalaman yang Siap Merawat Hewan Kesayangan
            Anda
          </h1>
          <p className="md:text-md text-center text-sm leading-6 md:text-left md:leading-7 lg:text-sm lg:leading-7">
            Dengan pengalaman lebih dari 20 tahun dalam dunia kedokteran hewan,
            tim dokter kami memahami bahwa setiap hewan peliharaan adalah bagian
            tak terpisahkan dari keluarga Anda. Kami menggabungkan keahlian
            medis terkini dengan pendekatan yang lembut dan penuh perhatian,
            memastikan setiap pasien mendapatkan perawatan terbaik. Dari
            pemeriksaan rutin hingga penanganan darurat, kami selalu siap
            memberikan layanan kesehatan yang berkualitas untuk sahabat berbulu
            Anda.
          </p>
        </div>
        <div className="flex flex-col items-end h-full justify-end p-10">
          <img src={illust} alt="" loading="lazy" className="w-[80%]" />
        </div>
      </section>
    </div>
  );
}
