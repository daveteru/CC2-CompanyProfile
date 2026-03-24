import { axiosInstance } from "../lib/axios";
import { useEditBlogStore } from "../store/store";

export default function Deleteconfirmbutton() {
  const { selectedIds, clearSelected, setCancelDelete } = useEditBlogStore();

  async function confirmdelete() {
    if (selectedIds.length === 0) return alert("No Blogs are Selected");

    try {
      await Promise.all(
        selectedIds.map((id) => axiosInstance.delete(`/data/Blogcucu/${id}`))
      );
      clearSelected();
      setCancelDelete();
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete blogs:", error);
    }
  }

  return (
    <div>
      <button
        onClick={confirmdelete}
        className="h-10 px-10 rounded-2xl bg-red-500 font-bold drop-shadow-[0px_8px_0px_rgba(94,29,63,1)] border-4 border-[#5E1D3F] text-white active:translate-y-2 active:drop-shadow-none transition-all"
      >
        Confirm Delete ({selectedIds.length})
      </button>
    </div>
  );
}
