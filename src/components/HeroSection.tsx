import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
              Tokenize Modular Real Estate
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Invest in modular homes, apartments, and hotels that can be placed on raw land and developed at half the cost and 2 x the speed of traditional real estate development
            </p>
            <Button className="bg-primary text-secondary hover:bg-primary/90 text-lg px-8 py-6">
              Explore Properties
            </Button>
          </div>
          <div className="relative animate-fadeIn">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <img
                src="/lovable-uploads/7e0fddf3-34a7-4461-9140-790776d8db8c.png"
                alt="Modern Modular Building"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <p className="text-secondary font-semibold">Featured Project</p>
                <p className="text-gray-600">24-Unit Modular Apartment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};