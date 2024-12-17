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
          <p className="text-lg md:text-xl text-gray-100 mb-4 max-w-2xl mx-auto">
            Invest and develop modular homes, apartments and hotels
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
            Tokenized Modular Real Estate
          </h1>
        </div>
      </div>
    </section>
  );
};