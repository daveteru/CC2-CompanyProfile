interface TestimonialCardProps {
  name: string;
  location: string;
  review: string;
}

export default function TestimonialCard({ name, location, review }: TestimonialCardProps) {
  return (
    <div className="bg-[#B0E4E8] w-100 h-100 rounded-3xl justify-between flex flex-col p-10 gap-5 drop-shadow-[0px_8px_0px_rgba(25,118,210,1)]">
      <div className="flex gap-5 items-center">
        <div className="w-20 h-20 bg-[#1976D2] rounded-full"></div>
        <div className="flex flex-col">
          <h2 className="text-xl">{name}</h2>
          <p>{location}</p>
        </div>
      </div>
      <p className="text-sm">{review}</p>
    </div>
  );
}
