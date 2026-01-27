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
    answer: "I am based in Maryland.",
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
    answer: "A 48-hour notice is required for cancellations.",
  },
];

export default function Fees() {
  return (
    <Layout>
      {/* Fees */}
      <Section className="py-section-lg">
        <h1 className="mb-8 text-center">Fees & FAQ</h1>
        <div className="space-y-4">
          <p>Fifty-minute therapy session: $195</p>
          <p>Initial evaluation: $260</p>
          <p>Payment collected at time of service</p>
          <p>Card securely kept on file</p>
        </div>
      </Section>

      {/* Insurance */}
      <Section>
        <h2 className="mb-6">Insurance</h2>
        <p>
          I am an out-of-network provider. Superbills are available for clients who wish 
          to seek reimbursement through their insurance plans.
        </p>
      </Section>

      {/* Scheduling & Accessibility */}
      <Section>
        <h2 className="mb-6">Scheduling & accessibility</h2>
        <ul className="space-y-3">
          <li>Weekly or biweekly sessions when clinically appropriate</li>
          <li>Limited reduced-fee spots may be available</li>
          <li>Referrals provided if not the right financial fit</li>
        </ul>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="mb-8">Frequently asked questions</h2>
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
