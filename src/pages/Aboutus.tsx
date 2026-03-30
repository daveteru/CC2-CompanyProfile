import { useEffect } from "react";
import Aboutus_culture from "./Aboutus_culture";
import Aboutus_gallery from "./Aboutus_gallery";
import Aboutus_hero from "./Aboutus_hero";
import Aboutus_story from "./Aboutus_story";
import Aboutus_team from "./Aboutus_team";

export default function Aboutus() {
  useEffect(()=>{
    window.scrollTo({ top: 0 });
  },[]);


  return (
    <>
      <Aboutus_hero/>
      <Aboutus_story/>
      <Aboutus_team/>
      <Aboutus_culture/>
      <Aboutus_gallery/>
    </>
  );
}
