export default function Navbar() {
  return (
    <div className="fixed z-10 w-screen box-border py-5 px-20 flex justify-between items-center">
      <img src="src/assets/logo_white.png" alt="" className="h-[50px]" />
      <div className="w-[50%] flex gap-5 justify-end">
        <div className="min-w-[600px] h-[40px] flex justify-between items-center rounded-full box-border overflow-hidden bg-white drop-shadow-[2px_5px_0px_rgba(0,0,0,1)]">
          {" "}
          <button className="hover:bg-[#A83271] hover:text-white transition px-10 py-4 rounded-full cursor-pointer ">ABOUT US</button>
          <button className="hover:bg-[#A83271] hover:text-white transition px-8 py-4 rounded-full cursor-pointer">SERVICES</button>
          <button className="hover:bg-[#A83271] hover:text-white transition px-10 py-4 rounded-full cursor-pointer">TEAM</button>
          <button className="hover:bg-[#A83271] hover:text-white transition px-10 py-4 rounded-full cursor-pointer">BLOGS</button>
        </div>
        <div className="min-w-[40px] min-h-[40px] rounded-full bg-amber-50"></div>
      </div>
    </div>
  );
}
