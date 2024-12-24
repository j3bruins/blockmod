const ProblemsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black/90 to-black/95 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          Why Tokenize Modular Real Estate?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/40 p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Limited Investment Access
            </h3>
            <p className="text-white/80">
              We provide crypto-native investors with direct onramps to purchase 
              real estate assets, bridging the gap between digital and physical investments.
            </p>
          </div>
          <div className="bg-black/40 p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              Traditional Housing Inefficiencies
            </h3>
            <p className="text-white/80">
              Our modular housing solutions are built 50% faster and at half the cost 
              of traditional construction methods, making housing more accessible.
            </p>
          </div>
          <div className="bg-black/40 p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-accent">
              Portfolio Diversification
            </h3>
            <p className="text-white/80">
              Crypto investors can now easily de-risk their portfolios by investing 
              in stable real estate assets through our tokenized platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;