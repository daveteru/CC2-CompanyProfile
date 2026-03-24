import aboutillust from "../assets/about_illustration.png";

export default function Aboutus_story() {
  return (
    <div className="w-screen h-fit bg-[#F0D6F6]">
      <section className="w-screen h-fit grid lg:grid-cols-2 container mx-auto overflow-clip">
        <div className="w-full h-full py-20 px-15">
          <h1 className="font-[Borel] text-4xl md:text-[48px] text-[#323F51]">
            Inspirasi di Balik Kemajuan Kedokteran Hewan Indonesia
          </h1>
          <p className="leading-8">
            drh. Cucu Kartini Sajuthi, lahir di Cikampek tahun 1959, adalah
            sosok inspiratif yang telah mengabdikan dirinya dalam bidang
            kedokteran hewan sudah cukup lama. Sebagai Komisaris Group PDHB dan
            dokter hewan praktisi di Klinik PDHB 24 Jam Drh Cucu Kartini dkk
            sejak tahun 1983, ia telah menjadi salah satu figur terkemuka dalam
            komunitas kedokteran hewan di Indonesia.
          </p>
        </div>
        <div className="flex flex-col items-end justify-end p-10">

        <img src={aboutillust} alt="" loading="lazy" />
        </div>
      </section>
    </div>
  );
}
