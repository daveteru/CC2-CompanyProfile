import logo from "../assets/logo_white.png";
import { useAuth } from "../store/store";

export default function Footer() {

  let {isLogin , logout} = useAuth();

  return (
    <div className="w-screen bg-[#A83271] ">
      <div className="flex justify-between container mx-auto w-screen h-70 bg-[#A83271] p-10">
        <div className="flex gap-10">
          <img src={logo} alt="" className="h-[50px]" />
          <p className="text-white font-medium w-120">
            Ruko, Jl. Sunter Permai Raya No.2 Tahap 3, RT.2/RW.12, Papanggo,
            Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14340
          </p>
        </div>
        <ul className="text-white flex flex-col gap-5 cursor-pointer">
          <li className="hover:underline">KLINIK SUNTER</li>
          <li className="hover:underline">KLINIK GREEN GARDEN</li>
          <li className="hover:underline">KLINIK ALAM SUTERA</li>
            {" "}
            <li className="hover:underline" onClick={()=>{alert("successfully logged out"),logout()}}>Log Out</li>
        </ul>
      </div>
    </div>
  );
}
