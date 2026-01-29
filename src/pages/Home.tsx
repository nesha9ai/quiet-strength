import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import therapistPortrait from "@/assets/therapist-portrait.jpg";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Asymmetric Two-Column */}
      <section className="pt-44 md:pt-52 lg:pt-64 pb-20 md:pb-28">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column - Image (58% width) */}
            <div className="order-2 lg:order-1 lg:col-span-7">
              <div className="relative">
                <img 
                  src={therapistPortrait} 
                  alt="Therapist portrait" 
                  className="w-full h-auto rounded-2xl object-cover"
                  style={{ maxHeight: '75vh' }}
                />
              </div>
            </div>
            
            {/* Right Column - Text (42% width, aligned with image) */}
            <div className="order-1 lg:order-2 lg:col-span-5">
              <div className="lg:pr-4">
                <h1 className="text-heading">
                  Thoughtful therapy<br className="hidden sm:block" />
                  for people who<br className="hidden sm:block" />
                  manage a great deal<br className="hidden sm:block" />
                  quietly.
                </h1>
                
                <div className="mt-10 space-y-7 max-w-md">
                  <p>
                    I provide individualized therapy for children, adolescents, and adults who appear capable 
                    and composed on the outside but feel overwhelmed, strained, or unsettled internally.
                  </p>
                  <p>
                    My work often includes support around chronic stress, health changes, complex family 
                    dynamics, boundary concerns, and emotional overload within high-functioning lives.
                  </p>
                </div>
                
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" size="lg" asChild className="px-8 py-6 text-base">
                    <Link to="/contact">Schedule a Consultation</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="px-8 py-6 text-base border-primary text-primary hover:bg-primary/5">
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — The Experience */}
      <section className="pt-36 md:pt-44 pb-24 md:pb-32">
        <div className="container-editorial">
          {/* Section Label */}
          <p className="section-label">— The Experience</p>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2>Support that respects your complexity.</h2>
            </div>
            <div className="max-w-lg">
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
          
          {/* Editorial Divider */}
          <div className="my-20 md:my-28">
            <div className="divider-editorial"></div>
          </div>
        </div>
      </section>

      {/* Section 3 — What Therapy Feels Like */}
      <section className="pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="container-narrow">
          <p className="section-label">— The Approach</p>
          <h3 className="mb-8">Grounded. Attentive. Human.</h3>
          <p>
            My approach is warm, direct, and collaborative. Sessions are conversational and thoughtfully 
            paced, allowing room for both reflection and practical problem-solving.
          </p>
          <p>
            Clients often describe therapy as stabilizing and clarifying. It becomes a place where things 
            begin to make more sense, emotional pressure eases, and next steps feel more manageable. While 
            the work can be meaningful and serious, it does not need to feel heavy or clinical to be effective.
          </p>
        </div>
      </section>

      {/* Section 4 — Who This Practice Is For */}
      <section className="pt-24 md:pt-32 pb-20 md:pb-24">
        <div className="container-narrow">
          <p className="section-label">— Is This For You</p>
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
          <div className="mt-10">
            <Button variant="primary" size="lg" asChild className="px-8 py-6 text-base">
              <Link to="/contact">Begin the Conversation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5 — The Work */}
      <section className="pt-24 md:pt-32 pb-28 md:pb-36">
        <div className="container-narrow">
          <p className="section-label">— The Work</p>
          <h3 className="mb-8">Care that fits into a full life.</h3>
          <p>
            Therapy is not about fixing you or dismantling what already works. It is about creating 
            steadiness, understanding patterns, and addressing what has been quietly weighing on you 
            so your life feels more sustainable and aligned.
          </p>
        </div>
      </section>
    </Layout>
  );
}
