import Servicecard from "../components/Servicecard";
import dentalimg from "../assets/services_dental.jpeg";
import accuimg from "../assets/services_akupuntur.jpg";
import rawatimg from "../assets/services_rawatinap.jpg";
import lahirimg from "../assets/services_melahirkan.jpg";
import usgimg from "../assets/USG.jpg"
import mikroimg from "../assets/Microskop-Surgery.jpg"

export default function Services_product() {
  return (
    <div className="w-screen h-auto bg-[#FFFFFF] flex flex-col justify-center items-center my-20 container mx-auto">
      <h1 className="font-[Borel] text-[44px] text-blue-700 mb-10 text-center">
        Our Medical Services
      </h1>
      <section className="w-full h-fit grid lg:grid-cols-3 justify-center gap-2 md:px-15">
        <Servicecard
          title="Dental Scaling"
          desc="Scaling gigi hewan adalah prosedur medis untuk membersihkan plak dan karang gigi hingga ke bawah gusi. Layanan ini efektif mencegah pembusukan serta radang gusi demi kesehatan mulut dan kenyamanan anabul Anda. Prosedur dilakukan oleh dokter hewan berpengalaman dengan peralatan modern dan steril."
          imgurl={dentalimg}
        />
        <Servicecard
          title="Rawat Inap Sakit & Sehat"
          desc="Fasilitas rawat inap untuk hewan yang membutuhkan perawatan intensif maupun pemulihan pasca operasi. Dilengkapi pemantauan 24 jam oleh tenaga medis berpengalaman demi kenyamanan anabul Anda. Ruangan bersih dan nyaman dengan kontrol suhu optimal untuk pemulihan cepat."
          imgurl={rawatimg}
        />
        <Servicecard
          title="Akupuntur"
          desc="Terapi akupuntur hewan untuk meredakan nyeri, meningkatkan sirkulasi darah, dan mempercepat pemulihan. Metode alami yang aman dan efektif untuk berbagai kondisi kesehatan anabul Anda. Ditangani oleh dokter hewan tersertifikasi. Cocok untuk hewan dengan masalah persendian, saraf, atau pasca cedera."
          imgurl={accuimg}
        />
        <Servicecard
          title="Pertolongan Melahirkan"
          desc="Layanan pertolongan persalinan hewan dengan pendampingan dokter hewan profesional. Memastikan proses kelahiran berjalan aman dan lancar bagi induk maupun anak-anaknya. Tim medis siap siaga menangani komplikasi selama persalinan. Tersedia fasilitas operasi caesar darurat serta perawatan pasca melahirkan."
          imgurl={lahirimg}
        />
        <Servicecard
          title="USG"
          desc="Pemeriksaan USG hewan memanfaatkan gelombang suara untuk menampilkan gambar organ dalam secara real-time tanpa radiasi. Aman dan nyaman untuk semua jenis hewan, cocok mendeteksi kehamilan, tumor, serta kelainan organ. Ditangani dokter berpengalaman menggunakan perangkat USG digital terkini dan akurat."
          imgurl={usgimg}
        />
        <Servicecard
          title="Microscope Surgery"
          desc="Operasi mikroskopik menggunakan mikroskop bedah presisi tinggi untuk menangani jaringan halus seperti saraf dan pembuluh darah hewan. Teknik ini meminimalkan kerusakan jaringan di sekitarnya. Dilakukan oleh spesialis bedah hewan dengan teknologi optik canggih serta standar sterilisasi ketat dan terpercaya."
          imgurl={mikroimg}
        />
      </section>
    </div>
  );
}
