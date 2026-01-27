import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/sections/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. You can expect a response within one to two business days.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Get Started */}
      <Section className="py-section-lg">
        <h1 className="mb-8 text-center">Contact</h1>
        <p>
          If you are considering therapy, you are welcome to reach out. You can expect a 
          response within one to two business days, and we will schedule a brief consultation 
          to determine whether working together feels appropriate.
        </p>
      </Section>

      {/* Contact Form */}
      <Section>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background border-neutral/50 focus:border-primary focus:ring-0"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background border-neutral/50 focus:border-primary focus:ring-0"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background border-neutral/50 focus:border-primary focus:ring-0 resize-none"
            />
          </div>
          
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
        </form>
      </Section>

      {/* First Session */}
      <Section>
        <h2 className="mb-6">Your first session</h2>
        <p>
          The initial session is an evaluation focused on understanding your needs, goals, 
          and expectations. This is a calm, professional starting point, and no preparation 
          is required.
        </p>
      </Section>
    </Layout>
  );
}
