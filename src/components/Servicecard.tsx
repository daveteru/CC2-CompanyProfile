interface servicecardprops {
  title: string;
  desc: string;
  imgurl: string;
}

export default function Servicecard({ title, desc, imgurl }: servicecardprops) {
  return (
    <div>
      <div className="w-full h-190 bg-gray-50 font-[inter]">
        <div className="h-[60%] bg-gray-100 overflow-hidden ">
          <img src={imgurl} alt="" className="object-cover w-full h-full object-center" />
        </div>
        <div className="px-15 py-10 flex flex-col gap-5">
          <h1 className="text-3xl">{title}</h1>
          <p className="text-md">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
