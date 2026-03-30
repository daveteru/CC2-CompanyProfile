import { useEffect } from "react";
import Contact_whatsapp from "../components/Contact_whatsapp";
import Home_hero from "./Home_hero";
import Home_overview from "./Home_overview";
import Home_story from "./Home_story";
import Home_testimonial from "./Home_testimonial";
import Home_USP from "./Home_USP";
import Map from "../components/Map";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Home_hero />
      <Home_story />
      <Home_USP />
      <Home_overview />
      <Home_testimonial />
      <Contact_whatsapp />
      <Map/>
    </>
  );
}
