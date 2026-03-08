export default function Footer() {
  return (
<div className="w-screen bg-[#A83271] ">
        <div className="flex justify-between container mx-auto w-screen h-85 bg-[#A83271] p-10">
          <div className="flex gap-10">
            <img src="src/assets/logo_white.png" alt="" className="h-[50px]" />
            <p className="text-white font-medium w-100">
              Ruko, Jl. Sunter Permai Raya No.2 Tahap 3, RT.2/RW.12, Papanggo, Kec.
              Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14340
            </p>
          </div>
          <ul className="text-white flex flex-col gap-5">
            <li>KLINIK SUNTER</li>
            <li>KLINIK GREEN GARDEN</li>
            <li>KLINIK ALAM SUTERA</li>
          </ul>
        </div>
</div>
  );
}
