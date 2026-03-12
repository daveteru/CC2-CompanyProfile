import {create} from "zustand"

type auth = {
    isLogin : boolean,
    login: (role: "user" | "admin" , name:string) => void,
    logout: () => void,
    role? : "user" | "admin" | null,
    name? : string
}

export const useAuth = create<auth>((set)=>({
    isLogin: false,
    name:"",
    role:null,
    login: (role,name) => set({ isLogin: true , role, name}),
    logout: () => set({ isLogin: false , role: null }),
}))