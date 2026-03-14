import Backendless from "backendless";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Button1 from "../components/Button1";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Blogs_hero from "./Blogs_hero";

export default function Blogs_page() {
  const { id }: any = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    const fetchData = async () => {
      const allData = await Backendless.Data.of("Blogcucu").findById(id);
      setblogs(allData);
    };
    fetchData();
  }, [id]);

  const [blogs, setblogs] = useState<any>({});

  function formatdate(timestamp: any) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }


  return (
    <div className="bg-red-400">
      <Navbar />
      <Blogs_hero />
      <div className="bg-red-400 py-15 h-fit flex justify-center"> </div>
      <div className="w-screen bg-white h-fit rounded-t-[100px] md:rounded-t-[150px]">
        <div className="w-full  h-fit container mx-auto py-20 px-10  lg:px-75 font-[inter]">
          <div>
            <h1 className=" text-5xl md:text-7xl mt-10 w-full">{blogs.title}</h1>
            <hr className="my-5 border border-red-400"></hr>
            <div className="flex justify-between font-bold">
              <p>{blogs.author}</p>
              <div className="italic">{formatdate(blogs.created)}</div>
            </div>
            <div className="w-full h-150 bg-gray-400 flex justify-center items-center my-5">
                          <img src={blogs.thumbnail} alt="" className="w-full h-full object-cover" />

            </div>
            <div className="mb-10 text-md leading-8">
              <div>
                <h1 className="font-[Inter] italic text-2xl sm:text-5xl md:leading-14 mb-5">
                  {blogs.quote}
                </h1>
                <p>{blogs.bodytext}</p>
              </div>
            </div>
            <Link to="/blogs">
              {" "}
              <Button1 label="Back to Index" color="#A83271" />
            </Link>
            <div className="grid grid-cols-2 gap-5 mt-20">
              {" "}
              {/* <Blogcard /> */}
              {/* <Blogcard /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
