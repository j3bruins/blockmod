import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
          Tokenize Modular Real Estate
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Invest in modular homes, apartments, and hotels that can be placed on raw land and developed at half the cost and 2 x the speed of traditional real estate development
        </p>
        <Button className="bg-primary text-secondary hover:bg-primary/90 text-lg px-8 py-6">
          Explore Properties
        </Button>
      </div>
    </section>
  );
};