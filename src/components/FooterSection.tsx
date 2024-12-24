const FooterSection = () => {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              We're revolutionizing real estate investment through blockchain technology 
              and modular construction solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#properties" className="text-gray-300 hover:text-primary">Properties</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Los Angeles, CA</li>
              <li>Email: info@modulartoken.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest properties and news.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-secondary px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-300">
          <p>&copy; 2024 blocknest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;