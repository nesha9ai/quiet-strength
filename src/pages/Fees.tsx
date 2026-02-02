import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/sections/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Where are you located?",
    answer: "My practice is based in Maryland. Sessions are currently offered virtually, with in-person availability planned.",
  },
  {
    question: "Are sessions virtual or in-person?",
    answer: "Sessions are currently virtual, with in-person availability planned.",
  },
  {
    question: "How long are sessions?",
    answer: "Each session is 50 minutes.",
  },
  {
    question: "Do you accept insurance?",
    answer: "I am an out-of-network provider. Superbills are provided for clients who wish to seek reimbursement.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "A 48-hour notice is required for cancellations or rescheduling.",
  },
];

export default function Fees() {
  return (
    <Layout>
      {/* Page Header */}
      <Section className="pt-32 md:pt-40 pb-8 md:pb-12">
        <h1 className="text-center">Fees & FAQ</h1>
      </Section>

      {/* Fees */}
      <Section>
        <h2 className="mb-6">Fees and Scheduling</h2>
        <div className="space-y-4">
          <p>Fifty-minute therapy session: $195</p>
          <p>Initial evaluation: $260</p>
          <p>Invoices are provided at the end of each month, with payment due by the fifth.</p>
          <p>A secure card is kept on file for payment processing.</p>
          <p>I am an out-of-network provider and can provide superbills for reimbursement.</p>
        </div>
      </Section>

      {/* Scheduling */}
      <Section>
        <h2 className="mb-6">Scheduling</h2>
        <p>
          Sessions are typically weekly or biweekly and are determined collaboratively based on need. 
          When appropriate, referrals can be provided to ensure access to the right level of support.
        </p>
      </Section>

      {/* Location and Availability */}
      <Section>
        <h2 className="mb-6">Location and Availability</h2>
        <p>
          My practice is based in Maryland. Sessions are currently offered virtually, with in-person 
          availability planned. A forty-eight hour notice is required for cancellations or rescheduling.
        </p>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-neutral/50">
              <AccordionTrigger className="text-left font-body text-base font-normal hover:no-underline hover:text-primary py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </Layout>
  );
}
