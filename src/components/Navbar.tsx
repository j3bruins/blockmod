import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    // Implement actual wallet connection logic here
    setIsConnected(true);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-secondary">blocknest</h1>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#properties" className="text-secondary hover:text-primary transition-colors">
            Properties
          </a>
          <a href="#about" className="text-secondary hover:text-primary transition-colors">
            About
          </a>
          <Button
            onClick={handleConnect}
            variant="default"
            className="bg-primary text-secondary hover:bg-primary/90"
          >
            {isConnected ? "Connected" : "Connect Wallet"}
          </Button>
        </div>
      </div>
    </nav>
  );
};