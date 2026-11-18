
import { Link } from "react-router-dom";
import {
  FaCoffee,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  const email = "emmanuelkalagbada0@gmail.com";

  return (
    <footer className="bg-[#3B261B] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-[#78866B] flex items-center justify-center text-2xl">
                <FaCoffee />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  The Cozy Café
                </h2>
                <p className="text-xs text-[#C5A47E] tracking-widest">
                  COFFEE & COMFORT
                </p>
              </div>
            </Link>

            <p className="text-[#EAE1D2] leading-7 text-sm">
              A little place filled with good coffee,
              delicious food and beautiful moments.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#574033] flex items-center justify-center hover:bg-[#78866B] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#574033] flex items-center justify-center hover:bg-[#78866B] transition"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-[#EAE1D2] text-sm">
              <li>
                <Link to="/" className="hover:text-[#C5A47E] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#C5A47E] transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/menu" className="hover:text-[#C5A47E] transition">
                  Our Menu
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#C5A47E] transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Opening Hours
            </h3>

            <ul className="space-y-4 text-[#EAE1D2] text-sm">
              <li className="flex justify-between gap-3">
                <span>Monday - Friday</span>
                <span>9 AM - 10 PM</span>
              </li>

              <li className="flex justify-between gap-3">
                <span>Saturday</span>
                <span>9 AM - 11 PM</span>
              </li>

              <li className="flex justify-between gap-3">
                <span>Sunday</span>
                <span>10 AM - 9 PM</span>
              </li>
            </ul>

            <p className="text-xs text-[#C5A47E] mt-4">
              Illustrative hours — confirm with the client.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Get In Touch
            </h3>

            <p className="text-[#EAE1D2] text-sm leading-7 mb-5">
              Have questions or feedback? We'd love to hear from you.
            </p>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-sm text-[#EAE1D2] hover:text-[#C5A47E] transition break-all"
            >
              <FaEnvelope className="text-[#C5A47E] shrink-0" />
              {email}
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-7 bg-[#78866B] hover:bg-[#657456] text-white px-5 py-3 rounded-full text-sm transition"
            >
              Contact Us
              <FaArrowRight />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#604B3D]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#EAE1D2]">

          <p>
            © {new Date().getFullYear()} The Cozy Café. All rights reserved.
          </p>

          <p>
            Made with <span className="text-[#C5A47E]">♥</span> for coffee lovers.
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
