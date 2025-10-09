import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is SPIDA's mission?",
      answer: "Our mission is to transform Africa's agricultural sector by creating a connected food system that delivers higher productivity, guaranteed logistics, and assured sales. We use advanced technology, smart data, and innovation tailored to Africa's realities to help farmers thrive instead of just survive."
    },
    {
      question: "What is SPIDA's vision for the future?", 
      answer: "We envision an Africa where every farmer prospers through technology-enabled agriculture. Our goal is to move from fragmentation to a connected food system, from inefficiency to abundance, and from surviving to thriving. We want to unlock Africa's vast agricultural potential."
    },
    {
      question: "How does SPIDA support smallholder farmers?",
      answer: "We support farmers through our three main products: SpiTractor for affordable mechanization, SpiOptima for smart financing and climate intelligence, and SpiCommerce for direct market access. We handle input funding, field preparation, market connections, and logistics so farmers can focus on growing food."
    },
    {
      question: "What technologies does SPIDA use?",
      answer: "We use AI-driven virtual farm clusters, climate data analytics, machine learning for credit scoring, IoT sensors for farm monitoring, mobile technology for extension services, and blockchain for supply chain transparency. Our technology stack is designed specifically for African agricultural contexts."
    },
    {
      question: "How does SpiTractor work?",
      answer: "SpiTractor groups farmers in nearby communities and matches them with tractors for shared services at affordable costs. Our AI-powered system optimizes tractor scheduling and routing. We also provide AI extension agents that speak local languages and offer real-time advice and diagnostics."
    },
    {
      question: "What is SpiOptima?",
      answer: "SpiOptima is our agri-intelligence platform that uses climate data to predict weather, simulate farms for better planning, and build farmer credit profiles from non-traditional data. It helps farmers access better loans while reducing risk for banks through data-driven models."
    },
    {
      question: "How does SPIDA's e-marketplace work?",
      answer: "Our SpiCommerce platform connects farmers directly to consumers and businesses, eliminating middlemen. We provide verified transport partners, real-time tracking, and quality guarantees. This reduces food waste by up to 50% while ensuring fair, transparent pricing for farmers."
    },
    {
      question: "What are SPIDA's success rates?",
      answer: "We've connected over 10,000 farmers, helped increase yields by 50% on average, optimized over 200,000 acres of farmland, and maintain a 95% success rate across our programs. Our integrated approach ensures sustainable results for all stakeholders."
    },
    {
      question: "How can I get started with SPIDA?",
      answer: "Getting started is easy! Contact us through our website or call our local representatives. We'll assess your farming needs, explain how SPIDA's solutions can help, and create a customized plan for your farm. Our team provides full support throughout the onboarding process."
    },
    {
      question: "Do you provide training and support?",
      answer: "Yes, we provide comprehensive training and ongoing support. Our AI extension agents offer real-time guidance in local languages, and our field teams provide hands-on training for new technologies and farming practices. We're committed to ensuring every farmer succeeds."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Frequently Asked
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Everything you need to know about SPIDA and our agricultural solutions
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-foreground">Still have questions?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our team is here to help you understand how SPIDA can transform your farming operations
              </p>
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Contact Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;