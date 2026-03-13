import TestimonialCard from "../components/TestimonialCard";

const testimonials = [
  {
    name: "Budi Santoso",
    location: "Jakarta, Kelapa Gading",
    review:
      "Anjing saya mengalami infeksi kulit, tungau telinga, dan butuh vaksin tahunan — semua ditangani dalam satu kunjungan! Dokter-dokternya sangat teliti. Mereka juga mendeteksi tanda-tanda awal cacingan saat pemeriksaan rutin. Saya sangat lega semuanya tertangkap lebih awal. Sangat merekomendasikan PDHB untuk semua pemilik hewan peliharaan di Jakarta!",
  },
  {
    name: "Siti Rahayu",
    location: "Jakarta, Kemang",
    review:
      "Setelah operasi sterilisasi kucing saya, pemulihannya berjalan lancar berkat perawatan pasca-operasi yang luar biasa di sini. Mereka juga mengobati infeksi saluran pernapasannya dan membersihkan giginya secara menyeluruh. Stafnya dengan sabar menjelaskan setiap langkah perawatan. Saya tidak pernah sepercaya ini menitipkan kucing kesayangan saya kepada siapa pun!",
  },
  {
    name: "Agus Permana",
    location: "Jakarta, Tebet",
    review:
      "Membawa kelinci saya yang mengalami GI stasis — situasi yang sangat mengkhawatirkan — dan tim langsung bertindak cepat dan profesional. Mereka juga mengobati luka kecil, memeriksa parasit, dan memberikan saran nutrisi yang tepat. Layanan 24 jam benar-benar penyelamat. PDHB sungguh memberikan yang terbaik untuk setiap pasiennya!",
  },
  {
    name: "Dewi Kusuma",
    location: "Jakarta, Cibubur",
    review:
      "Anjing tua saya butuh penanganan nyeri sendi, prosedur gigi, pemeriksaan darah, dan suntikan booster — semua dilakukan di sini dengan penuh perhatian dan keahlian. Dokternya menjelaskan segalanya dengan jelas dan harganya sangat terjangkau. Saya jauh-jauh datang dari Cibubur dan selalu merasa setimpal dengan setiap kilometernya!",
  },
];

export default function Home_testimonial() {
  return (
    <div className="w-screen h-fit bg-[#FFFFFF] flex flex-col justify-center items-left py-10 my-20 container mx-auto">
      <h1 className="font-[Borel] text-center text-[44px] px-1 mb-10 text-blue-700">Client Reviews</h1>
      <section className="w-full h-fit flex flex-col lg:flex-row gap-5 px-15  ">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} name={t.name} location={t.location} review={t.review} />
        ))}
      </section>
    </div>
  );
}
