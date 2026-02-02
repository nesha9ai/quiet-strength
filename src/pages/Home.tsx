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
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  Open Blinds Psychotherapy
                </p>
                <h1 className="text-heading">
                  Therapy for kids<br className="hidden sm:block" />
                  who don't fit in<br className="hidden sm:block" />
                  and adults shaped<br className="hidden sm:block" />
                  by difficult parents.
                </h1>
                
                <p className="mt-6 text-lg italic text-muted-foreground">
                  Letting light in, at your own pace.
                </p>
                
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

      {/* Section 2 — Welcome */}
      <section className="pt-36 md:pt-44 pb-24 md:pb-32">
        <div className="container-editorial">
          <p className="section-label">— Welcome</p>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2>Support for those carrying more than they show.</h2>
            </div>
            <div className="max-w-lg">
              <p>
                I work with children who struggle to fit in and adults shaped by difficult family 
                dynamics whose lives often look steady from the outside but feel heavy on the inside. 
                Many people arrive feeling capable and composed while quietly carrying pressure, 
                confusion, or self-doubt that rarely has space to be spoken out loud.
              </p>
              <p>
                Children often come to therapy with concerns around self-esteem, social belonging, 
                identity, or the impact of feeling different or misunderstood. These experiences can 
                show up as anxiety, withdrawal, behavioral changes, or a growing sense that something 
                about them is wrong, even when they are bright and perceptive.
              </p>
              <p>
                Adults often arrive wanting to understand how family roles, expectations, and 
                long-standing patterns continue to shape how they think, relate, and live. Many grew 
                up learning how to be responsible, composed, or emotionally contained and are now 
                feeling burned out, disconnected from themselves, or unsure how to live outside those roles.
              </p>
            </div>
          </div>
          
          <div className="my-20 md:my-28">
            <div className="divider-editorial"></div>
          </div>
        </div>
      </section>

      {/* Section 3 — The Meaning Behind Open Blinds */}
      <section className="pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="container-narrow">
          <p className="section-label">— The Name</p>
          <h3 className="mb-8">The Meaning Behind Open Blinds</h3>
          <p>
            The name Open Blinds reflects how I think about therapy. We are not forcing anything open. 
            We are adjusting slowly and intentionally, letting in understanding and self-awareness in 
            a way that feels safe enough to stay.
          </p>
          <p>
            Change that is rushed rarely lasts. Change that happens at the right pace becomes integrated. 
            You set the pace, and my role is to walk alongside you while it happens.
          </p>
        </div>
      </section>

      {/* Section 4 — The Goal */}
      <section className="pt-24 md:pt-32 pb-20 md:pb-24">
        <div className="container-narrow">
          <p className="section-label">— The Goal</p>
          <p>
            Therapy offers a place to slow down and make sense of what has been carried quietly. 
            The goal is not to escape your life, but to understand it more clearly and build a 
            steadier way of moving through it. We work at a pace that respects your nervous system. 
            Nothing is rushed. Insight unfolds gradually and tends to last.
          </p>
          <div className="mt-10">
            <Button variant="primary" size="lg" asChild className="px-8 py-6 text-base">
              <Link to="/contact">Begin the Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
