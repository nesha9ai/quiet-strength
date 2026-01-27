import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/sections/Section";

export default function Services() {
  return (
    <Layout>
      {/* Services Overview */}
      <Section className="py-section-lg">
        <h1 className="mb-8 text-center">Services</h1>
        <p>
          I offer individual therapy for children, adolescents, and adults navigating internal 
          strain within otherwise high-functioning lives. Common areas of focus include emotional 
          overwhelm, family complexity, health-related adjustment, boundary concerns, and periods 
          of transition.
        </p>
      </Section>

      {/* Individual Therapy */}
      <Section narrow={false}>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 md:p-12">
            <h2 className="mb-6">Individual therapy</h2>
          </div>
          <div className="bg-subtle p-8 md:p-12">
            <p>
              Individual therapy provides a private, structured space to explore thoughts, 
              emotions, and patterns that may be impacting daily life.
            </p>
            <p>
              For adults, therapy often focuses on stress, identity, relationships, or the 
              emotional impact of health or life changes. For children and adolescents, 
              sessions emphasize emotional regulation, communication, and navigating 
              developmental or family-related stressors.
            </p>
            <p>
              Over time, clients often experience greater clarity, steadiness, and a renewed 
              sense of internal balance.
            </p>
          </div>
        </div>
      </Section>

      {/* How I Work */}
      <Section>
        <h2 className="mb-6">How I work</h2>
        <p>
          I use Cognitive Behavioral Therapy alongside insight-oriented approaches. This allows 
          us to address present-day patterns while also understanding how past experiences shape 
          current responses.
        </p>
        <p>
          The work is collaborative, intentional, and designed to translate into real-world change.
        </p>
      </Section>
    </Layout>
  );
}
