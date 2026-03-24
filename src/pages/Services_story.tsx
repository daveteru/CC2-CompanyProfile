import aboutillust from "../assets/service_illustration.png";

export default function Services_story() {
  return (
    <div className="h-fit w-screen lg:h-150 bg-[#B0E4E8]">
      <section className="container mx-auto grid h-full w-screen overflow-clip lg:grid-cols-2 lg:p-10">
        <div className="h-full w-full flex flex-col justify-start px-10 py-20">
          <h1 className="text-center font-[Borel] text-2xl text-[#323F51] md:text-left md:text-[36px]">
            Perawatan Penuh Kasih Didukung Pengalaman Puluhan Tahun
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
        <div className="flex flex-col items-end h-full justify-end p-10 ">
          <img src={aboutillust} alt="" loading="lazy" className="w-[80%]" />
        </div>
      </section>
    </div>
  );
}
