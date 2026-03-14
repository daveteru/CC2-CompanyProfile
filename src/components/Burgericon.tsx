import { useBurgerStore } from "../store/store";

export default function Burgericon() {
    const {openburger} = useBurgerStore()
  return (
    <div >
      <button className="translate-y-1 cursor-pointer" onClick={openburger}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 116 114"
          fill="none"
        >
          <rect width="116" height="16" fill="#FFFFFF" />
          <rect y="49" width="116" height="16" fill="#FFFFFF" />
          <rect y="98" width="116" height="16" fill="#FFFFFF" />
        </svg>
      </button>
    </div>
  );
}
