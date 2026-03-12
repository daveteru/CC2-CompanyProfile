import mochi from "../assets/services_akupuntur.jpg"
import bruno from "../assets/pet1.jpg"
import koko from "../assets/pet2.jpg"
import Card from "../components/Card";

export default function Services_testi() {
  return (
    <div className="w-screen h-220 bg-[#F0D6F6]">
       <h1 className="font-[Borel] text-[44px] text-blue-700 text-center pt-15 pb-10">
        Client Testimonials
      </h1>
      <section className="w-screen h-150 grid grid-cols-3 container mx-auto  items-center px-15 mb-20">
          <Card
          name="Marcella Ibeth"
          breed="Pomeranian"
          age="3 Thn"
          petname="Mochi"
          tindakan="Akupuntur"
          img={mochi}
          desc="Mochi sudah lama mengalami nyeri sendi dan susah bergerak. Setelah menjalani terapi akupuntur di PDHB, perubahannya luar biasa! Dia kembali aktif dan lincah seperti dulu. Dokternya sabar dan sangat berpengalaman. Terima kasih PDHB!"
        />
        <Card
          name="Rizky Aditya"
          breed="Corgi"
          age="5 Thn"
          petname="Bruno"
          tindakan="Operasi Katarak"
          img={bruno}
          desc="Bruno ditemukan ada benjolan di bagian mata saat pemeriksaan rutin. Tim dokter PDHB langsung mengambil tindakan operasi dengan cepat dan profesional. Pemulihannya berjalan sangat baik. Sekarang Bruno sudah sehat dan kembali berlari-lari di taman!"
        />
        <Card
          name="Putri Handayani"
          breed="Shiba Inu"
          age="2 Thn"
          petname="Koko"
          tindakan="Perawatan Gigi"
          img={koko}
          desc="Koko sering menolak makan dan ternyata ada karang gigi yang cukup parah. PDHB langsung menangani dengan pembersihan gigi menyeluruh. Prosesnya aman dan Koko tidak stres sama sekali. Sekarang dia makan dengan lahap lagi. Sangat puas dengan pelayanannya!"
        />
      
      </section>
    </div>
  );
}
