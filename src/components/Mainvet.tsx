interface mainvetprops {
  name: string;
  date: string; //working years
  special: string; //specialization
  desc: string; //description
  imgurl?: string;
}

export default function Mainvet({
  name,
  date,
  special,
  desc,
  imgurl,
}: mainvetprops) {
  return (
    <div>
      {" "}
      <div className="bg-[#F0D6F6] max-w-100 h-150 rounded-3xl overflow-hidden flex flex-col  text-[#323F51] drop-shadow-[0px_8px_0px_rgba(94,29,63,1)]   active:translate-y-2 active:drop-shadow-none transition-all">
        <div className="w-full h-120  bg-amber-300 overflow-hidden">
          <img
            src={imgurl}
            alt=""
            className="object-cover w-full h-full object-top pointer-events-none"
            loading="lazy"
          />
        </div>
        <div className="px-8 flex flex-col justify-between pb-8 h-full">
          <div>
            <h2 className="font-[inter] text-2xl mt-5 mb-1">{name}</h2>
            <div className="text-[12px] flex justify-between">
              <p className="italic">{date}</p>
              <h3>{special}</h3>
            </div>
            <hr className="my-5"></hr>
            <p className="text-sm">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
