import Footer from "./Footer";
import Navbar from "./Navbar";
import Services_hero from "./Services_hero";
import Services_product from "./Services_product";
import Services_story from "./Services_story";
import Services_testi from "./Services_testi";

export default function Service() {
  return (
    <div>
      <Navbar />
      <Services_hero />
      <Services_story />
      <Services_product/>
      <Services_testi/>
      <Footer />
    </div>
  );
}
