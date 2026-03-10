import React from "react";

export default function Blogcard() {
  return (
    <div className="blogcardhover">
      <hr className="mb-5 border-[2px] border-[#A83271]"></hr>
      <h1 className="font-[Borel] text-3xl ">Title Example Lorem, ipsum. </h1>
      <hr className=" border-[2px] border-[#A83271]"></hr>
      <div className="w-full h-100 bg-gray-200 my-5"> test</div>
     <div className="font-[inter]">
              <hr className="border-[2px] border-[#A83271]"></hr>
          <div className="flex justify-between my-2">
            <p>Author</p>
            <p>Date of Blog</p>
          </div>
                <hr className="mb-5 border-[2px] border-[#A83271]"></hr>
          <p className="text-sm my-5">
            content Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Tempora doloribus odit vel obcaecati molestiae inventore, itaque
            distinctio dignissimos maiores sequi adipisci sint impedit culpa,
            deserunt nobis dolores repudiandae eligendi a fuga? Vel esse error quo
            ratione, amet blanditiis iure aliquam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Labore commodi quaerat, perferendis
                  </p>
                  <hr className="mb-5 border-[2px] border-[#A83271]"></hr>
     </div>
    </div>
  );
}
