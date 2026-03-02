import { Shield } from "lucide-react";
import { hospital } from "../data.js";

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Shield className="w-16 h-16 mb-6" />
          <h1 className="text-4xl md:text-5xl mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal and medical information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-8">Last Updated: March 2, 2026</p>

            <h2>Introduction</h2>
            <p>
              {hospital.name} is committed to protecting the privacy and security of your personal and health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in accordance with the Health Insurance Portability and Accountability Act (HIPAA) and other applicable laws.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>Name, address, phone number, and email address</li>
              <li>Date of birth and Social Security number</li>
              <li>Insurance information</li>
              <li>Emergency contact information</li>
            </ul>

            <h3>Medical Information</h3>
            <p>We collect health information necessary to provide quality medical care, including:</p>
            <ul>
              <li>Medical history and current health conditions</li>
              <li>Medications and allergies</li>
              <li>Test results and diagnostic information</li>
              <li>Treatment plans and clinical notes</li>
              <li>Billing and payment information</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li><strong>Treatment:</strong> To provide, coordinate, and manage your healthcare</li>
              <li><strong>Payment:</strong> To bill and collect payment for services rendered</li>
              <li><strong>Healthcare Operations:</strong> To improve quality of care, train staff, and operate our facility</li>
              <li><strong>Legal Requirements:</strong> To comply with laws and regulations</li>
              <li><strong>Public Health:</strong> To report certain diseases and health threats as required by law</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Other healthcare providers involved in your care</li>
              <li>Insurance companies for payment and coverage purposes</li>
              <li>Family members or others you authorize</li>
              <li>Public health authorities when required by law</li>
              <li>Law enforcement when required by court order or law</li>
            </ul>
            <p>
              We will not use or disclose your health information for marketing purposes or sell your information without your written authorization.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and obtain a copy of your medical records</li>
              <li>Request corrections to your medical information</li>
              <li>Request restrictions on how we use or disclose your information</li>
              <li>Request confidential communications</li>
              <li>Receive a list of disclosures we have made</li>
              <li>File a complaint if you believe your privacy rights have been violated</li>
              <li>Obtain a paper copy of this Privacy Policy</li>
            </ul>

            <h2>Security Measures</h2>
            <p>
              We implement appropriate physical, technical, and administrative safeguards to protect your information from unauthorized access, use, or disclosure. These measures include:
            </p>
            <ul>
              <li>Secure electronic health record systems</li>
              <li>Encrypted data transmission</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular security training for staff</li>
              <li>Physical security measures for facilities and records</li>
            </ul>

            <h2>Website Privacy</h2>
            <p>
              When you visit our website, we may collect certain information automatically, including your IP address, browser type, and pages visited. We use this information to improve our website and user experience. We do not collect personal health information through our website without your consent.
            </p>

            <h3>Cookies</h3>
            <p>
              Our website uses cookies to enhance user experience. You can choose to disable cookies through your browser settings, though this may limit some website functionality.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              We are committed to protecting the privacy of children. Parents or legal guardians have the right to access their child's medical records and make decisions regarding the use and disclosure of their child's health information.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Privacy Policy at any time. Changes will be posted on our website and made available at our facilities. The revised policy will apply to all information we maintain.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg not-prose">
              <p className="mb-2"><strong>Privacy Officer</strong></p>
              <p className="mb-2">{hospital.name}</p>
              <p className="mb-2">{hospital.address}</p>
              <p className="mb-2">Phone: {hospital.phone}</p>
              <p>Email: {hospital.email}</p>
            </div>

            <h2>HIPAA Notice</h2>
            <p>
              This Privacy Policy serves as our Notice of Privacy Practices as required by HIPAA. You have the right to receive a paper copy of this notice upon request. For more detailed information about your HIPAA rights, please ask our staff for a copy of our complete Notice of Privacy Practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
