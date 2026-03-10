import Aboutus_culture from "./Aboutus_culture";
import Aboutus_gallery from "./Aboutus_gallery";
import Aboutus_hero from "./Aboutus_hero";
import Aboutus_story from "./Aboutus_story";
import Aboutus_team from "./Aboutus_team";
import Contact_whatsapp from "./Contact_whatsapp";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Aboutus() {
  return (
    <div>
      <Navbar/>
      <Aboutus_hero/>
      <Aboutus_story/>
      <Aboutus_team/>
      <Aboutus_culture/>
      <Aboutus_gallery/>
      <Contact_whatsapp/>
      <Footer/>
    </div>
  );
}
