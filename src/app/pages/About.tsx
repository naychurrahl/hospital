import { Award, Heart, Target, Users } from "lucide-react";
import { hospital, leadership, certifications } from "../data.js";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Learn about our history, mission, and the dedicated team that makes {hospital.name} a trusted healthcare provider in the community.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Our History</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Founded in 1993, {hospital.name} began with a simple mission: to provide compassionate, high-quality healthcare to every member of our community. What started as a small clinic has grown into a full-service medical center.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                Over the past three decades, we have continuously invested in the latest medical technology, expanded our services, and recruited top medical talent from around the country. Today, we serve over 50,000 patients annually across all specialties.
              </p>
              <p className="text-gray-600 text-lg">
                Despite our growth, our commitment to personalized, patient-centered care remains unchanged. We treat every patient like family, ensuring they receive the attention and respect they deserve.
              </p>
            </div>
            <div className="relative h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcyMzcwMTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hospital Building"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                To provide exceptional, compassionate healthcare services that improve the health and well-being of the communities we serve. We are committed to delivering patient-centered care using advanced medical technology and evidence-based practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg">
                To be the healthcare provider of choice in our region, recognized for clinical excellence, innovation, and the highest standards of patient safety and satisfaction. We aspire to set the benchmark for quality healthcare delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl md:text-4xl mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experienced healthcare professionals dedicated to operational excellence and exceptional patient care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader) => (
              <div
                key={leader.id}
                className="bg-white p-6 rounded-lg border border-gray-200 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-blue-600">{leader.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg mb-1">{leader.name}</h3>
                <p className="text-blue-600 text-sm mb-3">{leader.title}</p>
                <p className="text-gray-600 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl md:text-4xl mb-4">Certifications & Accreditations</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our commitment to excellence is recognized by leading healthcare organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white p-6 rounded-lg border border-gray-200 flex gap-4"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Facility</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A state-of-the-art medical complex designed with patient comfort and advanced care in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">200+</div>
              <h3 className="text-xl mb-2">Hospital Beds</h3>
              <p className="text-gray-600">
                Private and semi-private rooms equipped with modern amenities
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">12</div>
              <h3 className="text-xl mb-2">Operating Rooms</h3>
              <p className="text-gray-600">
                Advanced surgical suites with cutting-edge technology
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">30+</div>
              <h3 className="text-xl mb-2">Specialties</h3>
              <p className="text-gray-600">
                Comprehensive medical services across all major specialties
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">24/7</div>
              <h3 className="text-xl mb-2">Emergency Care</h3>
              <p className="text-gray-600">
                Round-the-clock emergency services with rapid response
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">100+</div>
              <h3 className="text-xl mb-2">Physicians</h3>
              <p className="text-gray-600">
                Board-certified doctors with diverse specializations
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">500+</div>
              <h3 className="text-xl mb-2">Staff Members</h3>
              <p className="text-gray-600">
                Dedicated healthcare professionals committed to your care
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
