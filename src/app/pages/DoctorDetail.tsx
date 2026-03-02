import { useParams, Link } from "react-router";
import { ArrowLeft, GraduationCap, Award, Briefcase } from "lucide-react";
import { doctors } from "../data.js";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function DoctorDetail() {
  const { slug } = useParams();
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl mb-4">Doctor Not Found</h1>
        <Link to="/doctors" className="text-blue-600 hover:underline">
          Back to Doctors
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Doctors
          </Link>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl mb-4">{doctor.name}</h1>
              <p className="text-xl text-blue-100 mb-2">{doctor.specialty}</p>
              <p className="text-lg text-blue-200">{doctor.experience} of experience</p>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl mb-6">About {doctor.name}</h2>
          <p className="text-gray-600 text-lg">{doctor.fullBio}</p>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl">Education & Training</h2>
          </div>
          <div className="space-y-3">
            {doctor.education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200"
              >
                {edu}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl">Areas of Specialization</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {doctor.specializations.map((spec, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                {spec}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl">Board Certifications</h2>
          </div>
          <div className="space-y-3">
            {doctor.certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Schedule an Appointment</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Ready to meet with {doctor.name}? Contact us to schedule your consultation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
