import Backendless from "backendless";
import Blogcard from "../components/Blogcard";
import Blogeditor from "../components/Blogeditor";
import { useAuth } from "../store/store";
import { useEffect, useState } from "react";

export default function Blogs_content({blogs}: { blogs:any[]}) {
  const { role } = useAuth();
  

  return (
    <div className="w-screen">
      <div className="bg-red-400 py-25 h-full">
        <h1 className="font-[Borel] text-[44px] text-white text-center">
          Keeping up with the news.
        </h1>
        <p className="text-center text-white mt-2 mx-auto max-w-xl">
          Para profesional berdedikasi yang berkomitmen pada perawatan penuh
          kasih kenali sosok-sosok di balik layanan kesehatan terpercaya PDHB
          drh. Cucu.
        </p>
      </div>
      {role === "admin" ? <Blogeditor /> : ""}
      <div className="container grid grid-cols-3 gap-5 mx-auto my-20 px-25">
        {blogs.map((blog : any)=>(
          <Blogcard 
          blogid={blog.objectId}
          title={blog.title}
          author={blog.author}
          bodytext={blog.bodytext}
          created={blog.created}
          quote={blog.quote}
          />
        ))}
      </div>
    </div>
  );
}
