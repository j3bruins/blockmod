import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { BriefcaseIcon, UserIcon, HelpCircleIcon, DollarSignIcon } from "lucide-react";

const agents = [
  {
    title: "Property Scout Agent",
    description: "Finds prime locations and off-market opportunities for modular developments",
    price: "2.5 Sol"
  },
  {
    title: "Underwriting Agent",
    description: "Analyzes financial feasibility and risk assessment",
    price: "2.0 Sol"
  },
  {
    title: "Disposition Agent",
    description: "Handles property sales and exit strategies",
    price: "1.8 Sol"
  },
  {
    title: "Legal Agent",
    description: "Reviews contracts and ensures regulatory compliance",
    price: "2.2 Sol"
  },
  {
    title: "Due Diligence Agent",
    description: "Performs comprehensive property and market analysis",
    price: "2.1 Sol"
  },
  {
    title: "Insurance Agent",
    description: "Manages property insurance and risk mitigation",
    price: "1.5 Sol"
  },
  {
    title: "Property Management Agent",
    description: "Oversees property operations and maintenance",
    price: "1.7 Sol"
  },
  {
    title: "Lender Agent",
    description: "Sources and structures financing options",
    price: "2.3 Sol"
  },
  {
    title: "Investor Relations Agent",
    description: "Manages investor communications and reporting",
    price: "1.9 Sol"
  }
];

const AIAgentsSection = () => {
  const { toast } = useToast();

  const handleHireAgent = (agentTitle: string) => {
    toast({
      title: "Agent Hired!",
      description: `You've successfully hired the ${agentTitle}. They will contact you shortly.`,
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircleIcon className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Need Help? Hire an AI Agent</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our specialized AI agents are here to assist you with every aspect of your modular housing investment journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BriefcaseIcon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">{agent.title}</CardTitle>
                </div>
                <CardDescription>{agent.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <DollarSignIcon className="h-4 w-4 text-gray-600" />
                    <span className="font-semibold">{agent.price}</span>
                  </div>
                  <Button 
                    onClick={() => handleHireAgent(agent.title)}
                    className="flex items-center gap-2"
                  >
                    <UserIcon className="h-4 w-4" />
                    Hire Agent
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgentsSection;