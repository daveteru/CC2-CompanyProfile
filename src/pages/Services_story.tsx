import aboutillust from "../assets/service_illustration.png";

export default function Services_story() {
  return (
    <div className="w-screen h-fit bg-[#B0E4E8]">
      <section className="w-screen h-fit  lg:p-10 grid lg:grid-cols-2 container mx-auto overflow-clip">
        <div className="w-full h-full py-20 px-10">
          <h1 className="font-[Borel] text-[48px] text-[#323F51]">
            Perawatan Penuh Kasih Didukung Pengalaman Puluhan Tahun
          </h1>
          <p className="leading-8">
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
          <img src={aboutillust} alt="" />
        </div>
      </section>
    </div>
  );
}
