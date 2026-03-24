import { useEditBlogStore } from "@/store/store";

export default function Deletebutton() {
  // const { name , isLogin , level } = useAuth()
  const { setIsDelete } = useEditBlogStore();

  return (
    <div>
      <button className="h-10 px-10 rounded-2xl bg-[#A83271] font-bold drop-shadow-[0px_8px_0px_rgba(94,29,63,1)] border-4 border-[#5E1D3F] text-white active:translate-y-2 active:drop-shadow-none transition-all"
      onClick={setIsDelete}>
        Delete Article
      </button>
    </div>
  );
}
