import { useSearchStore } from "@/store/store";

export default function Search() {
  const { search, setSearch, keyword, setKeyword } = useSearchStore();

  return (
    <div className="w-full h-full flex items-center justify-between  pt-20 ">
      <div></div>
      <div className="w-full">
        <fieldset className="flex gap-5 items-center w-full">
          <label htmlFor="filter" className="font-[inter] w-fit flex whitespace-nowrap">
            Filter By:
          </label>
          <select
            id="filter"
            value={keyword}
            onChange={(e) =>
              setKeyword(e.target.value as "title" | "author" | "bodytext")
            }
            className="border rounded-md h-12 px-3 font-[inter]"
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="bodytext">Body Text</option>
          </select>
          <label htmlFor="searchbar"> Search: </label>
          <input
            id="searchbar"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="border rounded-md w-full h-12 p-5"
          />
        </fieldset>
      </div>
    </div>
  );
}
