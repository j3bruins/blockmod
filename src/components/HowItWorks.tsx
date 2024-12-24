import { 
  ClipboardCheck, 
  UserCheck,
  ScrollText,
  Building
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Evaluate",
    description: "Evaluate your development and investment needs and feasibility with our in-house expert team"
  },
  {
    icon: UserCheck,
    title: "Hire an AI Agent",
    description: "Select and hire specialized AI agents to assist with your specific needs"
  },
  {
    icon: ScrollText,
    title: "Select Plan",
    description: "Choose from our curated selection of modular housing plans"
  },
  {
    icon: Building,
    title: "Develop/Deploy Assets",
    description: "Execute your plan and deploy your modular housing assets"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group relative"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <step.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/20 to-accent/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};