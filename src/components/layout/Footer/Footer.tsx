import {


  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#161616] border-t text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/images/whitelogo.png"
                alt="Stationero"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              We promise we'll get back to you promptly– your gifting needs are
              always on our minds!
            </p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <BsTwitter className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaYoutube className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-6">
            <h3 className="text-md font-semibold">USEFUL LINKS</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Contact Us",
                "Delivery Policy",
                "FAQ's",
                "Privacy Policy",
                "Return Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Section */}
          <div className="space-y-6">
            <h3 className="text-md font-semibold">SHOP</h3>
            <ul className="space-y-3">
              {["Shop", "Blog News", "New Arrivals", "Keywords", "Sitemap"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Need Help Section */}
          <div className="space-y-6">
            <h3 className="text-md font-semibold">NEED HELP</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#FF4C6E]" />
                <Link
                  to="tel:+84-01234-5678"
                  className="text-[#FF4C6E] font-medium"
                >
                  (+84)-01234 - 5678
                </Link>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-gray-400 mt-1" />
                <div className="text-sm text-gray-400">
                  <p>Monday – Friday: 9:00-20:00</p>
                  <p>Saturday: 11:00 – 15:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <Link
                  to="mailto:demo@demo.com"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  demo@demo.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container text-center  justify-center mx-auto px-4 py-6 flex flex-col sm:flex-row  items-center">
     
          <p className="text-gray-400 text-xs">
            Copyright © 2021 stationero. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
