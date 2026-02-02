import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/sections/Section";

export default function Services() {
  return (
    <Layout>
      {/* Page Header */}
      <Section className="pt-44 md:pt-52 lg:pt-64 pb-8 md:pb-12">
        <h1 className="text-center">Services</h1>
      </Section>

      {/* Services Overview */}
      <Section>
        <p>
          I provide therapy for individuals and families navigating emotional overload, identity strain, 
          and complicated family systems. Some clients also seek support for the emotional impact of 
          chronic physical conditions.
        </p>
      </Section>

      {/* Individual Therapy */}
      <Section narrow={false}>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 md:p-12">
            <h2 className="mb-6">Individual Therapy</h2>
          </div>
          <div className="bg-subtle p-8 md:p-12">
            <p>
              Individual therapy offers a private space to understand emotional reactions, self-worth, 
              and relationship patterns shaped by family dynamics and long-term stress.
            </p>
            <p>
              Adults often arrive carrying guilt, resentment, exhaustion, or deep self-criticism tied 
              to long-standing expectations. Children and adolescents work on emotional language, 
              regulation skills, confidence, and a stronger sense of self.
            </p>
            <p>
              Over time, clients often report clearer thinking, stronger self-trust, and greater 
              emotional steadiness.
            </p>
          </div>
        </div>
      </Section>

      {/* Family Therapy */}
      <Section narrow={false}>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 md:p-12">
            <h2 className="mb-6">Family Therapy</h2>
          </div>
          <div className="bg-subtle p-8 md:p-12">
            <p>
              Family therapy helps families talk differently to one another. We look at roles, 
              expectations, and long-standing patterns that create tension or distance.
            </p>
            <p>
              The goal is not to decide who is right, but to build understanding, boundaries, and 
              repair, especially when family dynamics or ongoing stress affect the household.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
