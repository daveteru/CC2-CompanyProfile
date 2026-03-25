import { axiosInstance } from "../lib/axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Button1 from "../components/Button1";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Blogs_hero from "./Blogs_hero";
import Editbutton from "@/components/Editbutton";
import { useAuth } from "@/store/store";

export default function Blogs_page() {
  const { id }: any = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    const fetchData = async () => {
      const res = await axiosInstance.get(`/data/Blogcucu/${id}`);
      setblogs(res.data);
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
  
  const {role} = useAuth();
  return (
    <div className="bg-red-400">
      <Navbar />
      <Blogs_hero />
      <div className="flex h-fit justify-center bg-red-400 py-10"> </div>
      <div className="h-fit w-screen rounded-t-[100px] bg-white md:rounded-t-[150px]">
        <div className="container mx-auto h-fit w-full px-10 py-20 font-[inter] lg:px-50">
          <div>
            {role === "admin"? <Editbutton />:""}
            <h1 className="mt-10 w-full text-5xl md:text-7xl">{blogs.title}</h1>
            <hr className="my-5 border border-red-400"></hr>
            <div className="flex justify-between font-bold">
              <p>{blogs.author}</p>
              <div className="italic">{formatdate(blogs.created)}</div>
            </div>
            <div className="my-5 flex h-150 w-full items-center justify-center bg-gray-400">
              <img
                src={blogs.thumbnail}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-md mb-10 leading-8">
              <div>
                <h1 className="mb-5 font-[Inter] text-2xl italic sm:text-5xl md:leading-14">
                  {blogs.quote}
                </h1>
                <p>{blogs.bodytext}</p>
              </div>
            </div>
            <Link to="/blogs">
              {" "}
              <Button1 label="Back to Index" color="#A83271" />
            </Link>

            <div className="mt-20 grid grid-cols-2 gap-5">
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
