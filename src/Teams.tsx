import Footer from "./Footer";
import Navbar from "./Navbar";
import Teams_employee from "./Teams_employee";
import Teams_hero from "./Teams_hero";
import Teams_story from "./Teams_story";

export default function Teams() {
  return (
    <div>
      <Navbar />
      <Teams_hero />
      <Teams_story />
      <Teams_employee/>
      <Footer />
    </div>
  );
}
