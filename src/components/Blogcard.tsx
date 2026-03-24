import { Link } from "react-router";
import { useEditBlogStore } from "../store/store";

interface blogcardprop {
  blogid: number;
  title?: string;
  author?: string;
  bodytext?: string;
  created?: string;
  quote?: string;
  imgurl?: string;
}

export default function Blogcard({
  blogid,
  title,
  author,
  created,
  quote,
  imgurl,
}: blogcardprop) {
  const { isDelete, selectedIds, toggleSelect } = useEditBlogStore();
  const selected = selectedIds.includes(blogid);

  function formatedate(timestamp: any) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }


  
  return (
    <Link
      to={isDelete ? "#" : `/blogspage/${blogid}`}
      onClick={(e) => isDelete && e.preventDefault()}
    >
      <div
        className={`min-h-140 p-2 ${isDelete && selected ? "shadow-[0px_0px_23px_1px_#ff6161] rounded-2xl" : ""}`}
        onClick={() => {
          isDelete && toggleSelect(blogid)
          console.log(selectedIds);
        }}
      >
        <div className="blogcardhover">
          <hr className="mb-5 border-[2px] border-[#A83271]"></hr>
          <h1 className="font-[Borel] text-3xl text-wrap w-full h-15">
            {title}
          </h1>
          <hr className=" border-[2px] border-[#A83271]"></hr>
          <div className="w-full h-70 bg-gray-200 my-5">
            <img
              src={imgurl}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="font-[inter]">
            <hr className="border-[2px] border-[#A83271]"></hr>
            <div className="flex justify-between my-2">
              <p>{author}</p>
              <p>{formatedate(created)}</p>
            </div>
            <hr className="mb-5 border-[2px] border-[#A83271]"></hr>
            <p className="text-sm my-10 line-clamp-3 h-15">{quote}</p>
            <hr className=" border-[2px] border-[#A83271]"></hr>
          </div>
        </div>
        <hr className="md:opacity-0"></hr>
      </div>
    </Link>
  );
}
