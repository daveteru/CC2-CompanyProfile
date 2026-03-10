interface button1props {
  label: string;
  color?: string;
}

export default function Button1({ label, color }: button1props) {
  return (
    <div>
      {" "}
      <button
        style={{ backgroundColor: color, cursor: "pointer"}}
        className="w-40 h-fit p-4 rounded-full text-white hover:bg-white transition"
      >
        {label}
      </button>
    </div>
  );
}
