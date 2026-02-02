import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { KaosKomunitas, KaosDaycare, KaosSatuan, Jersey, JerseyBola, Jaket, Kemeja, TunikCustom, KaosAngkatan, KaosCafe, KaosCombedDaycare, KaosPolo, KaosPoloCombed, KaosRetail, KaosUmkm } from "@/assets/products";

const products = [
  {
    slug: "kaos-komunitas-gathering",
    title: "Kaos Komunitas / Gathering",
    description: "Sempurna untuk acara komunitas, gathering, atau reuni. Minimum order fleksibel dengan harga spesial untuk jumlah banyak.",
    image: KaosKomunitas,
    features: [
      "Bahan Cotton Combed 24s premium",
      "Tersedia berbagai pilihan warna",
      "Minimum order fleksibel",
      "Harga spesial untuk jumlah banyak",
      "Free desain sesuai tema komunitas",
    ],
  },
  {
    slug: "kaos-kelas-daycare",
    title: "Kaos Kelas / Daycare",
    description: "Seragam kelas atau daycare dengan bahan yang aman untuk anak-anak. Menyerap keringat dan tidak mudah luntur.",
    image: KaosCombedDaycare,
    features: [
      "Bahan aman untuk anak-anak",
      "Lembut dan menyerap keringat",
      "Warna tidak mudah luntur",
      "Tersedia ukuran anak hingga dewasa",
      "Bisa tambah nama anak",
    ],
  },
  {
    slug: "kaos-custom-satuan",
    title: "Kaos Custom Satuan",
    description: "Kaos custom berkualitas untuk kebutuhan personal. Tersedia berbagai ukuran dan warna. Bahan Cotton Combed 24s yang lembut dan nyaman.",
    image: KaosSatuan,
    features: [
      "Bisa pesan satuan",
      "Bebas custom desain",
      "Cotton Combed 24s",
      "Berbagai pilihan warna",
      "Proses cepat",
    ],
  },
  {
    slug: "kaos-polo-custom",
    title: "Kaos Polo Custom",
    description: "Polo shirt custom untuk kebutuhan formal atau semi-formal. Tersedia dengan berbagai pilihan kerah dan warna.",
    image: KaosPolo,
    features: [
      "Bahan polo berkualitas",
      "Berbagai model kerah",
      "Cocok untuk seragam kerja",
      "Bisa bordir atau sablon logo",
      "Tampilan profesional",
    ],
  },
  {
    slug: "kaos-polo-combed",
    title: "Kaos Polo Combed",
    description: "Polo Combed dibuat dari bahan katun combed yang lembut, halus, dan nyaman di kulit. Adem dipakai seharian dengan tampilan rapi dan lebih premium. Cocok untuk seragam kerja, komunitas, event, maupun brand fashion kasual.",
    image: KaosPoloCombed,
    features: [
      "Bahan katun combed lembut dan halus di kulit",
      "Adem dan nyaman dipakai seharian",
      "Menyerap keringat dengan baik",
      "Tampilan lebih rapi dan premium",
      "Fleksibel untuk gaya formal kasual maupun santai",
      "Cocok untuk seragam, komunitas, event, dan brand custom",
    ],
  },
  {
    slug: "jersey-club",
    title: "Jersey Club",
    description: "Jersey olahraga custom untuk klub atau tim Anda. Bahan dry-fit yang nyaman dan menyerap keringat.",
    image: JerseyBola,
    features: [
      "Bahan dry-fit premium",
      "Ringan dan breathable",
      "Full print sublimasi",
      "Desain bebas sesuai tim",
      "Awet dan tahan lama",
    ],
  },
  {
    slug: "tunik-custom",
    title: "Tunik Custom",
    description: "Tunik custom dengan berbagai model dan desain. Cocok untuk seragam kerja atau acara formal.",
    image: TunikCustom,
    features: [
      "Berbagai model tersedia",
      "Bahan nyaman dipakai seharian",
      "Cocok untuk seragam",
      "Bisa custom warna dan desain",
      "Jahitan rapi berkualitas",
    ],
  },
  {
    slug: "patch-logo-bordir",
    title: "Patch / Logo Bordir",
    description: "Logo atau patch custom dengan teknik bordir berkualitas tinggi. Awet dan tidak mudah rusak.",
    image: KaosUmkm,
    features: [
      "Teknik bordir komputer",
      "Hasil rapi dan detail",
      "Tahan cuci berulang",
      "Berbagai ukuran tersedia",
      "Bisa aplikasi di berbagai bahan",
    ],
  },
  {
    slug: "logo-print-custom",
    title: "Logo Print Custom",
    description: "Printing logo dengan berbagai teknik: DTF, Sablon, atau Digital Print. Hasil tajam dan tahan lama.",
    image: KaosDaycare,
    features: [
      "Teknik DTF, Sablon, Digital Print",
      "Warna cerah dan tajam",
      "Tahan lama tidak mudah retak",
      "Cocok untuk desain kompleks",
      "Hasil profesional",
    ],
  },
  {
    slug: "kemeja-custom",
    title: "Kemeja",
    description: "Kemeja Nagata Drill memadukan tampilan rapi dengan kekuatan bahan drill yang tebal dan tahan lama. Nyaman dipakai seharian, tetap terlihat profesional untuk aktivitas indoor maupun lapangan ringan.",
    image: Kemeja,
    features: [
      "Teknik DTF, Sablon, Digital Print",
      "Lebih awet & tidak mudah sobek",
      "Tampilan rapi dan terlihat profesional",
      "Nyaman untuk pemakaian harian maupun kerja lapangan",
      "Warna cenderung lebih tahan lama",
      "Cocok untuk seragam kerja, kemeja lapangan, dan outfit formal kasual",
    ],
  },
  {
    slug: "jaket-fleece",
    title: "Jaket Fleece",
    description: "Jaket Fleece Premium yang hangat, lembut, dan nyaman dipakai seharian. Bahannya tebal sedang namun tetap ringan, cocok untuk cuaca dingin maupun ruangan ber-AC. Desain simpel modern dengan resleting depan dan kantong samping fungsional, mudah dipadukan untuk aktivitas harian, seragam komunitas, atau kebutuhan custom brand.",
    image: Jaket,
    features: [
      "Hangat tanpa terasa berat",
      "Bahan lembut dan nyaman di kulit",
      "Cukup menyerap hawa dingin (cocok indoor & outdoor)",
      "Tetap nyaman dipakai lama, tidak kaku",
      "Tampilan kasual modern, mudah dipadukan",
      "Cocok untuk seragam, komunitas, dan custom",
    ],
  },
];

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="flex flex-col min-h-[60vh] items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
        <Link to="/catalog">
          <Button>Kembali ke Katalog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 shadow-md">
        <div className="container mx-auto px-4">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Katalog</span>
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary animate-fade-in">
            {product.title}
          </h1>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="order-1">
              <Card className="card-elegant overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-square object-cover"
                />
              </Card>
            </div>

            {/* Product Info */}
            <div className="order-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Deskripsi</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Keunggulan Produk</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`https://wa.me/6282228302403?text=Halo, saya tertarik dengan produk ${product.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="lg" className="w-full btn-primary-gradient">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Pesan Sekarang
                  </Button>
                </a>
                <a
                  href={`https://wa.me/6282228302403?text=Halo, bisa minta detail lebih lanjut tentang ${product.title}?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none"
                >
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Tanya Detail
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Lihat Produk Lainnya
          </h2>
          <p className="text-muted-foreground mb-6">
            Jelajahi berbagai pilihan produk kaos custom lainnya
          </p>
          <Link to="/catalog">
            <Button size="lg" variant="outline">
              Lihat Semua Produk
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
