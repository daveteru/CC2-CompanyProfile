import { useEffect, useState } from "react";
import Teamcard from "../components/Teamcard";
import { Skeleton } from "../components/ui/skeleton";
import Button1 from "@/components/Button1";

export default function Teams_employee() {
  const [employees, setEmployees] = useState([]);
  const [loading , setLoading ] = useState<boolean>(true)
  const [currentPage , setCurrentPage] = useState<number>(1)
  const itemsPerPage = 6;
  const totalPage = Math.ceil(employees.length / itemsPerPage);
  let start = ( currentPage - 1)* itemsPerPage;
  let currentEmployees = employees.slice(start, start + itemsPerPage)

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const result = await fetch(
          "https://randomuser.me/api/?inc=name,picture&results=12",
        );
        const data = await result.json();
        setEmployees(data.results);
      } catch (error) {
        console.error("failed to fetch", error);
      } finally{
        setLoading(false)
      }
    };
    fetchEmployees();
  }, []);

  function nextpage(){
    if(currentPage == totalPage )return console.log("maxpage")
    else{
      setCurrentPage(currentPage+1)
      start = ( currentPage - 1)* itemsPerPage;
      currentEmployees = employees.slice(start, start + itemsPerPage)
    }
  }
  function prevpage(){
    if(currentPage == 1 )return console.log("lowestpage")
    else{
      setCurrentPage(currentPage-1)
      start = ( currentPage - 1)* itemsPerPage;
      currentEmployees = employees.slice(start, start + itemsPerPage)
    }
  }

  return (
    <div className="w-screen h-full">
      <div className="my-20">
        <h1 className="font-[Borel] text-[44px] text-red-400 text-center">
          Team @ PDHB drh.Cucu
        </h1>
        <p className="text-center text-gray-500 mt-2 mx-auto max-w-xl p-5">
          Para profesional berdedikasi yang berkomitmen pada perawatan penuh
          kasih kenali sosok-sosok di balik layanan kesehatan terpercaya PDHB
          drh. Cucu.
        </p>
      </div>
      <div className="container grid  lg:grid-cols-3 gap-5 mx-auto px-5 md:px-15 pb-10">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="w-full min-h-100 rounded-3xl bg-amber-200 p-8 gap-7 flex lg:flex-row flex-col items-center lg:items-start"
              >
                <Skeleton className="w-20 h-20 rounded-full shrink-0 bg-amber-300" />
                <div className="w-full flex flex-col gap-3">
                  <Skeleton className="h-6 w-3/4 bg-amber-300" />
                  <Skeleton className="h-1 w-5 bg-amber-300" />
                  <Skeleton className="h-4 w-1/3 bg-amber-300" />
                  <Skeleton className="h-4 w-full bg-amber-300 mt-3" />
                  <Skeleton className="h-4 w-full bg-amber-300" />
                  <Skeleton className="h-4 w-5/6 bg-amber-300" />
                </div>
              </div>
            ))
          : currentEmployees.map((emp: any, index: number) => (
              <Teamcard
                key={index}
                title={emp.name.title}
                firstname={emp.name.first}
                lastname={emp.name.last}
                imgurl={emp.picture.large}
              />
            ))}
      </div>
      <div className="w-full h-20 flex gap-5 justify-center ">
        <Button1 label="Previous" color="#a93271" click={prevpage}/>
        <h1 className=" w-10 w-auto h-15 text-center text-3xl  items-center justify-center flex">{currentPage} of {totalPage} </h1>
        <Button1 label="Next" color="#a93271" click={nextpage}/>
        </div>
    </div>
  );
}
