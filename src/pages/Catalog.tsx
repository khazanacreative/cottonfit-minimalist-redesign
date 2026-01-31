import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import productShowcase from "@/assets/product-showcase.jpg";

const Catalog = () => {
  const products = [
    {
      slug: "kaos-komunitas-gathering",
      title: "Kaos Komunitas / Gathering",
      description: "Sempurna untuk acara komunitas, gathering, atau reuni. Minimum order fleksibel dengan harga spesial untuk jumlah banyak.",
      image: productShowcase,
    },
    {
      slug: "kaos-kelas-daycare",
      title: "Kaos Kelas / Daycare",
      description: "Seragam kelas atau daycare dengan bahan yang aman untuk anak-anak. Menyerap keringat dan tidak mudah luntur.",
      image: productShowcase,
    },
    {
      slug: "kaos-custom-satuan",
      title: "Kaos Custom Satuan",
      description: "Kaos custom berkualitas untuk kebutuhan personal. Tersedia berbagai ukuran dan warna. Bahan Cotton Combed 24s yang lembut dan nyaman.",
      image: productShowcase,
    },
    {
      slug: "kaos-polo-custom",
      title: "Kaos Polo Custom",
      description: "Polo shirt custom untuk kebutuhan formal atau semi-formal. Tersedia dengan berbagai pilihan kerah dan warna.",
      image: productShowcase,
    },
    {
      slug: "jersey-club",
      title: "Jersey Club",
      description: "Jersey olahraga custom untuk klub atau tim Anda. Bahan dry-fit yang nyaman dan menyerap keringat.",
      image: productShowcase,
    },
    {
      slug: "tunik-custom",
      title: "Tunik Custom",
      description: "Tunik custom dengan berbagai model dan desain. Cocok untuk seragam kerja atau acara formal.",
      image: productShowcase,
    },
    {
      slug: "patch-logo-bordir",
      title: "Patch / Logo Bordir",
      description: "Logo atau patch custom dengan teknik bordir berkualitas tinggi. Awet dan tidak mudah rusak.",
      image: productShowcase,
    },
    {
      slug: "logo-print-custom",
      title: "Logo Print Custom",
      description: "Printing logo dengan berbagai teknik: DTF, Sablon, atau Digital Print. Hasil tajam dan tahan lama.",
      image: productShowcase,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary animate-fade-in">Katalog Produk</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Jelajahi berbagai pilihan produk kaos custom berkualitas tinggi untuk semua kebutuhan Anda
          </p>
        </div>
      </section>

      {/* Filter Section - Placeholder for future enhancement */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="default" className="btn-primary-gradient">Semua Produk</Button>
            <Button variant="outline">Kaos</Button>
            <Button variant="outline">Polo</Button>
            <Button variant="outline">Jersey</Button>
            <Button variant="outline">Tunik</Button>
            <Button variant="outline">Custom Logo</Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="card-elegant overflow-hidden hover-lift group">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex gap-3">
                    <a 
                      href={`https://wa.me/6282228302403?text=Halo, saya tertarik dengan produk ${product.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full btn-primary-gradient">
                        Pesan Sekarang
                      </Button>
                    </a>
                    <Link to={`/catalog/${product.slug}`}>
                      <Button variant="outline">
                        Detail
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tidak Menemukan Yang Anda Cari?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Kami siap membantu mewujudkan desain custom sesuai kebutuhan Anda. Hubungi kami untuk konsultasi gratis!
          </p>
          <a href="https://wa.me/6282228302403" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="btn-primary-gradient text-lg px-8">
              Konsultasi via WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
