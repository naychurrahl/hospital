import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { doctors } from "../data.js";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Doctors() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-6">Our Doctors</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Meet our team of board-certified physicians dedicated to providing exceptional, personalized healthcare.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Link
                key={doctor.id}
                to={`/doctors/${doctor.slug}`}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-1 group-hover:text-blue-600 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 text-sm mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 mb-2">{doctor.experience} of experience</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{doctor.bio}</p>
                  <span className="text-blue-600 text-sm inline-flex items-center gap-1">
                    View Profile
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Schedule an Appointment</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Ready to meet with one of our specialists? Contact us to schedule your appointment today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
