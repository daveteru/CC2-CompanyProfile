import Blogs_content from "./Blogs_content";
import Blogs_hero from "./Blogs_hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

export default function Blogs() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/data/Blogcucu");
        setBlogs(res.data);
      } catch (err) {
        alert("data failed to be fetched");
      } finally {
        setLoading(false);
      }
    };
    fetchData();

  }, []);

  return (
    <div>
      <Navbar />
      <Blogs_hero />
      <Blogs_content blogs={blogs} loading={loading} />
      <Footer  />
    </div>
  );
}
