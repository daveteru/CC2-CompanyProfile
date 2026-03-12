import Blogs_content from "./Blogs_content";
import Blogs_hero from "./Blogs_hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Backendless from "backendless";

export default function Blogs() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await Backendless.Data.of("Blogcucu").find();
        setBlogs(allData);
        console.log(allData);
      } catch (err) {
        alert("data failed to be fetched");
      }
    };
    fetchData();

  }, []);

  return (
    <div>
      <Navbar />
      <Blogs_hero />
      <Blogs_content blogs={blogs} />
      <Footer  />
    </div>
  );
}
