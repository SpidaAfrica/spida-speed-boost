import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success" as "success" | "error",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name === 'full_name' ? 'name' : e.target.name;
    setFormData({
      ...formData,
      [fieldName]: e.target.value
    });
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("list_name", "contact_form");

    try {
      const res = await fetch("https://forms.spida.africa/waitlist.php", {
        method: "POST",
        body: data,
        mode: "cors",
      });
      const json = await res.json();
      if (json.ok) {
        setToast({
          show: true,
          message: json.message || "Your message has been received. We'll be in touch.",
          variant: "success",
        });
        form.reset();
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setToast({
          show: true,
          message: json.error || "Something went wrong.",
          variant: "error",
        });
      }
    } catch (err) {
      setToast({
        show: true,
        message: "Network error. Try again.",
        variant: "error",
      });
    } finally {
      setTimeout(() => {
        setToast((t) => ({ ...t, show: false }));
      }, 4000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@spida.africa",
      description: "Get in touch for partnerships and inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+2347089540773",
      description: "Speak directly with our team"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Lagos, Nigeria",
      description: "Our headquarters in West Africa"
    }
  ];

  return (
    <>
      {/* Toast Notification */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-300 ${
          toast.show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div
          className={`rounded-lg px-4 py-3 shadow-lg text-sm ${
            toast.variant === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {toast.message}
        </div>
      </div>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Mail className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform
            <span className="block text-primary">Your Farm?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of farmers already benefiting from SPIDA's integrated agricultural solutions. 
            Let's discuss how we can help optimize your farming operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-elegant transition-all duration-300 border-primary/10 hover:border-primary/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {info.details}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Additional Info */}
            <Card className="p-6 bg-gradient-earth border-accent/20">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Why Choose SPIDA?
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>✓ No upfront costs</div>
                <div>✓ Pay after harvest</div>
                <div>✓ 24/7 support</div>
                <div>✓ Proven track record</div>
                <div>✓ Local expertise</div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-elegant">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <input type="hidden" name="list_name" value="contact_form" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="full_name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your farming operations and how we can help..."
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;