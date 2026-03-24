import { useEditBlogStore } from "@/store/store";
import Deletebutton from "./Deletebutton";
import Deleteconfirmbutton from "./Deleteconfirmbutton";
import Editbutton from "./Editbutton";
import Deletecancelbutton from "./Deletecancelbutton";

export default function Blogeditor() {
  const {isDelete} = useEditBlogStore();


  return (
    <div className="container mx-auto px-40">
      <div className="my-20  p-20 rounded-4xl bg-red-200 flex gap-10 items-center">
        <h2 className="font-[Borel] text-2xl text-red-500 translate-y-3">
          Admin Panel
        </h2>
        <Editbutton />
        <div className="flex flex-col gap-5 items-center">
          {!isDelete? <Deletebutton /> :""}
          {isDelete? <Deleteconfirmbutton /> :""}
          {isDelete? <Deletecancelbutton   /> :""}
        </div>
      </div>
    </div>
  );
}
