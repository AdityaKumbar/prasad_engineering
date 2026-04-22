import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUpRight, Shield } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Company", to: "/about/company" },
    { label: "Founders & Leadership", to: "/about/founders" },
    { label: "Certifications", to: "/about/certifications" },
    { label: "Why Us", to: "/why-us" },
  ],
  Services: [
    { label: "Aluminium Casting", to: "/services/aluminium-casting" },
    { label: "Rubber Industry Services", to: "/services/rubber" },
    { label: "Industries We Serve", to: "/industries" },
  ],
  Connect: [
    { label: "Contact Us", to: "/contact" },
    { label: "Get a Quote", to: "/contact" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-2 border-t border-white/5">
      <div className="container-max section-padding py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Prasad Engineering"
                className="h-10 w-auto"
                width={459}
                height={453}
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="leading-tight">
                <span className="block text-lg font-display font-bold tracking-wide text-white">PRASAD</span>
                <span className="block text-[10px] tracking-[0.2em] text-steel-400 uppercase">Engineering</span>
              </div>
            </Link>
            <p className="text-sm text-steel-400 leading-relaxed max-w-xs">
              Precision aluminium casting and rubber component manufacturing from Belagavi.
              Trusted by 916+ companies across India for 35+ years.
            </p>
            <ul className="space-y-2 pt-2">
              <li className="flex items-start gap-2 text-sm text-steel-400">
                <MapPin size={15} className="text-brand-400 mt-0.5 shrink-0" />
                Plot No. 9/A, BEMCIEL Industrial Estate, Udyambag, Belagavi - 590008, Karnataka, India
              </li>
              <li>
                <a
                  href="tel:+917204339500"
                  className="flex items-center gap-2 text-sm text-steel-400 hover:text-brand-400 transition-colors"
                >
                  <Phone size={15} className="text-brand-400" />
                  +91 72043 39500 / +91 94484 80832
                </a>
              </li>
              <li>
                <a
                  href="mailto:prasad.engineering@rediffmail.com"
                  className="flex items-center gap-2 text-sm text-steel-400 hover:text-brand-400 transition-colors"
                >
                  <Mail size={15} className="text-brand-400" />
                  prasad.engineering@rediffmail.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:prasad.engineering.15official@gmail.com"
                  className="flex items-center gap-2 text-sm text-steel-400 hover:text-brand-400 transition-colors"
                >
                  <Mail size={15} className="text-brand-400" />
                  prasad.engineering.15official@gmail.com
                </a>
              </li>
            </ul>
            <p className="text-xs text-steel-500 mt-1">GSTIN: 29AACFP1265C2ZH</p>
            <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-xs text-brand-300">
              <Shield size={13} />
              ISO Certified Manufacturer
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-steel-400 mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.to + link.label}>
                    <Link
                      to={link.to}
                      className="group flex items-center gap-1.5 text-sm text-steel-400 hover:text-brand-400 transition-colors duration-150"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 -translate-y-0.5 translate-x-0 group-hover:translate-x-0.5 transition-all duration-150"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-max section-padding py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-steel-500">
          <p>© {year} Prasad Engineering. All rights reserved.</p>
          <p>
            Designed & Developed by{" "}
            <a
              href="https://cubiccode.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition-colors"
            >
              CUBICCODE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
