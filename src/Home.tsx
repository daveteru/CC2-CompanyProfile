import Contact_whatsapp from "./Contact_whatsapp";
import Footer from "./Footer";
import Home_hero from "./Home_hero";
import Home_overview from "./Home_overview";
import Home_story from "./Home_story";
import Home_testimonial from "./Home_testimonial";
import Home_USP from "./Home_USP";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Home_hero/>
      <Home_story/>
      <Home_USP/>
      <Home_overview/>
      <Home_testimonial/>
      <Contact_whatsapp/>
      <Footer/>
    </div>
  );
}
