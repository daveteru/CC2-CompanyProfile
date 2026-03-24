import Blogcard from "../components/Blogcard";
import Blogeditor from "../components/Blogeditor";
import { useAuth } from "../store/store";
import { Skeleton } from "../components/ui/skeleton";

function BlogcardSkeleton() {
  return (
    <div>
      <Skeleton className="mb-5 h-[2px]" />
      <Skeleton className="h-15 w-full mb-2" />
      <Skeleton className="h-[2px] w-full" />
      <Skeleton className="w-full h-70 my-5" />
      <Skeleton className="h-[2px] w-full" />
      <div className="flex justify-between my-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div>
      <Skeleton className="h-[2px] w-full mb-5" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}

export default function Blogs_content({blogs, loading}: { blogs:any[], loading: boolean}) {
  const { role } = useAuth();

  return (
    <div className="w-screen">
      <div className="bg-red-400 py-25 px-10 h-full">
        <h1 className="font-[Borel] text-[44px] text-white text-center">
          Keeping up with the news.
        </h1>
        <p className="text-center text-white mt-2 mx-auto max-w-xl">
          Para profesional berdedikasi yang berkomitmen pada perawatan penuh
          kasih kenali sosok-sosok di balik layanan kesehatan terpercaya PDHB
          drh. Cucu.
        </p>
      </div>
      <div className="container mx-auto px-25">test</div>
      {role === "admin" ? <Blogeditor /> : ""}
      <div className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto my-20 px-10 md:px-25">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <BlogcardSkeleton key={i} />)
          : blogs.map((blog : any)=>(
            <Blogcard
            key={blog.objectId}
            blogid={blog.objectId}
            title={blog.title}
            author={blog.author}
            bodytext={blog.bodytext}
            created={blog.created}
            quote={blog.quote}
            imgurl={blog.thumbnail}
            />
          ))
        }
      </div>
    </div>
  );
}
