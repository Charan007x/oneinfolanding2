import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function RefundPolicy() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16 max-w-4xl">
        <h1 className={`${bebasNeue.className} tracking-wide text-4xl md:text-5xl text-white uppercase mb-8`}>Refund Policy</h1>
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 whitespace-pre-wrap leading-relaxed">
          {`Refund, Cancellation & Payment Dispute Policy
Effective Date:  07 JAN 2025

This Refund, Cancellation & Payment Dispute Policy (“Policy”) governs all payments made for OneInfo.ai, a digital software product owned and operated by Nirbhavi Tech Innovations Private Limited, a company incorporated under the Companies Act, 2013 (“Company”, “we”, “us”, or “our”).
By initiating or completing any payment on OneInfo.ai, you (“User”) expressly acknowledge that you have read, understood, and agreed to be legally bound by this Policy, in addition to the Terms of Service and Privacy Policy.

1. Payment Plans & Service Nature
1.1 OneInfo.ai offers time-bound digital access plans, which may include:
* Monthly Plan (30-day access)
* Quarterly Plan (90-day access)
* Yearly Plan (365-day access)
1.2 All plans provide immediate access to digital software services, platform resources, automation systems, and infrastructure upon successful payment.
1.3 Payments are user-initiated and may be:
* Manual renewals, or
* One-time payments for the selected validity period
1.4 OneInfo.ai does not provide physical goods or refundable digital licenses.

2. Waiver of Right to Cancellation
2.1 By completing a payment, the User expressly acknowledges that:
* Digital services are consumed immediately upon activation
* Platform resources are allocated in real time
2.2 Accordingly, the User waives any right to cancellation or withdrawal once access is enabled, regardless of the selected plan duration (monthly, quarterly, or yearly).

3. No-Refund Policy (General Rule)
3.1 Except as expressly provided under Section 4, all payments are final, non-cancelable, and non-refundable.
3.2 This applies uniformly to:
* Monthly payments
* Quarterly payments
* Yearly payments
3.3 Refunds shall not be issued for:
* Partial usage or non-usage of any plan
* Early termination of use
* Dissatisfaction with features or results
* Failure to generate business outcomes
* Changes in third-party platform policies (e.g., Meta, Instagram)
* Suspension or termination due to violations
* Account inactivity or user negligence
* Pricing or feature modifications during the validity period

4. Exceptional Refund Eligibility (Strictly Limited)
4.1 The Company may, at its sole discretion, consider refunds only in the following exceptional cases:
a) Payment deducted but access not granted
b) Duplicate payment for the same plan period
c) Proven technical billing error attributable exclusively to Company systems
d) Prolonged, platform-wide service outage making the Service materially unusable
4.2 For Quarterly or Yearly plans, any approved refund (if applicable) shall be:
* Pro-rated strictly for the unused period, or
* Denied entirely where partial service has been delivered
4.3 No refund shall be granted once any material portion of the plan period has elapsed, unless required by law.

5. Refund Request Procedure
5.1 Refund requests must be submitted in writing.
5.2 Requests must be raised within 48 hours of the transaction date.
5.3 Each request must include:
* Registered user email
* Transaction ID
* Plan type (Monthly / Quarterly / Yearly)
* Detailed reason with supporting evidence
Requests must be sent to: support@oneinfo.ai
5.4 Requests submitted outside the stipulated timeframe shall be summarily rejected.

6. Evaluation & Final Decision
6.1 All refund requests undergo internal review.
6.2 The Company retains absolute discretion to:
* Accept or reject any refund request
* Determine eligibility and refund amount
* Apply deductions for taxes or gateway fees
6.3 The Company’s decision shall be final, binding, and non-appealable.

7. Refund Processing Timelines
7.1 Approved refunds, if any, will be processed to the original payment method.
7.2 Processing timelines may range from 7 to 14 business days, subject to:
* Payment gateway processing
* Banking timelines
* Regulatory checks

8. Taxes, Fees & Deductions
8.1 Any applicable:
* GST
* Payment gateway charges
* Transaction fees
may be deducted from the refunded amount or treated as non-refundable.

9. Chargebacks, Reversals & Payment Disputes
9.1 Users agree to contact OneInfo.ai support prior to initiating any chargeback.
9.2 Unauthorized chargebacks constitute a material breach of this Policy.
9.3 The Company reserves the right to:
* Immediately suspend or terminate the User’s account
* Contest chargebacks with payment gateways
* Recover associated administrative and legal costs

10. Limitation of Liability
10.1 To the maximum extent permitted under Indian law, the Company’s total liability relating to any refund or dispute shall not exceed the amount paid for the specific plan period in dispute.
10.2 The Company shall not be liable for indirect, incidental, or consequential losses.

11. Governing Law & Jurisdiction
This Policy shall be governed by the laws of India.
Exclusive jurisdiction shall vest in the courts of Hyderabad, Telangana, India.

12. Amendments to Policy
The Company reserves the right to amend or update this Policy at any time. Continued use of the Service constitutes acceptance of the revised Policy.

13. Contact Information
Nirbhavi Tech Innovations Private Limited
Product: OneInfo.ai
Email: support@oneinfo.ai
Address: 4th floor, SBR Gateway, Maxcure lane, Hitech City Main Rd, opp. Cyber Gateways, Hyderabad, Telangana 500081`}
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
