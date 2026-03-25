import Blogcard from "../components/Blogcard";
import Blogeditor from "../components/Blogeditor";
import { useAuth, useEditBlogStore, useSearchStore } from "../store/store";
import { Skeleton } from "../components/ui/skeleton";
import Search from "@/components/Search";
import Deleteconfirmbutton from "@/components/Deleteconfirmbutton";
import Deletecancelbutton from "@/components/Deletecancelbutton";

function BlogcardSkeleton() {
  return (
    <div>
      <Skeleton className="mb-5 h-[2px]" />
      <Skeleton className="mb-2 h-15 w-full" />
      <Skeleton className="h-[2px] w-full" />
      <Skeleton className="my-5 h-70 w-full" />
      <Skeleton className="h-[2px] w-full" />
      <div className="my-2 flex justify-between">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div>
      <Skeleton className="mb-5 h-[2px] w-full" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}

export default function Blogs_content({
  blogs,
  loading,
}: {
  blogs: any[];
  loading: boolean;
}) {
  const { role } = useAuth();
  const { search, keyword } = useSearchStore();
  const { isDelete } = useEditBlogStore();

  return (
    <div className="w-screen ">
      <div className="h-full bg-red-400 px-10 py-25">
        <h1 className="text-center font-[Borel] text-[44px] text-white">
          Keeping up with the news.
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-center text-white">
          Para profesional berdedikasi yang berkomitmen pada perawatan penuh
          kasih kenali sosok-sosok di balik layanan kesehatan terpercaya PDHB
          drh. Cucu.
        </p>
      </div>
      {role === "admin" ? <Blogeditor /> : ""}
      {isDelete ? (
        <div className="container mx-5 md:mx-auto flex md:flex-row flex-col w-fit flex-col items-center justify-center gap-5 rounded-md bg-red-200 py-10 px-25 text-red-500">
          ‼️ Click on the blog card to decide which to delete!
          <div className="flex md:flex-row flex-col items-center gap-5">
            {isDelete ? <Deleteconfirmbutton /> : ""}
            {isDelete ? <Deletecancelbutton /> : ""}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="container mx-auto px-25 transition-all">
        <Search />
      </div>
      <div className="container mx-auto my-20 grid gap-5 px-10 sm:grid-cols-1 md:grid-cols-2 md:px-25 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <BlogcardSkeleton key={i} />
            ))
          : blogs.map((blog: any) => {
              const isVisible = blog[keyword]
                ?.toLowerCase()
                .includes(search.toLowerCase());
              return (
                <div key={blog.objectId} className={isVisible ? "" : "hidden"}>
                  <Blogcard
                    blogid={blog.objectId}
                    title={blog.title}
                    author={blog.author}
                    bodytext={blog.bodytext}
                    created={blog.created}
                    quote={blog.quote}
                    imgurl={blog.thumbnail}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}
