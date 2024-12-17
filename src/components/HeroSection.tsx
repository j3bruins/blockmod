import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/7e0fddf3-34a7-4461-9140-790776d8db8c.png"
          alt="Modern Modular Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            A New Era of Real Estate Investment
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Invest in modular homes, apartments, and hotels with blockchain technology
          </p>
          <Button className="bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-6 rounded-none">
            INVEST NOW
          </Button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-wide">
              LEVEL-UP YOUR LEGACY
            </h2>
            <p className="text-xl md:text-2xl mb-4">
              With blockchain-powered real estate investing
            </p>
            <p className="text-gray-300 max-w-4xl mx-auto text-lg">
              BlockNest offers direct access to institutional-quality modular real estate investments. 
              As a limited partner, you enjoy the benefits of blockchain technology while accessing premium real estate opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};