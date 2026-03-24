import video from "../assets/test_video_compressed_2.mp4"

export default function Home_hero() {
  const gotowhatsapp = ()=>{ window.location.href = 'http://wa.me/+628811059617'}

  return (
    <div className=" bg-[#B0E4E8] herogradient">
      <header className="relative w-screen h-[95vh] rounded-b-[150px]  overflow-hidden">
        <div className="w-full h-full flex justify-end flex-col gap-3 px-10 container mx-auto py-10 ">
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop preload="auto" playsInline>
              <source src={video} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            {/* <img
          className="absolute inset-0 w-full h-full object-cover"
          src="src/assets/hero1.webp"
          alt="Hero Background"
        /> */}
          <h1 className="font-[Borel]  text-4xl md:text-7xl md:text-left text-center md:w-[600px]  md:leading-22 text-white z-2">
            We treat your pet like family.
          </h1>
          <div className="flex flex-col-reverse md:flex-row gap-6 items-center z-2 lg:mb-10">
            <button className="w-fit h-fit p-4 bg-[#A83271] text-[12px] md:text-xl rounded-full text-white hover:bg-white hover:text-[#A83271] transition"
            onClick={gotowhatsapp}>
              BOOK AN APPOINTMENT
            </button>
            <p className="md:text-left text-center md:w-[40%] lg:w-[25%] text-white text-[12px] ">
              PDHB drh. Cucu Kartini S. dkk memiliki dokter hewan dan staff yang
              berpengalaman serta fasilitas pelayanan medis yang lengkap. Kami
              memerikan layanan terbaik untuk hewan kesayangan anda
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}
