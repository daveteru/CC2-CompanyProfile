
import Mainvet from "../components/Mainvet";
import cucu from "../assets/drh_cucu.jpg"
import bambang from "../assets/drh_bambang.jpg"
import sri from "../assets/drh_sri.jpg"

export default function Aboutus_team() {
  return (
    <div className="w-screen h-auto bg-[#FFFFFF] flex flex-col justify-center items-center my-20 px-5 container mx-auto">
      <h1 className="font-[Borel] text-[44px] text-blue-700 mb-10 text-center">
        Our Main Veterinarian
      </h1>
      <section className="w-full flex gap-10 flex-wrap justify-center">
        <Mainvet
          name="drh. Cucu Kartini Sajuthi"
          date="1983 - Sekarang"
          special="Opthalmology & Cardiorespiratory"
          desc="  Drh. Cucu Kartini Sajuthi is a prominent figure in
                  Indonesian veterinary medicine, widely regarded as a pioneer in
                  small animal clinical practice. Born in Cikampek in 1959, she
                  graduated from the Faculty of Veterinary Medicine at IPB University
                  in 1982."
          imgurl={cucu}
        />
        <Mainvet
          name="drh. Sri Redjeki Rotoro"
          date="1992 - Sekarang"
          special="Exotic Medicine & Internal Medicine"
          desc=" drh. Sri Redjeki Rotoro, MM (drh. Toro) is a senior vet at PDHB drh. Cucu Kartini S. Since 1992, 
          she has specialized in Exotic, Internal, and Feline Medicine. She is a recognized expert in treating 
          'non-traditional' pets and complex feline cases."
          imgurl={sri}
        />
        <Mainvet
          name="drh. Bambang Agus Sulistyo"
          date="1993 - Sekarang"
          special="Dermatology"
          desc="        Gemini said Drh. Cucu Kartini Sajuthi is a prominent figure in
                  Indonesian veterinary medicine, widely regarded as a pioneer in
                  small animal clinical practice. Born in Cikampek in 1959, she
                  graduated from the Faculty of Veterinary Medicine at IPB University
                  in 1982."
                  imgurl={bambang}
        />
      </section>
    </div>
  );
}
