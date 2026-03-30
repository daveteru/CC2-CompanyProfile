import Blogs_hero from "./Blogs_hero";
import Createblogmodule from "../components/Createblogmodule";

export default function Blogs_create() {
  // const navigate = useNavigate()
  // const {isLogin , role } = useAuth()
  // useEffect(()=>{
  //   if (!isLogin || role !== "admin"){
  //     alert("This page is only for admin. returning to home..")
  //     navigate("/")
  //   } 
  // },[])

  return (
    <div className="bg-red-400">
      <Blogs_hero />
      <div className="bg-red-400 mt-25 h-full flex justify-center">
        <h1 className="font-[Borel] text-5xl text-white">Create New Blog</h1>
      </div>
      <Createblogmodule/>
    </div>
  );
}
