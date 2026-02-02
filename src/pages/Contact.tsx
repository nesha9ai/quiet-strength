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
      {/* Page Header */}
      <Section className="pt-32 md:pt-40 pb-8 md:pb-12">
        <h1 className="text-center">Contact</h1>
      </Section>

      {/* Getting Started */}
      <Section>
        <h2 className="mb-6">Getting Started</h2>
        <p>
          If you are considering therapy, you are welcome to reach out. You can expect a response 
          within one to two business days. We will begin with a brief consultation to see whether 
          working together feels like a good fit.
        </p>
        <p>
          The first session is an evaluation focused on understanding your history and goals. 
          No preparation is required.
        </p>
      </Section>

      {/* Contact Form */}
      <Section>
        <h2 className="mb-6">Send a Message</h2>
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
    </Layout>
  );
}
