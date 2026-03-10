import mochi from "./assets/services_akupuntur.jpg"
import Card from "./components/Card";

export default function Services_testi() {
  return (
    <div className="w-screen h-fit bg-[#F0D6F6]">
      <section className="w-screen h-200 grid grid-cols-3 container mx-auto overflow-clip items-center">
          <Card
          name="Marcella Ibeth"
          breed="Pomeranian"
          age="3 Thn"
          petname="Mochi"
          tindakan="Akupuntur"
          img={mochi}
          desc="Saya hanya percaya pada PDHB DRH. Cucu. Sudah terbukti, anjing saya shiro yang jantungnya cukup parah, ditangani dr. Cucu dan rutin cek, sampai saat ini shiro masih keliatan sehat dan lincah."
        />
        <Card
          name="Marcella Ibeth"
          breed="Pomeranian"
          age="3 Thn"
          petname="Mochi"
          tindakan="Akupuntur"
          img=""
          desc="Saya hanya percaya pada PDHB DRH. Cucu. Sudah terbukti, anjing saya shiro yang jantungnya cukup parah, ditangani dr. Cucu dan rutin cek, sampai saat ini shiro masih keliatan sehat dan lincah."
        />
        <Card
          name="Marcella Ibeth"
          breed="Pomeranian"
          age="3 Thn"
          petname="Mochi"
          tindakan="Akupuntur"
          img=""
          desc="Saya hanya percaya pada PDHB DRH. Cucu. Sudah terbukti, anjing saya shiro yang jantungnya cukup parah, ditangani dr. Cucu dan rutin cek, sampai saat ini shiro masih keliatan sehat dan lincah."
        />
      
      </section>
    </div>
  );
}
