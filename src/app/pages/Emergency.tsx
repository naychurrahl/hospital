import { Link } from "react-router";
import { Phone, Clock, AlertCircle, Navigation } from "lucide-react";
import { hospital } from "../data.js";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Emergency() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <AlertCircle className="w-16 h-16 mb-6" />
          <h1 className="text-4xl md:text-5xl mb-6">Emergency Services</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Life-threatening emergencies require immediate attention. Our Emergency Department is open 24/7 to provide rapid, expert care.
          </p>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-6">In Case of Emergency</h2>
          <div className="max-w-2xl mx-auto">
            <a
              href={`tel:${hospital.emergencyPhone}`}
              className="inline-flex items-center gap-3 bg-red-600 text-white px-12 py-5 rounded-lg hover:bg-red-700 transition-colors text-2xl mb-6"
            >
              <Phone className="w-8 h-8" />
              {hospital.emergencyPhone}
            </a>
            <p className="text-gray-600 text-lg">
              For life-threatening emergencies, call 911 immediately or come directly to our Emergency Department.
            </p>
          </div>
        </div>
      </section>

      {/* When to Visit the ER */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8">When to Visit the Emergency Room</h2>
            <p className="text-gray-600 text-lg mb-8">
              Seek immediate emergency care if you or someone you're with is experiencing:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-red-600 shadow-sm">
                <h3 className="text-xl mb-4">Life-Threatening Symptoms</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Chest pain or pressure</li>
                  <li>• Difficulty breathing or shortness of breath</li>
                  <li>• Severe bleeding that won't stop</li>
                  <li>• Loss of consciousness or altered mental state</li>
                  <li>• Sudden severe headache or vision changes</li>
                  <li>• Signs of stroke (face drooping, arm weakness, speech difficulty)</li>
                  <li>• Severe allergic reaction</li>
                  <li>• Major trauma or injury</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-red-600 shadow-sm">
                <h3 className="text-xl mb-4">Other Urgent Symptoms</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Severe abdominal pain</li>
                  <li>• High fever with stiff neck or rash</li>
                  <li>• Severe burns</li>
                  <li>• Poisoning or drug overdose</li>
                  <li>• Seizures</li>
                  <li>• Severe cuts requiring stitches</li>
                  <li>• Broken bones with visible deformity</li>
                  <li>• Coughing or vomiting blood</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8">What to Expect in Our Emergency Department</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">1. Triage</h3>
                <p className="text-gray-600">
                  Upon arrival, a triage nurse will assess your condition and prioritize treatment based on the severity of your symptoms. Life-threatening conditions receive immediate attention.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">2. Registration</h3>
                <p className="text-gray-600">
                  You'll provide basic information and insurance details. In critical situations, treatment begins before registration is complete.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">3. Medical Evaluation</h3>
                <p className="text-gray-600">
                  An emergency physician will examine you, order necessary tests, and develop a treatment plan. This may include blood work, imaging, or other diagnostic procedures.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">4. Treatment</h3>
                <p className="text-gray-600">
                  Our team will provide necessary medical treatment, which may include medications, procedures, or surgery depending on your condition.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3">5. Discharge or Admission</h3>
                <p className="text-gray-600">
                  Depending on your condition, you'll either be discharged with instructions for follow-up care or admitted to the hospital for continued treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location and Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Clock className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl mb-4">Hours</h3>
                <p className="text-gray-600 text-lg mb-4">
                  Our Emergency Department is open 24 hours a day, 7 days a week, including all holidays.
                </p>
                <p className="text-red-600 text-xl">24/7 Emergency Care</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Navigation className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl mb-4">Location</h3>
                <p className="text-gray-600 mb-4">{hospital.address}</p>
                <p className="text-gray-600 mb-4">
                  Follow signs for "Emergency" when you arrive. Free parking is available near the Emergency entrance.
                </p>
                <Link to="/contact" className="text-blue-600 hover:underline">
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8">What to Bring</h2>
            <p className="text-gray-600 text-lg mb-6">
              If possible, bring the following items with you to the Emergency Department:
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
                <li>• Photo ID</li>
                <li>• Insurance card</li>
                <li>• List of current medications</li>
                <li>• List of allergies</li>
                <li>• Medical history information</li>
                <li>• Contact information for your primary care physician</li>
              </ul>
              <p className="text-gray-500 text-sm mt-6">
                Note: Don't delay coming to the ER if you don't have these items. Your health is the priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1721114989769-0423619f03d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGVtZXJnZW5jeSUyMHJvb218ZW58MXx8fHwxNzcyMzcyOTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Emergency Department"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
