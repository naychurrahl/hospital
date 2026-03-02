import { Link } from "react-router";
import { ArrowRight, Heart, Brain, Baby, Activity, Bone, Scan } from "lucide-react";
import { services } from "../data.js";

export default function Services() {
  const getServiceIcon = (iconName: string) => {
    const icons = {
      heart: Heart,
      brain: Brain,
      baby: Baby,
      activity: Activity,
      bone: Bone,
      scan: Scan,
    };
    const Icon = icons[iconName as keyof typeof icons] || Heart;
    return <Icon className="w-10 h-10" />;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive healthcare services across all major medical specialties, delivered by experienced professionals using state-of-the-art technology.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {getServiceIcon(service.icon)}
                </div>
                <h3 className="text-2xl mb-3 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Need Help Choosing a Service?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Our patient coordinators are available to help you find the right specialist and schedule an appointment.
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
