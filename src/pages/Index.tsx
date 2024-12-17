import { Navbar } from "@/components/Navbar";
import { PropertyCard } from "@/components/PropertyCard";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";

const properties = [
  {
    title: "Modular Apartment",
    price: "1200 Ξ",
    image: "/lovable-uploads/7e0fddf3-34a7-4461-9140-790776d8db8c.png",
    location: "Los Angeles, CA",
    specs: {
      beds: 24,
      baths: 24,
      sqft: 28000,
    },
  },
  {
    title: "Luxury Boutique Hotel",
    price: "1000 Ξ",
    image: "/lovable-uploads/87f8d10f-b596-404f-934c-6d9132902d5e.png",
    location: "Los Angeles, CA",
    specs: {
      beds: 32,
      baths: 34,
      sqft: 45000,
    },
  },
  {
    title: "Modern Modular Home",
    price: "25 Ξ",
    image: "/lovable-uploads/cb74c199-7efe-43b3-99c5-3f5b65af4fc3.png",
    location: "Los Angeles, CA",
    specs: {
      beds: 3,
      baths: 2,
      sqft: 1800,
    },
  },
  {
    title: "Eco-Friendly Modular",
    price: "30 Ξ",
    image: "/lovable-uploads/b6afd4bb-8191-4e4a-a135-f940d63c9b4e.png",
    location: "Los Angeles, CA",
    specs: {
      beds: 2,
      baths: 2,
      sqft: 1500,
    },
  },
  {
    title: "Modern Studio ADU",
    price: "25 Ξ",
    image: "/lovable-uploads/0f56666f-ec3a-4e90-9aae-c643121aef92.png",
    location: "Los Angeles, CA",
    specs: {
      beds: 1,
      baths: 1,
      sqft: 400,
    },
  },
  {
    title: "Contemporary Modular",
    price: "30 Ξ",
    image: "/lovable-uploads/9ecb3a60-8d44-4fa5-a460-f8c4fd264b48.png",
    location: "Los Angeles, CA",
    specs: {
      beds: 3,
      baths: 2.5,
      sqft: 2200,
    },
  },
  {
    title: "Luxury Modular Villa",
    price: "30 Ξ",
    image: "/lovable-uploads/c505f4c6-cafb-44ea-9a2e-4148c65a8967.png",
    location: "Los Angeles, CA",
    specs: {
      beds: 4,
      baths: 3,
      sqft: 2800,
    },
  },
  {
    title: "TESH Modern Home",
    price: "35 Ξ",
    image: "/lovable-uploads/50c5f233-c5dd-45a0-b942-6ae9fce3b0f8.png",
    location: "Los Angeles, CA",
    specs: {
      beds: 3,
      baths: 2,
      sqft: 1600,
    },
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      {/* Problems We Solve Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
            Why Tokenize Modular Real Estate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-secondary">
                Limited Investment Access
              </h3>
              <p className="text-gray-600">
                We provide crypto-native investors with direct onramps to purchase 
                real estate assets, bridging the gap between digital and physical investments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-secondary">
                Traditional Housing Inefficiencies
              </h3>
              <p className="text-gray-600">
                Our modular housing solutions are built 50% faster and at half the cost 
                of traditional construction methods, making housing more accessible.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-secondary">
                Portfolio Diversification
              </h3>
              <p className="text-gray-600">
                Crypto investors can now easily de-risk their portfolios by investing 
                in stable real estate assets through our tokenized platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Properties Section */}
      <section id="properties" className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-300">
                We're revolutionizing real estate investment through blockchain technology 
                and modular construction solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#properties" className="text-gray-300 hover:text-primary">Properties</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary">How It Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary">FAQs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Los Angeles, CA</li>
                <li>Email: info@modulartoken.com</li>
                <li>Phone: (555) 123-4567</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Stay updated with our latest properties and news.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
                />
                <button className="bg-primary text-secondary px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-300">
            <p>&copy; 2024 Modular Housing Token. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
