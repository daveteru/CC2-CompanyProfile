import Backgroundlines from "../svg/Backgroundlines";
import vaccineicon from "../assets/vaccine_icon.png";
import inpatient_icon from "../assets/inpatient_icon.png";
import general_icon from "../assets/general_icon.png";
import specialist_icon from "../assets/specialist_icon.png";

export default function Home_USP() {
  return (
    <div className="h-fit justify-center flex flex-col relative mt-30 items-center">
      <h1 className="font-[Borel] text-[24px] md:text-[32px] relative z-5">Jasa Perawatan Kami</h1>
      <div className="container mx-auto relative z-5 h-fit flex flex-col lg:flex-row px-10 py-10 text-center  items-center justify-center ">
        <div className="w-100 p-10 h-full flex flex-col gap-5 mb-20 md:mb-0">
          <div className="h-40 p-5 flex items-center justify-center">
            <img src={vaccineicon} alt=""  className=" mb-10"/>
          </div>
          <h1 className="font-[Borel] text-3xl">Vaccination</h1>
          <p>
            Vaksinasi dapat mencegah terjadinya tingkat kesakitan dan kematian
            yang tinggi pada hewan kesayangan akibat terserang infeksi virus
            mapun bakteri
          </p>
        </div>
        <div className="w-100 p-10 h-full flex flex-col gap-5 mb-20 md:mb-0">
          <div className="h-40 w-full  p-5 flex items-center justify-center">
            <img src={inpatient_icon} alt="" className="w-[70%] mb-10" />
          </div>
          <h1 className="font-[Borel] text-3xl">Inpatient Care</h1>
          <p>
            Kami memiliki ruang rawat inap untuk hewan kesayangan anda yang
            memadai, dengan perawatan yang intensif oleh dokter dan tim
            paramedis
          </p>
        </div>
        <div className="w-100 p-10 h-full flex flex-col gap-5 mb-20 md:mb-0">
          <div className="h-40 w-full  p-5 flex items-center justify-center">
            <img src={general_icon} alt=""className="w-[90%] mb-10" />
          </div>
          <h1 className="font-[Borel] text-3xl">General Clinic</h1>
          <p>
            Kami melakukan pemeriksaan secara umum, tindakan observasi,
            diagnosis, pengobatan, rehabilitasi medik, serta pelayanan kepada
            hewan kesayangan anda
          </p>
        </div>
        <div className="w-100 p-10 h-full flex flex-col gap-5 mb-20 md:mb-0 ">
          <div className="h-40 w-full  p-5 flex items-center justify-center">
            <img src={specialist_icon} alt="" className="w-[90%] mb-10" />
          </div>
          <h1 className="font-[Borel] text-3xl">Specialist Clinic</h1>
          <p>
            kami menyediakan layanan khusus untuk penyakit tertentu secara
            spesifik dengan dokter-dokter yang sudah berpengalaman di bidang
            khusus
          </p>
        </div>
      </div>
      <Backgroundlines />
    </div>
  );
}
