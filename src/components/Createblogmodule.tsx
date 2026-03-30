import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { axiosInstance } from "../lib/axios";

export default function Createblogmodule() {
  const [body, setBody] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [quote, setQuote] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = async () => {
    if (!body || !title || !author) return alert("all form must be filled");
    try {
      setIsLoading(true);
      let thumbnail = "";
      if (imageFile) {
        thumbnail = await uploadImage(imageFile);
      }
      await axiosInstance.post("/data/Blogcucu", {
        title: title,
        author: author,
        bodytext: body,
        quote: quote,
        thumbnail: thumbnail,
      });
      alert("Successfully submitted a blog");
      navigate("/blogs");
    } catch (error) {
      alert("Failed to submit blog");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="w-screen h-fit flex justify-center container mx-auto">
      <div className="w-200 h-fit my-20 p-15 border-4 border-red-500 rounded-4xl bg-white drop-shadow-[0px_8px_0px_rgba(236,38,38,1)]">
        <fieldset className="flex flex-col">
          <div className="flex flex-col mb-5">
            <Link to="/blogs">
              <button className="h-10 w-fit mb-10 px-10 rounded-2xl bg-[#A83271] font-bold drop-shadow-[0px_8px_0px_rgba(94,29,63,1)] border-4 border-[#5E1D3F] text-white active:translate-y-2 active:drop-shadow-none transition-all">
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
              className="border border-gray-400 rounded-md h-10 p-5"
            ></input>
          </div>
          <div className="flex gap-5">
            <div className="flex w-full gap-2 items-center  ">
              <label
                htmlFor="author"
                className="text-md translate-y-2 font-[inter] justify-center flex h-full"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="border  border-gray-400 rounded-md w-full h-10 p-5"
              ></input>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="thumbnail" className="text-md font-[inter]">
              Article Header Image
            </label>
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
            {imagePreview && (
              <img
                src={imagePreview}
                alt="preview"
                className="h-48 w-full rounded-md object-cover"
              />
            )}
          </div>
          <label
            htmlFor="pass"
            className="text-md translate-y-2  mt-5 font-[inter] items-center flex h-full "
          >
            Quotes
          </label>
          <textarea
            id="quote"
            name="quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            className="border rounded-md  border-gray-400 w-full h-30 p-5 mt-5 overflow-y-scroll resize-none"
          ></textarea>
          <label
            htmlFor="pass"
            className="text-md translate-y-2  mt-5 font-[inter] items-center flex h-full "
          >
            Body Text
          </label>
          <textarea
            id="bodytext"
            name="bodytext"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border rounded-md  border-gray-400 w-full h-120 p-5 mt-5 overflow-y-scroll resize-none"
          ></textarea>

          <div className="flex gap-5">
            <button
              className="h-10 w-50 rounded-2xl mt-5 text-white bg-red-400 drop-shadow-[0px_8px_0px_rgba(236,38,38,1)] active:translate-y-2 active:drop-shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
            <button
              onClick={() => setBody("")}
              className="h-10 w-50 rounded-2xl mt-5 text-white bg-red-400 drop-shadow-[0px_8px_0px_rgba(236,38,38,1)] active:translate-y-2 active:drop-shadow-none "
            >
              Clear{" "}
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
