import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16 max-w-4xl">
        <h1 className={`${bebasNeue.className} tracking-wide text-4xl md:text-5xl text-white uppercase mb-8`}>Privacy Policy</h1>
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 whitespace-pre-wrap leading-relaxed">
          {`Privacy Policy
Last Updated: 07th JAN 2025

At Nirbhavi Tech Innovations Private Limited (“Nirbhavi Tech”, “we”, “our”, or “us”), we operate the product OneInfo.ai (the “Service”). We value your privacy and are committed to protecting the personal data entrusted to us.
This Privacy Policy explains how we collect, use, store, disclose, and safeguard personal data when you access or use OneInfo.ai, our website, mobile application, integrations, and related services (collectively, the “Platform”).

Scope of This Privacy Policy
This Privacy Policy applies to personal data processed by us relating to:
* Users of OneInfo.ai (individual creators, businesses, agencies)
* End users who interact with automation created via OneInfo.ai
* Website visitors
* Newsletter subscribers
* Event participants
* Prospective customers and business partners
Where OneInfo.ai processes data on behalf of users (for example, messages or leads collected through Instagram automation), we act as a data processor, and the user acts as the data controller.

1. How We Collect Personal Data
We collect personal data through the following sources:
a. Information You Provide Directly
* Account registration details (name, email, phone number)
* Connected social media accounts (Instagram, Facebook, Google, etc.)
* Support requests, emails, chats, and feedback
* Forms submitted on our website or within the app
* Event registrations and survey responses

b. Information Collected Automatically
* Device information (browser type, operating system)
* IP address and log data
* Usage activity within the app
* Feature interaction data
* Cookies and similar tracking technologies

c. Information from Third Parties
* Payment confirmation from payment gateways (e.g., Razorpay or other authorized providers)
* Social platform data from authorized integrations
* Analytics and infrastructure service providers

2. Types of Personal Data We Process
We may collect and process the following categories of personal data:
* Account Information: name, email, profile details, linked social accounts
* Payment Information: transaction ID, payment status, UPI or card reference (we do not store full card details)
* Communication Data: messages, emails, support tickets
* Usage & Technical Data: logs, IP address, device identifiers, app activity
* Customer Content: messages, comments, leads, and responses processed through automation
* Marketing Data: newsletter engagement, preferences

Sensitive Personal Data
Please do not upload or share sensitive personal data such as Aadhaar numbers, financial account details, health information, biometric data, or religious or political information.

3. Purpose of Processing Personal Data
We use personal data for the following purposes:
* To create and manage user accounts
* To provide and operate OneInfo.ai features
* To process monthly payments and transactions
* To communicate service updates and notifications
* To provide customer support
* To improve platform performance and security
* To conduct events, promotions, and surveys
* To comply with legal and regulatory obligations
* To prevent fraud, abuse, or unauthorized activity

4. Sharing of Personal Data
We do not sell personal data.
We may share data only in the following circumstances:
a. Service Providers
Third-party vendors who support:
* Payment processing
* Cloud hosting
* Analytics
* Customer support tools
These providers are bound by contractual confidentiality obligations.

b. Platform Integrations
Data may be exchanged with services you explicitly connect, such as:
* Instagram
* Facebook
* Google
* WhatsApp APIs
* Payment gateways

c. Legal & Compliance
We may disclose information when required by:
* Law
* Court orders
* Government or regulatory authorities

d. Business Transfers
In case of merger, acquisition, or restructuring, personal data may be transferred as part of business assets.

5. Your Data Protection Rights
You have the right to:
* Access your personal data
* Correct inaccurate information
* Request deletion of data
* Withdraw consent (where applicable)
* Object to processing
* Request data portability (where feasible)

To exercise your rights, contact us at:
support@oneinfo.ai

End Users of Our Customers
If your data is processed through automation created by a OneInfo.ai user, please contact that user directly, as they control the data.

6. Digital Personal Data Protection Act, 2023 (India)
We process personal data in accordance with the Digital Personal Data Protection Act, 2023 and applicable Indian laws. 

7. Data Retention
We retain personal data:
* As long as your account is active
* As required by applicable laws
* As necessary to resolve disputes or enforce agreements
Upon account deletion, data is deleted or anonymized unless legally required to retain it.

8. International Data Transfers
Your data may be stored or processed in India or other countries where our service providers operate. By using the Service, you consent to such transfers in accordance with applicable laws.

9. Children’s Privacy
OneInfo.ai is not intended for individuals under 18 years of age.
We do not knowingly collect data from minors. If we discover such data, we will delete it promptly.

10. Security Measures
We implement reasonable technical and organizational measures to protect personal data, including:
* Encrypted communication
* Access control
* Secure infrastructure
* Trusted payment gateway compliance
However, no system is 100% secure, and we cannot guarantee absolute security.

Security Breach Notification
If a data breach occurs that materially affects users, we will notify impacted users promptly.

11. Legal Basis for Processing (EEA / UK Users)
We process personal data based on:
* Contractual necessity
* Legitimate business interests
* Legal obligations
* User consent (where applicable)

12. California Residents’ Rights
California residents have rights under CCPA/CPRA, including:
* Right to know what data is collected
* Right to request deletion
* Right to non-discrimination
Requests can be submitted to:
support@oneinfo.ai

13. Changes to This Privacy Policy
We may update this Privacy Policy periodically. Material changes will be notified via the app or email. Continued use of the Service constitutes acceptance of the updated policy.

14. Contact Information
For privacy-related questions or requests:
Nirbhavi Tech Innovations Private Limited
Product: OneInfo.ai
Email: support@oneinfo.ai
Address; 4th floor, SBR Gateway, Maxcure lane, Hitech City Main Rd, opp. Cyber Gateways, Hyderabad, Telangana 500081.`}
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
