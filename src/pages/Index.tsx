import { Navbar } from "@/components/Navbar";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";

const properties = [
  {
    title: "Modern Modular Home",
    price: "$299,000",
    image: "/lovable-uploads/cb74c199-7efe-43b3-99c5-3f5b65af4fc3.png",
    location: "Portland, OR",
    specs: {
      beds: 3,
      baths: 2,
      sqft: 1800,
    },
  },
  {
    title: "Eco-Friendly Modular",
    price: "$275,000",
    image: "/lovable-uploads/b6afd4bb-8191-4e4a-a135-f940d63c9b4e.png",
    location: "Seattle, WA",
    specs: {
      beds: 2,
      baths: 2,
      sqft: 1500,
    },
  },
  {
    title: "Urban Development",
    price: "$450,000",
    image: "/lovable-uploads/c31a9342-36c7-4448-9b00-b6332b9176a1.png",
    location: "Austin, TX",
    specs: {
      beds: 4,
      baths: 3,
      sqft: 2200,
    },
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
            Tokenized Modular Housing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Invest in the future of affordable housing through blockchain technology.
            Own real estate assets with complete transparency and liquidity.
          </p>
          <Button className="bg-primary text-secondary hover:bg-primary/90 text-lg px-8 py-6">
            Explore Properties
          </Button>
        </div>
      </section>

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

      {/* About Section */}
      <section id="about" className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary mb-8">
              Why Choose Tokenized Housing?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-lg bg-gray-50">
                <h3 className="font-bold text-xl mb-4">Affordable</h3>
                <p className="text-gray-600">
                  50% faster construction and lower costs compared to traditional housing
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-50">
                <h3 className="font-bold text-xl mb-4">Liquid</h3>
                <p className="text-gray-600">
                  Easily trade your real estate tokens on the blockchain
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-50">
                <h3 className="font-bold text-xl mb-4">Transparent</h3>
                <p className="text-gray-600">
                  All transactions and ownership records on the blockchain
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;