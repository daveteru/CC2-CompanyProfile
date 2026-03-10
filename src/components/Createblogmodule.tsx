import React, { useState } from "react";

export default function Createblogmodule() {
  const [body, setBody] = useState("");

  return (
    <div className="w-screen h-screen flex justify-center container mx-auto">
      <div className="w-200 h-200 my-20">
        <fieldset className="flex flex-col">
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="text-xl font-[Borel]">
              Article Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded-md h-10 p-5"
            ></input>
          </div>
          <div className="flex gap-5">
            <div className="flex  w-full gap-2 items-center ">
              <label
                htmlFor="pass"
                className="text-xl translate-y-2 font-[Borel]"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                className="border rounded-md w-full h-10 p-5"
              ></input>
            </div>
            <div className="flex w-full gap-2 items-center ">
              <label
                htmlFor="pass"
                className="text-xl translate-y-2 font-[Borel]"
              >
                {" "}
                Date
              </label>
              <input
                type="Date"
                id="author"
                name="author"
                className="border rounded-md h-10  w-full p-5"
              ></input>
            </div>
          </div>
          <label htmlFor="pass" className="text-xl translate-y-2  mt-5 font-[Borel]">
            Body Text
          </label>
          <textarea
            id="author"
            name="author"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border rounded-md w-full h-120 p-5 overflow-y-scroll resize-none"
          ></textarea>
 <div className="flex gap-5">
              <button className="h-10 w-50 rounded-2xl mt-5 text-white bg-red-400 drop-shadow-[0px_8px_0px_rgba(236,38,38,1)] active:translate-y-2 active:drop-shadow-none ">
                Submit{" "}
              </button>
              <button
                onClick={() => setBody("")}
                className="h-10 w-50 rounded-2xl mt-5 text-white bg-red-400 drop-shadow-[0px_8px_0px_rgba(236,38,38,1)] active:translate-y-2 active:drop-shadow-none "
              >
                Clear{" "}
              </button>
 </div>
        </fieldset>
      </div>
    </div>
  );
}
