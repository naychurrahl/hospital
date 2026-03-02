import { Link } from "react-router";
import { ArrowRight, Phone, MapPin, Heart, Brain, Baby, Activity, Award, Star } from "lucide-react";
import { hospital, services, doctors, blogPosts, galleryItems, testimonials } from "../data.js";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const featuredServices = services.slice(0, 4);
  const featuredDoctors = doctors.slice(0, 3);
  const latestPosts = blogPosts.slice(0, 3);
  const featuredGallery = galleryItems.slice(0, 6);

  const getServiceIcon = (iconName: string) => {
    const icons = {
      heart: Heart,
      brain: Brain,
      baby: Baby,
      activity: Activity,
    };
    const Icon = icons[iconName as keyof typeof icons] || Heart;
    return <Icon className="w-8 h-8" />;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcyMzcwMTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hospital"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6">
              {hospital.tagline}
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              {hospital.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors border border-blue-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Info Strip */}
      <section className="bg-red-50 border-y border-red-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-red-600" />
              <div>
                <div className="text-sm text-gray-600">Emergency Hotline</div>
                <div className="text-lg text-red-600">{hospital.emergencyPhone}</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-red-200"></div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-red-600" />
              <div>
                <div className="text-sm text-gray-600">Location</div>
                <div className="text-lg text-gray-900">24/7 Emergency Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">
                Welcome to {hospital.name}
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                For over 30 years, we have been dedicated to providing exceptional healthcare services to our community. Our state-of-the-art facilities, combined with our team of experienced medical professionals, ensure that you receive the best possible care.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                We believe in treating the whole person, not just the illness. Our patient-centered approach focuses on compassionate care, advanced medicine, and positive outcomes.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769456338697-13e702d51eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHdhcmQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI0Mzc3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hospital Interior"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive healthcare services delivered by experienced professionals using state-of-the-art technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredServices.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {getServiceIcon(service.icon)}
                </div>
                <h3 className="text-xl mb-2 group-hover:text-blue-600">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <span className="text-blue-600 text-sm inline-flex items-center gap-1">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Meet Our Doctors
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our team of board-certified physicians is dedicated to providing exceptional care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {featuredDoctors.map((doctor) => (
              <Link
                key={doctor.id}
                to={`/doctors/${doctor.slug}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-1 group-hover:text-blue-600">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 text-sm mb-3">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm">{doctor.bio}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              View All Doctors
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Facilities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              State-of-the-art medical facilities designed for patient comfort and advanced care
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {featuredGallery.map((item) => (
              <div
                key={item.id}
                className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              View Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Latest Health News
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay informed with the latest health tips, news, and research from our medical experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {latestPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-blue-600 mb-2 uppercase tracking-wide">
                    {post.category.replace("_", " ")}
                  </div>
                  <h3 className="text-lg mb-2 group-hover:text-blue-600 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              Read More Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              What Our Patients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real experiences from real patients who trusted us with their care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">{testimonial.text}</p>
                <p className="text-sm">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl mb-4">
            Need Medical Assistance?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our team is available 24/7 to help you with any medical concerns or emergencies
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${hospital.phone}`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <Link
              to="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors border border-blue-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
