interface teamcardprops {
  title: string;
  firstname: string;
  lastname: string;
  imgurl: string;
}

export default function Teamcard({title,firstname,lastname,imgurl,}: teamcardprops) {
  const random = Math.floor(Math.random() * 7);
  const teamData = [
    {
      role: "Clinic Manager",
      desc: "A no-nonsense organizer who somehow keeps the entire clinic from falling apart, memorizes every client's pet name, brews terrible coffee, and secretly cries during animal rescue videos.",
    },
    {
      role: "Veterinary Assistant",
      desc: "A high-energy multitasker who can restrain a 40kg dog while cracking jokes, collects funny pet photos from work, and is training for her first marathon this year.",
    },
    {
      role: "Lab Technician",
      desc: "A quiet perfectionist who talks to blood samples while running diagnostics, owns an impressive cactus collection at her desk, and makes the most accurate test results look effortless.",
    },
    {
      role: "Receptionist",
      desc: "A bubbly people-person who greets every pet like a celebrity, keeps a secret snack drawer for stressed coworkers, and somehow remembers every appointment without checking the system twice.",
    },
    {
      role: "Pharmacist",
      desc: "A detail-obsessed professional who double-checks everything three times, unwinds by solving crossword puzzles during lunch, and once correctly diagnosed her own cat before the vet did.",
    },
    {
      role: "Veterinarian",
      desc: "A calm and focused surgeon with steady hands and a dry sense of humor, rescues stray cats on weekends, and has a framed photo of his first patient.",
    },
    {
      role: "Vet Nurse",
      desc: "A compassionate soul who stays overtime without complaining, sings softly to animals recovering from surgery, bakes cupcakes for the team every Friday, and fosters kittens every spring.",
    },
  ];

  return (
    <div>
      <div className="w-full  min-h-100 rounded-3xl bg-amber-400 p-8 gap-7 justify-between items-center lg:items-start flex lg:flex-row flex-col text-center lg:text-left font-[inter] overflow-hidden drop-shadow-[1px_10px_0px_rgba(239,156,62,1)]">
        <div className="w-20 h-20 md:w-40 md:h-40 lg:w-20 lg:h-20 bg-red-200 rounded-full overflow-hidden shrink-0 aspect-square">
          <img src={imgurl} alt="" className="object-fit w-full h-full" loading="lazy" />
        </div>
        <div className="w-full flex flex-col justify-between text-[#323F51] h-full ">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-2xl w-full ">
              {title} {firstname} {lastname}
            </h1>
            <hr className="w-5 my-2" />
            <p className="text-sm mb-5">{teamData[random].role}</p>
          </div>
          <p>{teamData[random].desc}</p>
        </div>
      </div>
    </div>
  );
}
