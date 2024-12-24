const ProblemsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
          Why Tokenize Modular Real Estate?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              Limited Investment Access
            </h3>
            <p className="text-gray-600">
              We provide crypto-native investors with direct onramps to purchase 
              real estate assets, bridging the gap between digital and physical investments.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              Traditional Housing Inefficiencies
            </h3>
            <p className="text-gray-600">
              Our modular housing solutions are built 50% faster and at half the cost 
              of traditional construction methods, making housing more accessible.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              Portfolio Diversification
            </h3>
            <p className="text-gray-600">
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