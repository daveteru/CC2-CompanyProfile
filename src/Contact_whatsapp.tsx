import highlight from "./assets/button_highlights.png";

export default function Contact_whatsapp() {
  return (
    <div className="relative h-100 w-screen box-border px-20 py-5 flex justify-center items-center ">
      <button className="relative z-10 w-fit h-fit py-10 px-8 bg-[#A83271] rounded-full text-white hover:bg-[#FFC738] hover:text-[#A83271] transition">
        <span className="font-bold">CONTACT OUR WHATSAPP</span>{" "}
      </button>
      <img className="absolute z-0" src={highlight} alt="" />
    </div>
  );
}
