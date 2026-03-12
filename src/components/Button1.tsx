interface button1props {
  label: string;
  color?: string;
}

export default function Button1({ label, color }: button1props) {
  return (
    <div>
      {" "}
      <button
        style={{ backgroundColor: color, cursor: "pointer" }}
        className="w-fit h-fit py-3 px-10 rounded-full text-white hover:bg-white transition font-bold drop-shadow-[0px_8px_0px_rgba(94,29,63,1)]   active:translate-y-2 active:drop-shadow-none transition-all"
      >
        {label}
      </button>
    </div>
  );
}
