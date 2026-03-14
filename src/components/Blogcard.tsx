import { Link } from "react-router";

interface blogcardprop {
  blogid: number;
  title?: string;
  author?: string;
  bodytext?: string;
  created?: string ;
  quote?: string;
  imgurl?:string;
}

export default function Blogcard({
  blogid,
  title,
  author,
  created,
  quote,
  imgurl,
}: blogcardprop) {
  function formatedate(timestamp: any) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <Link to={`/blogspage/${blogid}`}>
      <div>
        <div className="blogcardhover">
          <hr className="mb-5 border-[2px] border-[#A83271]"></hr>
          <h1 className="font-[Borel] text-3xl w-full h-15">{title}</h1>
          <hr className=" border-[2px] border-[#A83271]"></hr>
          <div className="w-full h-70 bg-gray-200 my-5">
            <img src={imgurl} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="font-[inter]">
            <hr className="border-[2px] border-[#A83271]"></hr>
            <div className="flex justify-between my-2">
              <p>{author}</p>
              <p>{formatedate(created)}</p>
            </div>
            <hr className="mb-5 border-[2px] border-[#A83271]"></hr>
            <p className="text-sm my-5 line-clamp-3">{quote}</p>
            <hr className=" border-[2px] border-[#A83271]"></hr>
          </div>
        </div>
        <hr className="md:opacity-0"></hr>
      </div>
    </Link>
  );
}
