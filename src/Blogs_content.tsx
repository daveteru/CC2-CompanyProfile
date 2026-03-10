import Blogcard from "./components/Blogcard";
import Teamcard from "./components/Teamcard";

export default function Blogs_content() {
  return (
    <div className="w-screen">
      <div className="bg-red-400 py-25 h-full">
        <h1 className="font-[Borel] text-[44px] text-white text-center">
          Keeping up with the news.
        </h1>
        <p className="text-center text-white mt-2 mx-auto max-w-xl">
          Para profesional berdedikasi yang berkomitmen pada perawatan penuh
          kasih kenali sosok-sosok di balik layanan kesehatan terpercaya PDHB
          drh. Cucu.
        </p>
      </div>
      <div className="container grid grid-cols-3 gap-5 mx-auto my-20 px-15">
        <Blogcard/>
        <Blogcard/>
        <Blogcard/>
        <Blogcard/>
      </div>
    </div>
  );
}
