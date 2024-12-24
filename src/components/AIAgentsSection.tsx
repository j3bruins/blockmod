import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Bot, Search, MapPin, Building } from "lucide-react";

interface Agent {
  id: string;
  name: string;
  status: "idle" | "searching" | "complete";
  results: SearchResult[];
}

interface SearchResult {
  location: string;
  type: string;
  description: string;
  confidence: number;
}

const AIAgentsSection = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [newAgentName, setNewAgentName] = useState("");
  const { toast } = useToast();

  const createAgent = async () => {
    if (!newAgentName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a name for your agent",
        variant: "destructive",
      });
      return;
    }

    const newAgent: Agent = {
      id: Date.now().toString(),
      name: newAgentName,
      status: "idle",
      results: [],
    };

    setAgents([...agents, newAgent]);
    setNewAgentName("");
    
    toast({
      title: "Agent Created",
      description: `${newAgentName} is ready to search for properties`,
    });
  };

  const deployAgent = async (agentId: string) => {
    setAgents(agents.map(agent => 
      agent.id === agentId 
        ? { ...agent, status: "searching" }
        : agent
    ));

    // Simulate AI search process
    setTimeout(() => {
      setAgents(agents.map(agent => 
        agent.id === agentId 
          ? {
              ...agent,
              status: "complete",
              results: [
                {
                  location: "Austin, TX",
                  type: "Commercial Land",
                  description: "5 acre plot in tech corridor",
                  confidence: 0.89,
                },
                {
                  location: "Denver, CO",
                  type: "Mixed-Use Development",
                  description: "Urban renewal zone, transit-oriented",
                  confidence: 0.92,
                },
              ],
            }
          : agent
      ));

      toast({
        title: "Search Complete",
        description: "Your agent has found potential development locations",
      });
    }, 3000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            AI Property Scouts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deploy AI agents to discover prime locations for modular developments. 
            Our agents analyze market data, zoning laws, and development potential 
            to find the perfect spots for your next project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 mb-8">
            <Input
              placeholder="Enter agent name..."
              value={newAgentName}
              onChange={(e) => setNewAgentName(e.target.value)}
              className="flex-1"
            />
            <Button onClick={createAgent}>
              <Bot className="mr-2 h-4 w-4" />
              Create Agent
            </Button>
          </div>

          <div className="space-y-4">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="border rounded-lg p-6 bg-gray-50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{agent.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      agent.status === "idle" ? "bg-gray-200" :
                      agent.status === "searching" ? "bg-blue-100 text-blue-700" :
                      "bg-green-100 text-green-700"
                    }`}>
                      {agent.status}
                    </span>
                  </div>
                  {agent.status === "idle" && (
                    <Button
                      variant="outline"
                      onClick={() => deployAgent(agent.id)}
                    >
                      <Search className="mr-2 h-4 w-4" />
                      Deploy Agent
                    </Button>
                  )}
                </div>

                {agent.results.length > 0 && (
                  <div className="space-y-3">
                    {agent.results.map((result, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-md border"
                      >
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">{result.location}</h4>
                              <span className="text-sm text-gray-500">
                                {(result.confidence * 100).toFixed(0)}% match
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">
                              {result.type} - {result.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgentsSection;