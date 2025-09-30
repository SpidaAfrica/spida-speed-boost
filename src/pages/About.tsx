import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle overflow-visible">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center overflow-visible">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-normal overflow-visible">
                Transforming Africa's
                <span className="block bg-gradient-primary bg-clip-text text-transparent leading-normal">
                  Agricultural Future
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                For too long, Africa's agricultural sector has remained fragmented, inefficient, and unpredictable. 
                At SPIDA, we believe it's time to change this story.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Using advanced technology, smart data, and innovation tailored to Africa's realities, 
                  we're creating a connected food system that delivers higher productivity, guaranteed 
                  logistics, and assured sales to paying customers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <span className="text-foreground">Higher productivity per acre</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-primary" />
                    <span className="text-foreground">Guaranteed logistics and access to finance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-primary" />
                    <span className="text-foreground">Assured sales to paying customers</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-subtle rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">What We Handle</h3>
                <p className="text-muted-foreground mb-6">
                  Farmers no longer need to worry about the complexities of modern agriculture. 
                  We handle it all so farmers can focus on what they love—growing food.
                </p>
                <ul className="space-y-3 text-foreground">
                  <li>✓ Input funding and financing</li>
                  <li>✓ Field preparation and mechanization</li>
                  <li>✓ Market access and buyer connections</li>
                  <li>✓ Logistics and transportation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From fragmentation to connected food system, inefficiency to abundance, 
                and from surviving to thriving. We envision an Africa where every farmer 
                prospers through technology-enabled agriculture.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Join Our Mission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the visionary leaders driving SPIDA's mission to transform African agriculture through technology and innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Daniel Agbojo */}
              <div className="bg-gradient-subtle rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">DA</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Daniel Agbojo</h3>
                <p className="text-primary font-semibold mb-4">CEO/Co-founder</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Data analytics specialist with expertise in AI & Sustainable Agriculture, 
                  Sales and Marketing. Leading SPIDA's strategic vision and growth.
                </p>
              </div>

              {/* Marvin Daniels */}
              <div className="bg-gradient-subtle rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">MD</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Marvin Daniels</h3>
                <p className="text-primary font-semibold mb-4">CSO/Co-founder</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  6+ years in West African agribusiness, Sustainable food systems expert, 
                  Business Development. Driving sustainable agricultural practices.
                </p>
              </div>

              {/* Triumphant Akinola */}
              <div className="bg-gradient-subtle rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">TA</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Triumphant Akinola</h3>
                <p className="text-primary font-semibold mb-4">CTO/Co-Founder</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  5+ years experience Software Engineer, AI Solutions Engineer, 
                  Innovating AI Solutions, GENAI Leader. Building the technology backbone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1K+</div>
                <div className="text-muted-foreground">Farmers Connected</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50%</div>
                <div className="text-muted-foreground">Expected Yield Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">Market Survey Acceptance</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;