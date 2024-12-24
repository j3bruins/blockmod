import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative h-[44vh] min-h-[330px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/e4c3060c-db09-4ac9-a344-7e3fbe42cf84.png"
          alt="Futuristic Cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/80 via-primary/50 to-secondary/80"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-end text-center px-4 pb-20">
        <div className="max-w-3xl mx-auto text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 animate-fadeIn">
            Tokenized Modular Real Estate
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Invest and develop modular homes, apartments and hotels in the city of tomorrow
          </p>
          <Button className="bg-primary/90 hover:bg-primary text-white text-lg px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105">
            Explore Properties
          </Button>
        </div>
      </div>
    </section>
  );
};