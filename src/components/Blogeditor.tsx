import { useEditBlogStore } from "@/store/store";
import Createbutton from "./Createbutton";
import Deletebutton from "./Deletebutton";
import Editbutton from "./Editbutton";

export default function Blogeditor() {
  const {isDelete} = useEditBlogStore();


  return (
    <div className="container mx-auto md:px-40">
      <div className="mt-20 mb-5 mx-5 md:mx-0 p-20 rounded-4xl bg-[#ae608b] flex flex-col lg:flex-row gap-5 items-center">
        <h2 className="font-[Borel] text-2xl text-white translate-y-3">
          Admin Panel
        </h2>
        <Createbutton />
        <div className="flex flex-col gap-5 items-center">
          <Deletebutton />
        </div>
      </div>
    </div>
  );
}


