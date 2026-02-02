import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/sections/Section";

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <Section className="pt-44 md:pt-52 lg:pt-64 pb-8 md:pb-12">
        <h1 className="text-center">About</h1>
      </Section>

      {/* What Therapy Is Like */}
      <Section>
        <h2 className="mb-6">What Therapy Is Like</h2>
        <p>
          Many clients arrive outwardly steady and inwardly tired. Children may feel socially 
          out of step, overly self-critical, or unsure where they belong. Adults often carry 
          pressure shaped by family dynamics, long-standing responsibility, or identities built 
          around being capable and composed.
        </p>
        <p>
          Some clients also live with physical discomfort or chronic conditions that influence 
          how stress, identity, and emotional patterns show up day to day.
        </p>
        <p>
          Therapy is a quiet, steady space where nothing needs to be performed or held together. 
          We look carefully at what feels heavy, confusing, or hard to name and make sense of it 
          together in a way that supports real change. The goal is not to overhaul your life. 
          It is to make it more livable.
        </p>
      </Section>

      {/* How I Work */}
      <Section>
        <h2 className="mb-6">How I Work</h2>
        <p>
          The work is direct, thoughtful, and human. Sessions balance reflection with practical work. 
          We slow reactions down, examine patterns honestly, and translate insight into choices that 
          feel more grounded and sustainable.
        </p>
        <p>
          I am warm and collaborative, and I am also honest. I ask real questions and gently challenge 
          patterns that no longer serve you, while respecting that those patterns once helped you cope. 
          Over time, clients often describe feeling clearer, steadier, and less pulled around by emotion.
        </p>
      </Section>

      {/* Who This Practice Is For */}
      <Section>
        <h2 className="mb-6">Who This Practice Is For</h2>
        <p>
          This practice is a good fit for children and adults who are thoughtful, capable, and often 
          carrying more than they show.
        </p>
        <p>
          I work with children who struggle socially or feel out of place and want support building 
          confidence, emotional language, self-trust, and a clearer sense of identity.
        </p>
        <p>
          I also work with adults who grew up with emotionally complicated or demanding parents and 
          want space to understand how those experiences shaped them and how to live with more choice 
          and less obligation.
        </p>
        <p>
          Many clients function well in school, work, or family life while feeling internally stretched 
          thin. They may struggle with self-criticism, unclear boundaries, discomfort in their own bodies, 
          or a persistent sense of pressure that is difficult to name.
        </p>
        <p>
          Families sometimes seek therapy when communication feels strained or when long-standing patterns 
          no longer feel sustainable. The goal is not blame, but clarity and healthier ways of relating.
        </p>
      </Section>

      {/* The Focus of the Work */}
      <Section>
        <h2 className="mb-6">The Focus of the Work</h2>
        <p>
          The goal of therapy is not to remove sensitivity, loyalty, or responsibility. It is to help 
          you carry those qualities in a way that does not cost you your stability.
        </p>
        <p>
          We work toward steadiness rather than perfection, understanding instead of blame, and change 
          that fits the actual shape of your life and relationships.
        </p>
      </Section>

      {/* About Me */}
      <Section>
        <h2 className="mb-6">About Me</h2>
        <p>
          I am a Licensed Certified Social Worker Clinical in Maryland and Virginia and certified in 
          Cognitive Behavioral Therapy Plus. My training blends evidence-based practice with relational 
          depth, allowing therapy to remain structured while still feeling flexible and personal.
        </p>
        <p>
          My work draws from Acceptance and Commitment Therapy, Cognitive Behavioral Therapy, Compassion 
          Focused Therapy, and insight-oriented approaches. This allows us to address present-day challenges 
          while also understanding deeper emotional and relational patterns. Therapy is active and 
          collaborative, and what we explore in session is intentionally carried into daily life so 
          insight leads to meaningful, lasting change.
        </p>
      </Section>
    </Layout>
  );
}
