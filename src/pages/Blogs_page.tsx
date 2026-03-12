import { Link, Links } from "react-router";
import Blogs_hero from "./Blogs_hero";
import Button1 from "../components/Button1";
import Createblogmodule from "../components/Createblogmodule";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Blogcard from "../components/Blogcard";
import { useEffect } from "react";

export default function Blogs_page() {
      useEffect(()=>{
        window.scrollTo({ top: 0 });
      },[]);

      
  return (
    <div className="bg-red-400">
      <Navbar />
      <Blogs_hero />
      <div className="bg-red-400 py-15 h-fit flex justify-center"> </div>
      <div className="w-screen bg-white h-fit rounded-t-[150px]">
        <div className="w-full  h-fit container mx-auto py-20 px-75 font-[inter]">
          <div>
            <h1 className="text-7xl mt-10">
              {" "}
              Blog Title Lorem ipsum dolort.
            </h1>
            <hr className="my-5 border border-red-400"></hr>
            <div className="flex justify-between font-bold">
              <p>Author Name Lorem</p>
              <p className="italic">Published Date : Lorem3 </p>
            </div>
            <div className="w-full h-150 bg-gray-400 flex justify-center items-center my-5">
              IMAGE
            </div>
            <div className="mb-10 text-md leading-8">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur illo tenetur eos officiis recusandae fugiat commodi
                nesciunt sapiente modi, eveniet ipsa culpa. Ipsa iure corrupti
                odit nam, itaque labore cum velit iusto error dolorem ducimus
                assumenda! Quos dolorem enim quis saepe veritatis aliquid nemo,
                in doloribus nihil perspiciatis. Maiores minima neque assumenda
                vitae doloremque dolores fuga quis atque nihil magnam dolore
                eaque, enim provident quasi sapiente sint itaque sequi natus.
                Quo repellendus, voluptas nesciunt doloremque, modi neque sed,
                dolore consequuntur cumque in minus porro magni nemo dolores
                fuga. Illum minima enim, laudantium iure nesciunt ipsa
                consectetur! Laboriosam non eos, velit, voluptate harum ab dicta
                maiores, quos fugit tempora perferendis ipsum tempore ut!
                Reprehenderit tenetur velit accusantium, obcaecati, delectus
                perferendis soluta dignissimos iusto aliquid similique cum!
                Consequatur, quas consectetur atque suscipit ut et distinctio
                iusto iure laborum tempora amet assumenda omnis magni? Saepe
                perferendis enim itaque dolore, vel commodi sapiente fuga!
                <br></br>
                <br></br>
                <h1 className="font-[Inter] italic text-5xl leading-14">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur in minus earum fugit quod nobis?
                </h1>
                <br></br>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur illo tenetur eos officiis recusandae fugiat commodi
                nesciunt sapiente modi, eveniet ipsa culpa. Ipsa iure corrupti
                odit nam, itaque labore cum velit iusto error dolorem ducimus
                assumenda! Quos dolorem enim quis saepe veritatis aliquid nemo,
                in doloribus nihil perspiciatis. Maiores minima neque assumenda
                vitae doloremque dolores fuga quis atque nihil magnam dolore
                eaque, enim provident quasi sapiente sint itaque sequi natus.
                Quo repellendus, voluptas nesciunt doloremque, modi neque sed,
                dolore consequuntur cumque in minus porro magni nemo dolores
                fuga. Illum minima enim, laudantium iure nesciunt ipsa
                consectetur! Laboriosam non eos, velit, voluptate harum ab dicta
                maiores, quos fugit tempora perferendis ipsum tempore ut!
                Reprehenderit tenetur velit accusantium, obcaecati, delectus
                perferendis soluta dignissimos iusto aliquid similique cum!
                Consequatur, quas consectetur atque suscipit ut et distinctio
                iusto iure laborum tempora amet assumenda omnis magni? Saepe
                perferendis enim itaque dolore, vel commodi sapiente fuga! Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                illo tenetur eos officiis recusandae fugiat commodi nesciunt
                sapiente modi, eveniet ipsa culpa. Ipsa iure corrupti odit nam,
                itaque labore cum velit iusto error dolorem ducimus assumenda!
                Quos dolorem enim quis saepe veritatis aliquid nemo, in
                doloribus nihil perspiciatis. Maiores minima neque assumenda
                vitae doloremque dolores fuga quis atque nihil magnam dolore
                eaque, enim provident quasi sapiente sint itaque sequi natus.
                Quo repellendus, voluptas nesciunt doloremque, modi neque sed,
                dolore consequuntur cumque in minus porro magni nemo dolores
                fuga. Illum minima enim, laudantium iure nesciunt ipsa
                consectetur! Laboriosam non eos, velit, voluptate harum ab dicta
                maiores, quos fugit tempora perferendis ipsum tempore ut!
                Reprehenderit tenetur velit accusantium, obcaecati, delectus
                perferendis soluta dignissimos iusto aliquid similique cum!
                Consequatur, quas consectetur atque suscipit ut et distinctio
                iusto iure laborum tempora amet assumenda omnis magni? Saepe
                perferendis enim itaque dolore, vel commodi sapiente fuga!
              </p>
            </div>
            <Link to="/blogs">
              {" "}
              <Button1 label="Back to Index" color="#A83271" />
            </Link>
            <div className="grid grid-cols-2 gap-5 mt-20">
              {" "}
              <Blogcard />
              <Blogcard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
