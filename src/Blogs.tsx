import Blogs_content from "./Blogs_content";
import Blogs_hero from "./Blogs_hero";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Blogs() {
  return (
    <div>
      <Navbar />
      <Blogs_hero/>
      <Blogs_content/>
      <Footer />
    </div>
  );
}
