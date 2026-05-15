import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waMessage = `Halo Cottonfit!

Nama: ${formData.name}
Email: ${formData.email}
No. WhatsApp: ${formData.phone}
Jenis Pesanan: ${formData.orderType}

Pesan:
${formData.message}`;

    const waUrl = `https://wa.me/6282228302403?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, "_blank");

    toast.success("Membuka WhatsApp...");

    setFormData({ name: "", email: "", phone: "", orderType: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundColor: "#ffffff" }} className="flex flex-col">
      {/* Hero Section */}
      <section style={{ backgroundColor: "#ffffff" }} className="pt-10 pb-4">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="h-12 w-12 mx-auto mb-3 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-primary animate-fade-in">
            Hubungi Kami
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Kami siap membantu mewujudkan kebutuhan kaos custom Anda. Jangan ragu untuk bertanya!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ backgroundColor: "#ffffff" }} className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Contact Information */}
            <div className="space-y-4 bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div>
                <h2 className="text-3xl font-bold mb-3">Informasi Kontak</h2>
                <p className="text-muted-foreground text-base mb-4">
                  Hubungi kami melalui salah satu channel di bawah ini. Tim kami siap melayani Anda!
                </p>
              </div>

              <Card className="card-elegant p-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Alamat Gudang</h3>
                    <p className="text-muted-foreground text-sm">
                      Jl. Bukit Kismadani Gg X No.51<br />
                      Bluru, Sidoarjo, Jawa Timur
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="card-elegant p-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <div className="space-y-2">
                      <a
                        href="https://wa.me/628113059222"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>0811-3059-222</span>
                      </a>
                      <a
                        href="https://wa.me/6282228302403"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>0822-2830-2403</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="card-elegant p-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Instagram className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <a
                      href="https://instagram.com/cottonfit_wear"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      @cottonfit_wear
                    </a>
                  </div>
                </div>
              </Card>

              {/* Google Maps */}
              <Card className="card-elegant overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.151617475759!2d112.72305412454872!3d-7.443518973345264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e73e860771c5%3A0xc0319574652846ca!2sKantor%20%26%20Gudang%20Cottonfit!5e1!3m2!1sen!2sus!4v1769908921745!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cottonfit Location"
                ></iframe>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="card-elegant p-8">
                <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">Nama Lengkap *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Masukkan nama Anda" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="email@contoh.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">No. WhatsApp *</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="08xxx" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="orderType">Jenis Pesanan *</Label>
                    <Input id="orderType" name="orderType" value={formData.orderType} onChange={handleChange} placeholder="Contoh: Kaos Komunitas, Kaos Daycare, dll" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message">Pesan *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Ceritakan detail kebutuhan Anda..." rows={4} required className="mt-2" />
                  </div>
                  <Button type="submit" className="w-full btn-primary-gradient" size="lg">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Kirim via WhatsApp
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Pesan akan dikirim melalui WhatsApp Anda
                  </p>
                </form>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;