import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/sections/Section";
import { Button } from "@/components/ui/button";
import therapistPortrait from "@/assets/therapist-portrait.jpg";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="py-section-lg" narrow={false}>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="order-2 md:order-1 flex justify-center">
            <img 
              src={therapistPortrait} 
              alt="Therapist portrait" 
              className="w-full h-auto max-w-lg md:max-w-xl lg:max-w-2xl"
            />
          </div>
          
          {/* Right Column - Text Content */}
          <div className="order-1 md:order-2">
            <h1 className="mb-8">
              Thoughtful therapy for people who manage a great deal quietly.
            </h1>
            <p className="text-lg mb-4">
              I provide individualized therapy for children, adolescents, and adults who appear capable 
              and composed on the outside but feel overwhelmed, strained, or unsettled internally.
            </p>
            <p className="text-lg mb-10">
              My work often includes support around chronic stress, health changes, complex family 
              dynamics, boundary concerns, and emotional overload within high-functioning lives.
            </p>
            <Button variant="primary" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* The Experience Section */}
      <Section divider>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="mb-6">Support that respects your complexity.</h2>
          </div>
          <div>
            <p>
              Many of the clients I work with are accustomed to handling responsibility, expectations, 
              and pressure with little space to slow down. Life may look organized or successful from 
              the outside, yet internally there is fatigue, tension, or a sense that something feels off.
            </p>
            <p>
              Therapy here is intentionally calm, private, and focused. It is a space to think clearly, 
              speak freely, and address what has been pushed aside while managing everything else.
            </p>
          </div>
        </div>
      </Section>

      {/* What Therapy Feels Like */}
      <Section>
        <h3 className="mb-6">Grounded. Attentive. Human.</h3>
        <p>
          My approach is warm, direct, and collaborative. Sessions are conversational and thoughtfully 
          paced, allowing room for both reflection and practical problem-solving.
        </p>
        <p>
          Clients often describe therapy as stabilizing and clarifying. It becomes a place where things 
          begin to make more sense, emotional pressure eases, and next steps feel more manageable. While 
          the work can be meaningful and serious, it does not need to feel heavy or clinical to be effective.
        </p>
      </Section>

      {/* Who This Practice Is For */}
      <Section className="bg-subtle">
        <p>
          This may be a good fit if you are managing high levels of responsibility or expectation, 
          navigating internal stress that is not visible to others, or living within a complex or 
          demanding family system.
        </p>
        <p>
          You may be adjusting to health changes or ongoing medical concerns, struggling with 
          boundaries or self-trust, or feeling emotionally fatigued despite outward stability. 
          This practice is well suited for those seeking discreet, high-quality therapeutic support.
        </p>
        <div className="mt-8">
          <Button variant="primary" asChild>
            <Link to="/contact">Begin the Conversation</Link>
          </Button>
        </div>
      </Section>

      {/* The Work */}
      <Section>
        <h3 className="mb-6">Care that fits into a full life.</h3>
        <p>
          Therapy is not about fixing you or dismantling what already works. It is about creating 
          steadiness, understanding patterns, and addressing what has been quietly weighing on you 
          so your life feels more sustainable and aligned.
        </p>
      </Section>
    </Layout>
  );
}
