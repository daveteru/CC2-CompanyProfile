import { create } from "zustand";

type auth = {
  isLogin: boolean;
  login: (role: "user" | "admin", name: string) => void;
  logout: () => void;
  role?: "user" | "admin" | null;
  name?: string;
};

export const useAuth = create<auth>((set) => ({
  isLogin: false,
  name: "",
  role: null,
  login: (role, name) => set({ isLogin: true, role, name }),
  logout: () => set({ isLogin: false, role: null }),
}));

type burgericon = {
  isBurgerOpen: boolean;
  openburger: () => void;
  closeburger: () => void;
};

export const useBurgerStore = create<burgericon>((set) => ({
  isBurgerOpen: false,
  openburger: () => {
    console.log("works");
    set({ isBurgerOpen: true });
  },
  closeburger: () => set({ isBurgerOpen: false }),
}));

type searchStore = {
  search: string;
  keyword: "title" | "author" | "bodytext";
  setSearch: (value: string) => void;
  setKeyword: (value: "title" | "author" | "bodytext") => void;
};

export const useSearchStore = create<searchStore>((set) => ({
  search: "",
  keyword: "title",
  setSearch: (value: string) => set({ search: value }),
  setKeyword: (value: "title" | "author" | "bodytext") =>
    set({ keyword: value }),
}));

type editblogmodule = {
  isDelete?: boolean;
  selectedIds: number[];
  setIsDelete: () => void;
  setCancelDelete: () => void;
  toggleSelect: (id: number) => void;
  clearSelected: () => void;
};

export const useEditBlogStore = create<editblogmodule>((set) => ({
  isDelete: false,
  selectedIds: [],
  setIsDelete: () => {
    alert("select blogs you want to delete");
    set({ isDelete: true });
  },
  setCancelDelete: () => set({ isDelete: false, selectedIds: [] }),
  toggleSelect: (id) =>
    set((state) => ({
      selectedIds: state.selectedIds.includes(id)
        ? state.selectedIds.filter((i) => i !== id)
        : [...state.selectedIds, id],
    })),
  clearSelected: () => set({ selectedIds: [] }),
}));
