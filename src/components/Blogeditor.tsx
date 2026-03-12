import Editbutton from "./Editbutton";

export default function Blogeditor() {
  return <div className="container mx-auto px-40">
    <div className="my-20  p-20 rounded-4xl bg-red-200">
        <h2 className="font-[Borel] text-2xl text-red-500">Admin Panel</h2>
        <Editbutton/>
    </div>
  </div>;
}
