import Home_hero from "./Home_hero";
import Home_story from "./Home_story";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Home_hero/>
      <Home_story/>
    </div>
  );
}
