import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistSection from "@/components/WaitlistSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Tractor, BarChart3, ShoppingCart, ExternalLink, CheckCircle, Zap, Shield } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "SpiTractor",
      icon: Tractor,
      title: "Smart Farm Mechanization",
      description: "Revolutionary tractor sharing platform that makes mechanization accessible to smallholder farmers through AI-powered virtual farm clusters.",
      features: [
        "AI-driven farmer clustering for optimal tractor matching",
        "Affordable shared tractor services", 
        "3x yield increase through mechanization",
        "Local language AI extension agents",
        "Real-time farming advice and diagnostics"
      ],
      benefits: [
        "Reduces manual labor by 80%",
        "Increases farm productivity by 300%",
        "Saves 40% on farming costs"
      ],
      website: "https://spitractors.spida.africa/",
      gradient: "from-blue-500 to-cyan-500",
      status: "Live"
    },
    {
      name: "SpiOptima", 
      icon: BarChart3,
      title: "Agricultural Intelligence Platform",
      description: "Advanced AI platform providing climate insights, smart financing, and data-driven farming decisions for sustainable agriculture.",
      features: [
        "Precision weather forecasting and climate analysis",
        "AI-powered farm simulation and planning tools",
        "Alternative credit scoring for farmers",
        "Risk assessment for financial institutions",
        "Predictive analytics for crop insurance"
      ],
      benefits: [
        "Reduces farming risks by 60%",
        "Increases loan approval rates by 45%",
        "Improves crop yield predictions by 85%"
      ],
      website: "https://spioptima.spida.africa/",
      gradient: "from-green-500 to-emerald-500",
      status: "Live"
    },
    {
      name: "SpiCommerce",
      icon: ShoppingCart,
      title: "Integrated Marketplace & Logistics",
      description: "End-to-end agricultural commerce platform connecting farmers directly with buyers, eliminating middlemen and ensuring fair prices.",
      features: [
        "Direct farmer-to-buyer marketplace",
        "Verified logistics partners with live tracking",
        "Quality assurance and food safety standards",
        "B2B bulk supply for hotels and processors",
        "Smart inventory management system"
      ],
      benefits: [
        "Increases farmer income by 50%",
        "Reduces food waste by 50%",
        "Eliminates 70% of middleman costs"
      ],
      website: "https://spi-ecommerce.spida.africa/",
      gradient: "from-purple-500 to-pink-500",
      status: "Live"
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Our Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-12 text-foreground leading-tight">
                Complete Agricultural
                <span className="block bg-gradient-primary bg-clip-text text-transparent leading-tight">
                  Technology Suite
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Three integrated platforms that transform every aspect of farming - from mechanization and financing to market access and logistics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Tractor className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Mechanization</h3>
                  <p className="text-sm text-muted-foreground">Smart tractor sharing</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Intelligence</h3>
                  <p className="text-sm text-muted-foreground">AI-powered insights</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Commerce</h3>
                  <p className="text-sm text-muted-foreground">Direct market access</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {products.map((product, index) => (
                <Card key={product.name} className="border-0 shadow-elegant overflow-hidden">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                    {/* Content Side */}
                    <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.gradient} flex items-center justify-center`}>
                          <product.icon className="w-8 h-8 text-white" />
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {product.status}
                        </Badge>
                      </div>
                      
                      <h2 className="text-3xl font-bold mb-4 text-foreground">{product.title}</h2>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Key Features</h3>
                        <ul className="space-y-3">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Benefits */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Impact</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {product.benefits.map((benefit, idx) => (
                            <div key={idx} className="text-center p-4 bg-muted/50 rounded-lg">
                              <div className="text-2xl font-bold text-primary mb-1">
                                {benefit.split(' ')[0]}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {benefit.split(' ').slice(1).join(' ')}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          size="lg" 
                          className="bg-gradient-primary hover:shadow-glow"
                          onClick={() => window.open(product.website, '_blank')}
                        >
                          Explore {product.name}
                          <ExternalLink className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="lg">
                          Request Demo
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                    
                    {/* Visual Side */}
                    <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                      <div className={`h-full min-h-[400px] bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                        <div className="text-center text-white">
                          <product.icon className="w-24 h-24 mx-auto mb-4 opacity-90" />
                          <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                          <p className="text-white/80 max-w-xs mx-auto">
                            {product.name === 'SpiTractor' ? 'Smart mechanization for every farmer' : 
                             product.name === 'SpiOptima' ? 'AI-powered agricultural intelligence' : 
                             'Direct market access and logistics'}
                          </p>
                        </div>
                        <div className="absolute inset-0 bg-black/10"></div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Ready to Start?</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Transform Your Farm with
                <span className="block text-primary">SPIDA's Technology</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join 1,000+ farmers already using our integrated platform to increase yields, access financing, and connect directly with markets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1,000+</div>
                  <div className="text-muted-foreground">Active Farmers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <div className="text-muted-foreground">Average Yield Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-muted-foreground">Farmer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;