import { useParams, Link } from "react-router";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { services, doctors } from "../data.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl mb-4">Service Not Found</h1>
        <Link to="/services" className="text-blue-600 hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  const relatedDoctors = doctors.filter((doc) =>
    service.relatedDoctors.includes(doc.id)
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl mb-4">{service.name}</h1>
          <p className="text-xl text-blue-100">{service.department}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl mb-6">Overview</h2>
          <p className="text-gray-600 text-lg">{service.overview}</p>
        </div>
      </section>

      {/* Conditions Treated */}
      {service.conditionsTreated && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl mb-8">Conditions We Treat</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.conditionsTreated.map((condition, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Procedures */}
      {service.procedures && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl mb-8">Procedures & Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.procedures.map((procedure, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{procedure}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Equipment */}
      {service.equipment && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl mb-8">Advanced Equipment & Technology</h2>
            <div className="space-y-3">
              {service.equipment.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Doctors */}
      {relatedDoctors.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl mb-8">Our Specialists</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedDoctors.map((doctor) => (
                <Link
                  key={doctor.id}
                  to={`/doctors/${doctor.slug}`}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group flex gap-4"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl mb-1 group-hover:text-blue-600">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 text-sm mb-2">{doctor.specialty}</p>
                    <p className="text-gray-600 text-sm line-clamp-2">{doctor.bio}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Schedule an Appointment</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us to schedule a consultation with one of our specialists
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
