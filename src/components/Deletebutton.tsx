import { useEditBlogStore } from "@/store/store";

export default function Deletebutton() {
  // const { name , isLogin , level } = useAuth()
  const { setIsDelete, isDelete } = useEditBlogStore();

  return (
    <div>
      <button className={`h-fit px-5 py-2 rounded-2xl ${!isDelete ? "bg-[#A83271]" : "bg-[#cdb3c1]"} font-bold drop-shadow-[0px_8px_0px_rgba(94,29,63,1)] border-4 border-[#5E1D3F] text-white  ${!isDelete ? "transition-all active:translate-y-2 active:drop-shadow-none" : ""}`}
      onClick={!isDelete? ()=>setIsDelete() : undefined }>
        Delete Article
      </button>
    </div>
  );
}
