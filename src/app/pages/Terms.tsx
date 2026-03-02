import { FileText } from "lucide-react";
import { hospital } from "../data.js";

export default function Terms() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <FileText className="w-16 h-16 mb-6" />
          <h1 className="text-4xl md:text-5xl mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Please read these terms carefully before using our services or website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-8">Last Updated: March 2, 2026</p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using the services provided by {hospital.name}, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services or website.
            </p>

            <h2>Medical Services</h2>
            <h3>Patient Care</h3>
            <p>
              {hospital.name} is committed to providing quality healthcare services. However, we cannot guarantee specific medical outcomes. All treatments and procedures carry inherent risks that will be explained to you by your healthcare provider.
            </p>

            <h3>Patient Responsibilities</h3>
            <p>As a patient, you agree to:</p>
            <ul>
              <li>Provide accurate and complete medical history and information</li>
              <li>Follow the treatment plan prescribed by your healthcare provider</li>
              <li>Keep scheduled appointments or provide timely notice of cancellations</li>
              <li>Treat our staff, other patients, and visitors with respect</li>
              <li>Pay for services rendered according to our billing policies</li>
              <li>Inform us of any changes in your contact information or insurance coverage</li>
            </ul>

            <h3>Consent to Treatment</h3>
            <p>
              By seeking medical care at our facility, you consent to medical treatment, examinations, and procedures deemed necessary by your healthcare providers. Specific consent will be obtained for invasive procedures and surgeries.
            </p>

            <h2>Billing and Payment</h2>
            <h3>Financial Responsibility</h3>
            <p>
              You are responsible for payment of all services provided. We accept most major insurance plans, but you are responsible for:
            </p>
            <ul>
              <li>Verifying your insurance coverage and benefits</li>
              <li>Paying applicable deductibles, co-pays, and co-insurance</li>
              <li>Paying for services not covered by your insurance</li>
              <li>Updating insurance information in a timely manner</li>
            </ul>

            <h3>Payment Terms</h3>
            <p>
              Payment is expected at the time of service unless other arrangements have been made. We accept cash, checks, and major credit cards. For questions about billing, please contact our Billing Department at (555) 123-4568.
            </p>

            <h3>Collection</h3>
            <p>
              Unpaid accounts may be referred to a collection agency. You will be responsible for all collection costs, including reasonable attorney fees.
            </p>

            <h2>Appointment Policies</h2>
            <h3>Scheduling</h3>
            <p>
              Appointments can be scheduled by calling our office or through our website. We will make every effort to accommodate your preferred appointment time.
            </p>

            <h3>Cancellations</h3>
            <p>
              If you need to cancel or reschedule an appointment, please provide at least 24 hours notice. Repeated missed appointments without notice may result in discharge from our practice.
            </p>

            <h3>Late Arrivals</h3>
            <p>
              Please arrive 15 minutes before your scheduled appointment. Patients who arrive more than 15 minutes late may need to be rescheduled.
            </p>

            <h2>Medical Records</h2>
            <p>
              You have the right to access your medical records as outlined in our Privacy Policy. Requests for copies of medical records should be made in writing. A reasonable fee may be charged for copying and mailing records.
            </p>

            <h2>Website Use</h2>
            <h3>Acceptable Use</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use our website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit viruses or malicious code</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Collect information about other users</li>
            </ul>

            <h3>Content Accuracy</h3>
            <p>
              While we strive to provide accurate and up-to-date information on our website, we make no warranties about the completeness, reliability, or accuracy of the content. Medical information on our website is for educational purposes only and should not replace professional medical advice.
            </p>

            <h3>External Links</h3>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and images, is the property of {hospital.name} or its licensors and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {hospital.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or website. Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of these limitations may not apply to you.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless {hospital.name}, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your violation of these Terms of Service.
            </p>

            <h2>Telehealth Services</h2>
            <p>
              If you use our telehealth services, you acknowledge that:
            </p>
            <ul>
              <li>Telehealth visits are not appropriate for all medical conditions</li>
              <li>You are responsible for ensuring a private, secure location for your visit</li>
              <li>Technical difficulties may occur and could interrupt service</li>
              <li>The same billing and payment policies apply to telehealth visits</li>
            </ul>

            <h2>Emergency Disclaimer</h2>
            <p>
              <strong>
                If you are experiencing a medical emergency, call 911 immediately or go to the nearest emergency room. Do not use our website or contact forms for emergency medical needs.
              </strong>
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have questions about these Terms of Service, please contact:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg not-prose">
              <p className="mb-2"><strong>{hospital.name}</strong></p>
              <p className="mb-2">{hospital.address}</p>
              <p className="mb-2">Phone: {hospital.phone}</p>
              <p>Email: {hospital.email}</p>
            </div>

            <h2>Patient Rights</h2>
            <p>
              As a patient at {hospital.name}, you have the right to:
            </p>
            <ul>
              <li>Receive considerate and respectful care</li>
              <li>Know the names and roles of your healthcare providers</li>
              <li>Receive information about your diagnosis, treatment, and prognosis</li>
              <li>Participate in decisions about your care</li>
              <li>Refuse treatment (with certain exceptions in emergency situations)</li>
              <li>Privacy and confidentiality of your medical information</li>
              <li>Voice complaints without fear of retaliation</li>
              <li>Access your medical records</li>
            </ul>

            <h2>Entire Agreement</h2>
            <p>
              These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and {hospital.name} regarding the use of our services and website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
