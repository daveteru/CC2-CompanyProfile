export default function Home_hero() {
  return (
    <div className="bg-linear-to-r from-[#B0E4E8] to-[#FFC738]">
      <header className="relative w-screen h-[95vh] rounded-b-[75px]  overflow-hidden">
        <div className="w-full h-full flex justify-end flex-col  gap-3 px-20 py-10 ">
            <img
          className="absolute inset-0 w-full h-full object-cover"
          src="src/assets/hero1.webp"
          alt="Hero Background"
        />
          <h1 className="font-[Borel] text-7xl w-[600px] leading-22 text-white z-2">
            We treat your pet like family.
          </h1>
          <div className="flex gap-6 items-center z-2">
            <button className="w-fit h-fit p-4 bg-[#A83271] rounded-full text-white hover:bg-white hover:text-[#A83271] transition">
              BOOK AN APPOINTMENT
            </button>
            <p className="w-[25%] text-white text-[12px] ">
              PDHB drh. Cucu Kartini S. dkk memiliki dokter hewan dan staff yang
              berpengalaman serta fasilitas pelayanan medis yang lengkap. Kami
              memerikan layanan terbaik untuk hewan kesayangan anda
            </p>
          </div>
        </div>
        {/* 
       
        */}
      </header>
    </div>
  );
}
