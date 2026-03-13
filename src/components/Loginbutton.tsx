import { Link } from "react-router";
import { useAuth } from "../store/store";

export default function Loginbutton() {
const { name , isLogin } = useAuth()

  return <div>
<Link to={isLogin ? "/" : "/blogs_admin_login"}>
        <button className="h-10 w-fit px-2 lg:px-10 rounded-2xl bg-[#A83271] cursor-pointer font-bold drop-shadow-[0px_8px_0px_rgba(94,29,63,1)] border-4 border-[#5E1D3F] text-white active:translate-y-2 active:drop-shadow-none transition-all">
            {isLogin? `Welcome,${name}` : "LOGIN"}</button>
    
</Link>  </div>;
}
