import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react";
import { hospital } from "../data.js";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white">+</span>
              </div>
              <div className="text-white font-semibold">{hospital.name}</div>
            </div>
            <p className="text-sm mb-4">{hospital.description}</p>
            <div className="flex gap-3">
              <a
                href={hospital.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={hospital.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={hospital.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={hospital.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-blue-400 transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition-colors">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="hover:text-blue-400 transition-colors">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>{hospital.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div>General: {hospital.phone}</div>
                  <div className="text-red-400">Emergency: {hospital.emergencyPhone}</div>
                </div>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${hospital.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {hospital.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white mb-4">Opening Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-red-400 mb-1">{hospital.hours.emergency}</div>
                  <div>{hospital.hours.general}</div>
                  <div>{hospital.hours.weekend}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>
              © {currentYear} {hospital.name}. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
