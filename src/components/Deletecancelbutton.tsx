import { useEditBlogStore } from "@/store/store";

export default function Deletecancelbutton() {
  // const { name , isLogin , level } = useAuth()
  const {setCancelDelete} = useEditBlogStore()

  return (
    <div>
      <button className="h-10 px-5 rounded-2xl bg-amber-300 font-bold drop-shadow-[0px_8px_0px_rgba(94,29,63,1)] border-4 border-[#5E1D3F] text-black active:translate-y-2 active:drop-shadow-none transition-all"
      onClick={setCancelDelete}>
        Cancel
      </button>
    </div>
  );
}
