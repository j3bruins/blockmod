import { 
  ClipboardCheck, 
  Map, 
  Home, 
  Wallet, 
  Truck 
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Evaluate",
    description: "Evaluate your development and investment needs and feasibility with our in-house expert team"
  },
  {
    icon: Map,
    title: "Find Land",
    description: "If you want to develop land, see fabrica.land for land options"
  },
  {
    icon: Home,
    title: "Select Property",
    description: "Select your property from our curated collection"
  },
  {
    icon: Wallet,
    title: "Purchase",
    description: "Connect wallet and purchase property"
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Property ships to your desired location"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              
              {/* Connector line between steps (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 h-[2px] bg-primary" 
                     style={{
                       width: "calc(100% - 4rem)",
                       left: `calc(50% + ${(index * 100)}% + 2rem)`,
                       transform: "translateX(-50%)"
                     }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};