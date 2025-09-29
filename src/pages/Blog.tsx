import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Award, Users } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "SPIDA Wins Sustainable Land Use Award at LIFT-OFF 2025",
      excerpt: "We're proud to announce that SPIDA has been recognized for our innovative approach to sustainable agriculture and land management.",
      content: "At LIFT-OFF 2025, SPIDA was honored with the Sustainable Land Use Award, recognizing our commitment to transforming African agriculture through technology and sustainable practices. This award validates our mission to create inclusive, digitally connected agricultural ecosystems that benefit both farmers and the environment.",
      date: "2025-08-15",
      author: "SPIDA Team",
      category: "Awards",
      icon: Award,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 2,
      title: "Bringing Agritech Solutions to the People That Matter: SPIDA Onboards 1,000 Farmers in North-Central Nigeria",
      excerpt: "A milestone achievement as we successfully onboard 1,000 smallholder farmers across farming communities in Ilorin, Kwara State.",
      content: `At SPIDA, we believe technology should serve the people who matter most - the farmers who feed our communities. Across Africa, however, smallholder farmers are frequently overlooked. Fragmented production systems, limited access to education, and entrenched poverty have kept many of them from benefiting from agritech solutions that could dramatically improve their productivity and livelihoods.

This is the gap SPIDA is working to close. Between 24th and 28th July 2025, our team conducted an onboarding exercise and field surveys across the farming communities of Reke, Ori Eru, Afon, Ogbondoroko, and Asa L.G.A in Ilorin, Kwara State. The result was the successful onboarding of 1000 smallholder farmers onto the SPIDA platform which forms our first major step in building an inclusive, digitally connected agricultural ecosystem in North-Central Nigeria.

The onboarding process was designed to do more than simply add names to our platform. Farmers were registered and profiled into our database, and then grouped according to key characteristics such as crop type, farm size, income levels and location. They participated in orientation sessions where they were introduced to SPIDA's products and the benefits of digital agriculture, while a number of lead farmers were selected to serve as early adopters and peer connectors within their communities. This approach ensures that adoption is not only top-down but also community-driven.

This is the first step of many to provide farmers access to tools that were once out of reach. Onboarded farmers will have access to reliable and data-driven insights to guide planting, seamless access to affordable tractors. They are also directly connected to buyers and processors, through SPIDA's B2C and B2B marketplace giving them fairer prices and eliminating exploitative middlemen. Perhaps most importantly, these farmers can now have access to an automatically produced digital records of all farm transaction via SPIDA that can support access to financial services, opening a pathway toward true inclusion in the agricultural economy.

The excitement within the communities has been inspiring. One farmer summed it up best when he said: "I am personally excited about this initiative. It gives me hope for the future that I too can access tractors like bigger farmers to improve my yield. More importantly, knowing I won't have to worry about markets, and that I can secure better prices for my produce, is something we never expected. Thank you, SPIDA, we are ever ready to work with you."

For SPIDA, this milestone is only the beginning. With one thousand farmers now onboarded in Kwara State, we are committed to scaling this model across Nigeria and the African continent. Our focus remains on ensuring accessibility, inclusion, and productivity for smallholders everywhere.

Our mission is simple but bold: to digitally empower farmers, enabling them to farm smarter, be efficient, productive, and reduce food loss and exploitation posed by the prevailing poor market structures in Nigeria and by extension Africa.

SPIDA is building the future of African agriculture, one farmer at a time. If you are a farmer seeking digital solutions, a processor or buyer looking for transparent supply chains, or a partner who believes in empowering communities through technology, we invite you to join us. Together, we can create an Africa where farmers thrive and agriculture is powered by innovation.`,
      date: "2025-07-30",
      author: "SPIDA Field Team",
      category: "Impact",
      icon: Users,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                SPIDA
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Blog & News
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Stay updated with the latest developments in African agriculture technology and our impact across farming communities
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {blogPosts.map((post, index) => (
                <article key={post.id} className="max-w-4xl mx-auto">
                  <Card className="border-0 shadow-elegant overflow-hidden">
                    <CardHeader className="pb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${post.gradient} flex items-center justify-center`}>
                            <post.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-2">
                              {post.category}
                            </Badge>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <User className="w-4 h-4" />
                                <span>{post.author}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-bold leading-tight">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none text-foreground">
                        {post.content.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="mb-6 leading-relaxed text-muted-foreground">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      {/* Article Actions */}
                      <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border">
                        <Button variant="outline" className="flex-1">
                          Share Article
                        </Button>
                        <Button className="bg-gradient-primary hover:shadow-glow">
                          Learn More About Our Impact
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Stay Updated</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get the latest news about SPIDA's impact across African agriculture delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground"
                />
                <Button className="bg-gradient-primary hover:shadow-glow px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;