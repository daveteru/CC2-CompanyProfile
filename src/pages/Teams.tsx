import { useEffect } from "react";
import Teams_employee from "./Teams_employee";
import Teams_hero from "./Teams_hero";
import Teams_story from "./Teams_story";

export default function Teams() {
    useEffect(()=>{
      window.scrollTo({ top: 0 });
    },[]);
  return (
    <>
      <Teams_hero />
      <Teams_story />
      <Teams_employee/>
    </>
  );
}
