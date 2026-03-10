import Button1 from "./Button1";

interface cardprops {
  name: string;
  petname: string; //working years
  breed: string; //specialization
  age: string; //specialization
  desc: string; //description
  tindakan:string;
  img?: string,
}

export default function Card({ name, petname, breed,age, desc, tindakan,img }: cardprops) {
  return (
    <div className="items-center justify-center flex">
      {" "}
      <div className="bg-[#FFFFFF] w-100 h-150 rounded-3xl overflow-hidden  flex flex-col  text-[#323F51]">
          <div className="w-full h-120  bg-amber-300 overflow-hidden ">
            <img src={img} alt="" className="object-cover object-center w-full h-full" />
          </div>
          <div className="px-8 flex flex-col justify-between pb-8 h-full">
            <div>
                <h2 className="font-[inter] text-2xl mt-5 mb-1">{name}</h2>
                <hr className="my-5"></hr>
                <h3>{petname} - {breed} {age}</h3>
                <p>{tindakan}</p>
                <p className="text-sm mt-5">{desc}</p>
            </div>
          </div>
      </div>
    </div>
  );
}
