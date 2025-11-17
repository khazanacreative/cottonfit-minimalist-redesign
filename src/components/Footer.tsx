import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/cottonfit-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <img src={logo} alt="Cottonfit Logo" className="h-16 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kaos Custom Berkualitas dengan Bahan Cotton Combed Premium. 
              Solusi terbaik untuk kebutuhan kaos komunitas, gathering, dan daycare.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/catalog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Katalog Produk
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Jl. Bukit Kismadani Gg X No.51, Bluru, Sidoarjo, Jawa Timur
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <a href="https://wa.me/628113059222" className="hover:text-primary transition-colors block">
                    0811-3059-222
                  </a>
                  <a href="https://wa.me/6282228302403" className="hover:text-primary transition-colors block">
                    0822-2830-2403
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="https://instagram.com/cottonfit_wear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  @cottonfit_wear
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cottonfit. All rights reserved. Kaos asik, Moment epik.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
