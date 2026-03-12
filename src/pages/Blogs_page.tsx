import { Link, Links, useParams } from "react-router";
import Blogs_hero from "./Blogs_hero";
import Button1 from "../components/Button1";
import Createblogmodule from "../components/Createblogmodule";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Blogcard from "../components/Blogcard";
import { useEffect, useState } from "react";
import Backendless from "backendless";

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

  // const [blogdata,setBlogdata]=useState([])

  return (
    <div className="bg-red-400">
      <Navbar />
      <Blogs_hero />
      <div className="bg-red-400 py-15 h-fit flex justify-center"> </div>
      <div className="w-screen bg-white h-fit rounded-t-[100px] md:rounded-t-[150px]">
        <div className="w-full  h-fit container mx-auto py-20 px-10  lg:px-75 font-[inter]">
          <div>
            <h1 className="text-7xl mt-10">{blogs.title}</h1>
            <hr className="my-5 border border-red-400"></hr>
            <div className="flex justify-between font-bold">
              <p>{blogs.author}</p>
              <p className="italic">{blogs.created}</p>
            </div>
            <div className="w-full h-150 bg-gray-400 flex justify-center items-center my-5">
              IMAGE
            </div>
            <div className="mb-10 text-md leading-8">
              <div>
                <h1 className="font-[Inter] italic text-2xl sm:text-5xl leading-14 mb-5">
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
