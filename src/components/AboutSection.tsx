import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Info, Lightbulb, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Transform Africa's agricultural landscape through technology and innovation, ensuring every farmer thrives."
    },
    {
      icon: Target,
      title: "Our Values",
      description: "Integrity, sustainability, and empowerment guide everything we do for farming communities."
    },
    {
      icon: Lightbulb,
      title: "Our Innovation",
      description: "Cutting-edge technology meets local expertise to create solutions that actually work."
    },
    {
      icon: Users,
      title: "Our Community",
      description: "Building a network of successful farmers, partners, and stakeholders across Africa."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6">
            <Info className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">About SPIDA</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Changing Africa's
            <span className="block text-accent">Agricultural Story</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            For too long, Africa's agricultural sector has remained fragmented, inefficient, and unpredictable. 
            Farmers work hard, yet harvests are low, markets are unreliable, and profits disappear before they arrive.
          </p>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12 shadow-elegant border-accent/10">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At <strong className="text-foreground">SPIDA</strong>, we believe it's time to change this story. 
                Using advanced technology, smart data, and innovation tailored to Africa's realities, 
                we're creating a connected food system that delivers results.
              </p>
              
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg font-medium text-foreground mb-4">
                  Farmers no longer need to worry about:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-muted-foreground">
                  <div>• How to fund their inputs</div>
                  <div>• How to plough their fields</div>
                  <div>• How to access buyers</div>
                </div>
                <p className="text-lg font-semibold text-primary mt-4">
                  We handle it all. Farmers focus on what they love—growing food.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-elegant transition-all duration-300 group border-accent/10 hover:border-accent/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            Learn More About Our Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;