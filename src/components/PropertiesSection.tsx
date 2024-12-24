import { PropertyCard } from "@/components/PropertyCard";

const properties = [
  {
    title: "Modular Apartment",
    price: "1200 Sol",
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
    price: "1000 Sol",
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
    price: "25 Sol",
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
    price: "30 Sol",
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
    price: "25 Sol",
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
    price: "30 Sol",
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
    price: "30 Sol",
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
    price: "35 Sol",
    image: "/lovable-uploads/50c5f233-c5dd-45a0-b942-6ae9fce3b0f8.png",
    location: "Los Angeles, CA",
    specs: {
      beds: 3,
      baths: 2,
      sqft: 1600,
    },
  },
];

const PropertiesSection = () => {
  return (
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
  );
};

export default PropertiesSection;