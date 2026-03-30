import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { axiosInstance } from "../lib/axios";

export default function Editblogmodule() {
  const [body, setBody] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [quote, setQuote] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
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
      setThumbnail(data.thumbnail ?? "");
    };
    fetchData();
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("upload", file);
    const fileName = `${Date.now()}_${file.name}`;
    setIsUploading(true);
    setUploadProgress(0);
    try {
      const res = await axiosInstance.post(
        `/files/blog-thumbnails/${fileName}?overwrite=true`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: ({ loaded, total }) => {
            if (total) setUploadProgress(Math.round((loaded * 100) / total));
          },
        }
      );
      return res.data.fileURL as string;
    } finally {
      setIsUploading(false);
    }
  };

  const handleEdit = async () => {
    if (!body || !title || !author) return alert("all form must be filled");
    try {
      setIsLoading(true);
      let newThumbnail = thumbnail;
      if (imageFile) {
        newThumbnail = await uploadImage(imageFile);
      }
      await axiosInstance.put(`/data/Blogcucu/${id}`, {
        title: title,
        author: author,
        bodytext: body,
        quote: quote,
        thumbnail: newThumbnail,
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
          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="thumbnail" className="text-md font-[inter]">
              Article Header Image
            </label>
            {(imagePreview || thumbnail) && (
              <img
                src={imagePreview || thumbnail}
                alt="preview"
                className="h-48 w-full rounded-md object-cover"
              />
            )}
            <label
              htmlFor="thumbnail"
              className="w-fit cursor-pointer rounded-2xl border-4 border-[#5E1D3F] bg-[#A83271] px-6 py-2 text-sm font-bold text-white drop-shadow-[0px_4px_0px_rgba(94,29,63,1)] transition-all active:translate-y-1 active:drop-shadow-none"
            >
              Choose Image
            </label>
            <input
              type="file"
              id="thumbnail"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {isUploading && (
              <div className="mt-1">
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full bg-red-400 transition-all duration-200"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">{uploadProgress}%</p>
              </div>
            )}
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
