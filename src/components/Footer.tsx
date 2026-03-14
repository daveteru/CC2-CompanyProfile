import logo from "../assets/logo_white.png";
import { useAuth } from "../store/store";

export default function Footer() {

  const { logout } = useAuth();

  return (
    <div className="w-screen bg-[#A83271] ">
      <div className="flex container mx-auto w-screen h-70 bg-[#A83271]">
        <div className="flex w-screen p-10 justify-between">
          <div className="flex flex-col gap-5 items-start">
            <img src={logo} alt="" className="h-10 object-contain" />
            <p className="text-white w-40 text-sm sm:font-medium sm:w-120">
              Ruko, Jl. Sunter Permai Raya No.2 Tahap 3, RT.2/RW.12, Papanggo,
              Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14340
            </p>
          </div>
          <ul className="text-white text-[12px] sm:text-[16px] flex flex-col gap-5 cursor-pointer">
            <li className="hover:underline">KLINIK SUNTER</li>
            <li className="hover:underline">KLINIK GREEN GARDEN</li>
            <li className="hover:underline">KLINIK ALAM SUTERA</li>
              {" "}
              <li className="hover:underline" onClick={()=>{alert("successfully logged out"),logout()}}>Log Out</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
