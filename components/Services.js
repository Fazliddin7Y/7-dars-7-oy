export default function Services() {
    return (
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-600 mt-4">We offer the best security services for your safety.</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700">24/7 Surveillance</h3>
            <p className="text-gray-500 mt-2">We monitor your premises round the clock.</p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700">Security Guards</h3>
            <p className="text-gray-500 mt-2">Our trained professionals ensure your safety.</p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700">Alarm Systems</h3>
            <p className="text-gray-500 mt-2">We install and maintain top-notch security systems.</p>
          </div>
        </div>
      </section>
    );
  }
  