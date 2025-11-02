import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Building2, ArrowRight, CheckCircle, Truck, Percent, AlertCircle } from "lucide-react";
import { useState } from "react";
import { validateForm, sanitizeInput, ValidationResult } from "@/utils/validation";

const WaitlistSection = () => {
  const [individualFormData, setIndividualFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [companyFormData, setCompanyFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    companyType: ""
  });
  const [isIndividualOpen, setIsIndividualOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success" as "success" | "error",
  });

  const handleIndividualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndividualFormData({
      ...individualFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyFormData({
      ...companyFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleCompanyTypeChange = (value: string) => {
    setCompanyFormData({
      ...companyFormData,
      companyType: value
    });
  };

  const [individualErrors, setIndividualErrors] = useState<string[]>([]);
  const [companyErrors, setCompanyErrors] = useState<string[]>([]);

  const handleIndividualSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(individualFormData.name),
      email: sanitizeInput(individualFormData.email),
      phone: sanitizeInput(individualFormData.phone)
    };
    
    // Validate form
    const validation: ValidationResult = validateForm(sanitizedData);
    
    if (!validation.isValid) {
      setIndividualErrors(validation.errors);
      return;
    }
    
    // Clear errors
    setIndividualErrors([]);
    
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get("list_name")) {
      data.set("list_name", "alpha_waitlist");
    }

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
          message: json.message || "You're on the waitlist 🎉",
          variant: "success",
        });
        form.reset();
        setIndividualFormData({ name: "", email: "", phone: "" });
        setIsIndividualOpen(false);
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

  const handleCompanySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(companyFormData.name),
      company: sanitizeInput(companyFormData.company),
      email: sanitizeInput(companyFormData.email),
      phone: sanitizeInput(companyFormData.phone),
      companyType: companyFormData.companyType
    };
    
    // Validate form
    const validation: ValidationResult = validateForm(sanitizedData);
    
    if (!validation.isValid) {
      setCompanyErrors(validation.errors);
      return;
    }
    
    // Clear errors
    setCompanyErrors([]);
    
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get("list_name")) {
      data.set("list_name", "beta_waitlist");
    }

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
          message: json.message || "You're on the waitlist 🎉",
          variant: "success",
        });
        form.reset();
        setCompanyFormData({ name: "", company: "", email: "", phone: "", companyType: "" });
        setIsCompanyOpen(false);
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

      <section id="waitlist" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Fresh from Farm to Table
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Join Our Waitlist Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Be the first to enjoy <span className="text-primary font-semibold">10% discount</span> and <span className="text-primary font-semibold">free delivery</span> on your first purchase of fresh, direct-from-farm produce
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">10% Discount</h3>
              <p className="text-muted-foreground">Exclusive discount on your first order</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Delivery</h3>
              <p className="text-muted-foreground">Complimentary delivery on first purchase</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fresh & Direct</h3>
              <p className="text-muted-foreground">Straight from our partner farmers</p>
            </div>
          </div>

          {/* Waitlist Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Individual Customer */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Join as Individual</CardTitle>
                <CardDescription className="text-lg">
                  Perfect for families and individuals who want fresh, quality produce
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">10% discount on first order</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Free delivery on first purchase</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Access to premium farm products</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Direct connection with farmers</span>
                  </div>
                </div>
                
                <Dialog open={isIndividualOpen} onOpenChange={setIsIndividualOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-primary hover:shadow-glow">
                      Join as Individual
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Join Our Waitlist - Individual</DialogTitle>
                      <DialogDescription>
                        Be the first to access fresh produce from our partner farmers
                      </DialogDescription>
                    </DialogHeader>
                    <form 
                      onSubmit={handleIndividualSubmit}
                      className="space-y-4"
                    >
                      <input type="hidden" name="list_name" value="alpha_waitlist" />
                      
                      {individualErrors.length > 0 && (
                        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                          <div className="flex items-center space-x-2 text-destructive">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">Please fix the following errors:</span>
                          </div>
                          <ul className="mt-2 text-sm text-destructive space-y-1">
                            {individualErrors.map((error, index) => (
                              <li key={index}>• {error}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <Input
                        name="full_name"
                        placeholder="Full Name"
                        value={individualFormData.name}
                        onChange={(e) => setIndividualFormData({...individualFormData, name: e.target.value})}
                        required
                        className={individualErrors.some(e => e.includes('Name')) ? 'border-destructive' : ''}
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={individualFormData.email}
                        onChange={(e) => setIndividualFormData({...individualFormData, email: e.target.value})}
                        required
                        className={individualErrors.some(e => e.includes('email')) ? 'border-destructive' : ''}
                      />
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={individualFormData.phone}
                        onChange={(e) => setIndividualFormData({...individualFormData, phone: e.target.value})}
                        className={individualErrors.some(e => e.includes('phone')) ? 'border-destructive' : ''}
                      />
                      <input type="text" name="company_name" value="" style={{display: 'none'}} />
                      <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow">
                        Join Waitlist
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Company/Business */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Join as Company</CardTitle>
                <CardDescription className="text-lg">
                  Ideal for restaurants, retailers, and businesses sourcing quality produce
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Bulk pricing and volume discounts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Priority access to premium products</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Dedicated account manager</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Custom supply chain solutions</span>
                  </div>
                </div>
                
                <Dialog open={isCompanyOpen} onOpenChange={setIsCompanyOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-primary hover:shadow-glow">
                      Join as Company
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Join Our Waitlist - Company</DialogTitle>
                      <DialogDescription>
                        Access premium produce for your business needs
                      </DialogDescription>
                    </DialogHeader>
                    <form 
                      onSubmit={handleCompanySubmit}
                      className="space-y-4"
                    >
                      <input type="hidden" name="list_name" value="beta_waitlist" />
                      <input type="hidden" name="company_type" value={companyFormData.companyType} />
                      
                      {companyErrors.length > 0 && (
                        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                          <div className="flex items-center space-x-2 text-destructive">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">Please fix the following errors:</span>
                          </div>
                          <ul className="mt-2 text-sm text-destructive space-y-1">
                            {companyErrors.map((error, index) => (
                              <li key={index}>• {error}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <Input
                        name="full_name"
                        placeholder="Contact Person Name"
                        value={companyFormData.name}
                        onChange={(e) => setCompanyFormData({...companyFormData, name: e.target.value})}
                        required
                        className={companyErrors.some(e => e.includes('Name')) ? 'border-destructive' : ''}
                      />
                      <Input
                        name="company_name"
                        placeholder="Company Name"
                        value={companyFormData.company}
                        onChange={(e) => setCompanyFormData({...companyFormData, company: e.target.value})}
                        required
                      />
                      <Select value={companyFormData.companyType} onValueChange={handleCompanyTypeChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Company Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="food-beverage">Food and Beverage Company</SelectItem>
                          <SelectItem value="food-processor">Food Processor</SelectItem>
                          <SelectItem value="hotel">Hotel</SelectItem>
                          <SelectItem value="restaurant">Restaurant</SelectItem>
                          <SelectItem value="grocery-store">Grocery Store</SelectItem>
                          <SelectItem value="supermarket">Supermarket</SelectItem>
                          <SelectItem value="retailer">Retailer</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Business Email"
                        value={companyFormData.email}
                        onChange={(e) => setCompanyFormData({...companyFormData, email: e.target.value})}
                        required
                      />
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={companyFormData.phone}
                        onChange={(e) => setCompanyFormData({...companyFormData, phone: e.target.value})}
                      />
                      <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow">
                        Join Waitlist
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              By joining our waitlist, you'll be notified as soon as we launch our marketplace and can start enjoying fresh, quality produce directly from our partner farmers.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WaitlistSection;
