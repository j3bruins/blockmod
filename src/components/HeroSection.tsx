import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/7e0fddf3-34a7-4461-9140-790776d8db8c.png"
          alt="Modern Modular Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            A New Era of Real Estate Investment
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-6 max-w-2xl mx-auto">
            Invest in modular homes, apartments, and hotels with blockchain technology
          </p>
          <Button className="bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-4 rounded-none">
            INVEST NOW
          </Button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 tracking-wide">
              LEVEL-UP YOUR LEGACY
            </h2>
            <p className="text-base md:text-lg mb-2">
              With blockchain-powered real estate investing
            </p>
            <p className="text-gray-200 max-w-3xl mx-auto text-sm md:text-base">
              BlockNest offers direct access to institutional-quality modular real estate investments. 
              As a limited partner, you enjoy the benefits of blockchain technology while accessing premium real estate opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};