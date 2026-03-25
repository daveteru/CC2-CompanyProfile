import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { axiosInstance } from "../lib/axios";

export default function Editblogmodule() {
  const [body, setBody] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [quote, setQuote] = useState<string>("");
  const { id }: any = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const fetchData = async () => {
      const res = await axiosInstance.get(`/data/Blogcucu/${id}`);
      const data = res.data;
      setBody(data.bodytext);
      setTitle(data.title);
      setAuthor(data.author);
      setQuote(data.quote);
    };
    fetchData();
  }, [id]);

  const handleEdit = async () => {
    if (!body || !title || !author) return alert("all form must be filled");
    try {
      setIsLoading(true);
      await axiosInstance.put(`/data/Blogcucu/${id}`, {
        title: title,
        author: author,
        bodytext: body,
        quote: quote,
      });
      alert("Successfully Edited a blog");
      navigate("/blogs");
    } catch (error) {
      alert("Failed to Edit blog");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex h-fit w-screen justify-center">
      <div className="my-20 h-fit w-200 rounded-4xl border-4 border-red-500 bg-white p-15 drop-shadow-[0px_8px_0px_rgba(236,38,38,1)]">
        <fieldset className="flex flex-col">
          <div className="mb-5 flex flex-col">
            <Link to="/blogs">
              <button className="mb-10 h-10 w-fit rounded-2xl border-4 border-[#5E1D3F] bg-[#A83271] px-10 font-bold text-white drop-shadow-[0px_8px_0px_rgba(94,29,63,1)] transition-all active:translate-y-2 active:drop-shadow-none">
                BACK TO INDEX
              </button>
            </Link>
            <label htmlFor="title" className="text-md font-[inter]">
              Article Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-10 rounded-md border border-gray-400 p-5"
            ></input>
          </div>
          <div className="flex gap-5">
            <div className="flex w-full items-center gap-2">
              <label
                htmlFor="author"
                className="text-md flex h-full translate-y-2 justify-center font-[inter]"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="h-10 w-full rounded-md border border-gray-400 p-5"
              ></input>
            </div>
          </div>
          <label
            htmlFor="pass"
            className="text-md mt-5 flex h-full translate-y-2 items-center font-[inter]"
          >
            Quotes
          </label>
          <textarea
            id="quote"
            name="quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            className="mt-5 h-30 w-full resize-none overflow-y-scroll rounded-md border border-gray-400 p-5"
          ></textarea>
          <label
            htmlFor="pass"
            className="text-md mt-5 flex h-full translate-y-2 items-center font-[inter]"
          >
            Body Text
          </label>
          <textarea
            id="bodytext"
            name="bodytext"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mt-5 h-120 w-full resize-none overflow-y-scroll rounded-md border border-gray-400 p-5"
          ></textarea>

          <div className="flex gap-5">
            <button
              className="mt-5 h-10 w-50 rounded-2xl bg-red-400 text-white drop-shadow-[0px_8px_0px_rgba(236,38,38,1)] active:translate-y-2 active:drop-shadow-none disabled:cursor-not-allowed disabled:opacity-50"
              onClick={handleEdit}
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
            <button
              onClick={() => setBody("")}
              className="mt-5 h-10 w-50 rounded-2xl bg-red-400 text-white drop-shadow-[0px_8px_0px_rgba(236,38,38,1)] active:translate-y-2 active:drop-shadow-none"
            >
              Clear{" "}
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
