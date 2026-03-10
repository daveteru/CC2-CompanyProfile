import { useEffect, useState } from "react";
import Teamcard from "./components/Teamcard";

export default function Teams_employee() {
  const [employees, setEmployees] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);

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
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="w-screen">
      <div className="my-25">
        <h1 className="font-[Borel] text-[44px] text-red-400 text-center">
          Team @ PDHB drh.Cucu
        </h1>
        <p className="text-center text-gray-500 mt-2 mx-auto max-w-xl">
          Para profesional berdedikasi yang berkomitmen pada perawatan penuh
          kasih kenali sosok-sosok di balik layanan kesehatan terpercaya PDHB
          drh. Cucu.
        </p>
      </div>
      <div className="container grid grid-cols-3 gap-5 mx-auto my-10 px-15">
        {employees.map((emp: any, index: number) => (
          <Teamcard
            key={index}
            title={emp.name.title}
            firstname={emp.name.first}
            lastname={emp.name.last}
            imgurl={emp.picture.large}
          />
        ))}
      </div>
    </div>
  );
}
