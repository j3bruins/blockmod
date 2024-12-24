import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Import wallet adapter CSS
import '@solana/wallet-adapter-react-ui/styles.css';

const WalletButton = () => {
  const { connected } = useWallet();
  
  return (
    <WalletMultiButton className="bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2 rounded-full transition-all duration-300">
      {connected ? "Connected" : "Connect Wallet"}
    </WalletMultiButton>
  );
};

export const Navbar = () => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <nav className="fixed w-full bg-black/10 backdrop-blur-md z-50 border-b border-white/10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-white">blocknest</h1>
              </div>
              <div className="flex items-center space-x-6">
                <a href="#properties" className="text-white/90 hover:text-primary transition-colors">
                  Properties
                </a>
                <a href="#about" className="text-white/90 hover:text-primary transition-colors">
                  About
                </a>
                <WalletButton />
              </div>
            </div>
          </nav>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};