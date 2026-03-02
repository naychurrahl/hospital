import { Link, useLocation } from "react-router";
import { Phone, Menu, X } from "lucide-react";
import { hospital } from "../data.js";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/doctors", label: "Doctors" },
    { path: "/gallery", label: "Gallery" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Emergency Strip */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-sm">
          <Phone className="w-4 h-4" />
          <span>Emergency: {hospital.emergencyPhone}</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">24/7 Emergency Services Available</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">+</span>
            </div>
            <div>
              <div className="text-xl font-semibold text-gray-900">{hospital.name}</div>
              <div className="text-xs text-gray-600">{hospital.tagline}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  isActive(link.path)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${hospital.phone}`}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">{hospital.phone}</span>
            </a>
            <Link
              to="/emergency"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
            >
              Emergency
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 text-sm transition-colors ${
                  isActive(link.path)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-3 border-t mt-2">
              <a
                href={`tel:${hospital.phone}`}
                className="flex items-center gap-2 text-gray-700 mb-3"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">{hospital.phone}</span>
              </a>
              <Link
                to="/emergency"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
              >
                Emergency
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
