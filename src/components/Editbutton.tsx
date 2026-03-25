import { Link, useParams } from "react-router";

export default function Editbutton() {
const { id }: any = useParams();

  return (
    <div>
      <Link to={`/editblog/${id}`}>
        <button className="h-fit rounded-2xl border-4 border-[#5E1D3F] bg-[#A83271] px-5 py-2 font-bold text-white drop-shadow-[0px_8px_0px_rgba(94,29,63,1)] transition-all active:translate-y-2 active:drop-shadow-none">
          Edit Article
        </button>
      </Link>
    </div>
  );
}
