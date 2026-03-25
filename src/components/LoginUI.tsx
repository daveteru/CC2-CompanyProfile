import { useNavigate } from "react-router";
import loginillus from "../assets/login_illus.png";

import { useAuth } from "../store/store";
import { loginSchema, type loginform } from "@/lib/zodAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { supabase } from "@/lib/supabase";

export default function LoginUI() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginform>({
    resolver: zodResolver(loginSchema),
  });


  const movepage = useNavigate();
  const { login } = useAuth();

  async function checkUser(userinput: loginform) {
    const {data: authData , error } = await supabase.auth.signInWithPassword({
      email: userinput.email,
      password:userinput.password,
    });

    if (error){
      alert("email or password is wrong!!")
      return
    }
    const user = authData.user;
    const role = user.app_metadata?.role ?? "user";
    login(role, user.user_metadata?.display_name ?? "User");
    alert("Login Success");
    movepage("/blogs");
    console.log(authData.session)
  }

  return (
    <div className="flex h-165 w-screen justify-center px-5 pb-40">
      <div className="grid h-fit min-h-120 w-200 gap-8 rounded-3xl border-4 border-red-500 bg-white p-10 drop-shadow-[0px_8px_0px_rgba(236,38,38,1)] md:grid-cols-2">
        <div className="flex flex-col items-center justify-center border-red-300 md:border-r">
          <h1 className="font-[Borel] text-xl text-red-400 md:text-3xl">
            {" "}
            welcome back !
          </h1>
          <img
            src={loginillus}
            alt=""
            className="stretch-0 aspect-auto w-50 md:w-70"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center">
          <fieldset className="flex flex-col">
            <div className="mb-5 flex flex-col">
              <label
                htmlFor="email"
                className="font-[Borel] text-xl text-red-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                {...register("email")}
                className="h-10 rounded-md bg-red-200 p-5"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(checkUser)();
                  }
                }}
              ></input>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <label htmlFor="pass" className="font-[Borel] text-xl text-red-700">
              Password
            </label>
            <input
              type="password"
              id="pass"
              {...register("password")}
              className="h-10 rounded-md bg-red-200 p-5"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(checkUser)();
                }
              }}
            ></input>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
            <button
              className="mt-5 h-10 w-50 rounded-2xl bg-red-400 text-white drop-shadow-[0px_8px_0px_rgba(236,38,38,1)] active:translate-y-2 active:drop-shadow-none"
              onClick={handleSubmit(checkUser)}
            >
              Login{" "}
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
