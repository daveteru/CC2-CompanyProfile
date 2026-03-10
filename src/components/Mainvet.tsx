import Button1 from "./Button1";


interface mainvetprops {
  name: string;
  date: string; //working years
  special: string; //specialization
  desc: string; //description
  imgurl? : string
}

export default function Mainvet({ name, date, special, desc , imgurl}: mainvetprops) {
  return (
    <div>
      {" "}
      <div className="bg-[#F0D6F6] w-100 h-150 rounded-3xl overflow-hidden flex flex-col  text-[#323F51]">
          <div className="w-full h-120  bg-amber-300 overflow-hidden">
            <img src={imgurl} alt="" className="object-cover w-full h-full object-top" />
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
            <Button1 label="Profile" color="#A83271" />
          </div>
      </div>
    </div>
  );
}
