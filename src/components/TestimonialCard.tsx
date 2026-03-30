interface TestimonialCardProps {
  name: string;
  location: string;
  review: string;
}

export default function TestimonialCard({ name, location, review }: TestimonialCardProps) {
  return (
    <div className="bg-[#B0E4E8] text-center md:text-left w-fit min-h-50 rounded-3xl justify-between flex flex-col p-10 gap-5 drop-shadow-[0px_8px_0px_rgba(25,118,210,1)]">
      <div className="flex flex-col md:flex-row gap-5 items-center ">
        <div className="flex flex-col">
          <h2 className="text-xl">{name}</h2>
          <p>{location}</p>
        </div>
      </div>
      <p className="text-sm">{review}</p>
    </div>
  );
}
