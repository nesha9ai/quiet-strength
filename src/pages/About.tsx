import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/sections/Section";

export default function About() {
  return (
    <Layout>
      {/* My Approach */}
      <Section className="py-section-lg">
        <h1 className="mb-8 text-center">About</h1>
        <p>
          I am a Licensed Certified Social Worker Clinical based in Maryland, providing therapy 
          for children, adolescents, and adults. My work is informed by a deep respect for 
          emotional nuance, relational complexity, and the realities of living a demanding life.
        </p>
        <p>
          I understand what it means to navigate responsibility, internal pressure, and health-related 
          challenges while still needing to function day to day. This perspective shapes a therapeutic 
          style that is steady, honest, and attentive, offering support without intrusion and insight 
          without judgment.
        </p>
      </Section>

      {/* Therapy Philosophy */}
      <Section>
        <h2 className="mb-6">Therapy philosophy</h2>
        <p>
          Change rarely happens all at once. Therapy works best when it feels safe, thoughtful, 
          and responsive rather than rushed or prescriptive.
        </p>
        <p>
          I focus on helping clients develop emotional awareness, internal regulation, and practical 
          clarity that supports long-term wellbeing, not just short-term relief.
        </p>
      </Section>

      {/* Credentials */}
      <Section>
        <h2 className="mb-6">Credentials</h2>
        <ul className="space-y-3 text-foreground">
          <li>Licensed Certified Social Worker Clinical — Maryland</li>
          <li>Certified in Cognitive Behavioral Therapy Plus</li>
        </ul>
      </Section>
    </Layout>
  );
}
