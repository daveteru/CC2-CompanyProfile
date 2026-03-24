import { useNavigate } from "react-router";
import loginillus from "../assets/login_illus.png";
import { useState } from "react";
import { useAuth } from "../store/store";

export default function LoginUI() {
  interface userDBtype {
    id: number;
    email: string;
    name: string;
    password: string;
    role: "user" | "admin";
  }

  const userDB: userDBtype[] = [
    {
      id: 1,
      email: "budi@mail.com",
      name: "Budi",
      password: "budi123",
      role: "user",
    },
    {
      id: 2,
      email: "siti@mail.com",
      name: "Siti",
      password: "siti123",
      role: "admin",
    },
  ];

  const movepage = useNavigate();
  const { login } = useAuth();

  function checkUser() {
    const matchresult = userDB.find(
      (e) => e.email === email && e.password === pass,
    );
    if (matchresult) {
      login(matchresult.role, matchresult.name);
      alert(`login Success ${matchresult.role}`);
      movepage("/blogs");
    } else {
      alert("Email or Password is Wrong");
    }
  }

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="w-screen h-165 flex justify-center pb-40 px-5 ">
      <div className="h-fit min-h-120 w-200 rounded-3xl bg-white p-10 grid md:grid-cols-2 gap-8 border-4 border-red-500 drop-shadow-[0px_8px_0px_rgba(236,38,38,1)] ">
        <div className="flex flex-col justify-center items-center md:border-r border-red-300">
          <h1 className="font-[Borel] text-xl md:text-3xl text-red-400">
            {" "}
            welcome back !
          </h1>
          <img src={loginillus} alt="" className="stretch-0 aspect-auto w-50 md:w-70" loading="lazy" />
        </div>
        <div className="flex flex-col justify-center">
          <fieldset className="flex flex-col">
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="text-xl text-red-700 font-[Borel]"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    checkUser();
                  }
                }}
                className="bg-red-200 rounded-md h-10 p-5"
              ></input>
            </div>
            <label
              htmlFor="pass"
              className="text-xl  text-red-700  font-[Borel]"
            >
              Password
            </label>
            <input
              type="password"
              id="pass"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  checkUser();
                }
              }}
              className="bg-red-200 rounded-md h-10 p-5"
            ></input>
            <button
              className="h-10 w-50 rounded-2xl mt-5 text-white bg-red-400 drop-shadow-[0px_8px_0px_rgba(236,38,38,1)] active:translate-y-2 active:drop-shadow-none "
              onClick={() => {
                checkUser();
              }}
            >
              Login{" "}
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
