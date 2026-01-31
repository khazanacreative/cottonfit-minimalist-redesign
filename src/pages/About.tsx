import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Lightbulb, ShieldCheck, Users, Shirt, Award, Zap, Heart, Baby, Building } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const services = [
    { icon: <Users className="h-8 w-8" />, title: "Kaos Komunitas/Gathering", description: "Kaos seragam untuk acara komunitas dan gathering" },
    { icon: <Baby className="h-8 w-8" />, title: "Kaos Kelas/Daycare", description: "Seragam nyaman untuk anak-anak sekolah dan daycare" },
    { icon: <Shirt className="h-8 w-8" />, title: "Kaos Satuan", description: "Pesanan kaos custom dalam jumlah satuan" },
    { icon: <Building className="h-8 w-8" />, title: "Kaos Seragam Team Kerja", description: "Seragam profesional untuk tim kerja" },
    { icon: <Award className="h-8 w-8" />, title: "Kaos Polo Custom", description: "Polo shirt custom dengan desain Anda" },
    { icon: <Zap className="h-8 w-8" />, title: "Jersey Custom", description: "Jersey olahraga dengan desain tim Anda" },
    { icon: <Heart className="h-8 w-8" />, title: "Tunik Custom", description: "Tunik custom dengan berbagai desain" },
    { icon: <ShieldCheck className="h-8 w-8" />, title: "Logo / Patch Custom", description: "Bordir dan print logo berkualitas tinggi" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <Shirt className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary animate-fade-in">Tentang Cottonfit</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Brand fashion custom yang menyediakan kaos berkualitas tinggi dengan bahan cotton combed premium
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="card-elegant p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Brand Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                Cottonfit adalah brand fashion custom yang menyediakan kaos dengan bahan <strong>cotton combed 24s</strong> yang lembut, alami, nyaman digunakan anak-anak, dan mampu menyerap keringat dengan baik.
              </p>
              <p className="leading-relaxed">
                Kami melayani kebutuhan seragam Daycare, Kaos Komunitas, dan berbagai kebutuhan desain custom lainnya dengan komitmen kualitas dan kepuasan pelanggan.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visi & Misi Kami</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vision */}
            <Card className="card-elegant p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Visi</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Menjadi Merk Fashion terkenal dalam kalangan masyarakat, yang dikenal karena kualitas, desain dan inovasi produknya
                  </p>
                </li>
                <li className="flex gap-3">
                  <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Menyediakan pengalaman berbelanja yang unik, yaitu dengan membebaskan atau custom desain sesuai kebutuhan klien
                  </p>
                </li>
              </ul>
            </Card>

            {/* Mission */}
            <Card className="card-elegant p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Misi</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Award className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Menyediakan produk fashion berkualitas tinggi dengan desain yang stylish dan inovatif, serta harga yang kompetitif
                  </p>
                </li>
                <li className="flex gap-3">
                  <Heart className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Meningkatkan kepuasan pelanggan melalui pelayanan yang ramah, responsif dan profesional
                  </p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Berbagai pilihan produk custom untuk memenuhi kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant p-6 text-center hover-lift">
                <div className="flex justify-center mb-4 text-primary">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/catalog">
              <Button size="lg" className="btn-primary-gradient">
                Lihat Katalog Lengkap
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tertarik dengan Layanan Kami?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan kaos custom Anda!
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Hubungi Kami
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
