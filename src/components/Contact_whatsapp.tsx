import highlight from "../assets/button_highlights.png";

export default function Contact_whatsapp() {
  const gotowhatsapp = ()=>{ window.location.href = 'http://wa.me/+628811059617'}

  return (
    <div className="relative h-100 w-screen box-border px-20 py-5 flex justify-center items-center ">
        <button className="w-fit h-fit  text-white absolute z-1 rounded-full px-10 py-5 cursor-pointer border-4 bg-[#A83271] hover:bg-white border-[#A83271] hover:text-[#A83271] font-bold drop-shadow-[0px_8px_0px_rgba(94,29,63,1)]   active:translate-y-2 active:drop-shadow-none transition-all"
        onClick={gotowhatsapp}>
          KONTAK WHATSAPP KAMI
        </button>
      <img className="absolute z-0" src={highlight} alt="" />
    </div>
  );
}
