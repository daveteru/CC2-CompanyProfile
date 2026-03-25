import { Link } from "react-router";

export default function Createbutton() {
// const { name , isLogin , level } = useAuth()

  return <div>
  <Link to="/blogscreate">
            <button className="h-fit px-5 py-2 rounded-2xl bg-[#A83271] font-bold drop-shadow-[0px_8px_0px_rgba(94,29,63,1)] border-4 border-[#5E1D3F] text-white active:translate-y-2 active:drop-shadow-none transition-all">
                Create New Article</button>
  </Link>
     </div>;
}
