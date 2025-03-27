"use client";

export default function Services() {
  const services = [
    {
      title: "Professional Security",
      description: "We provide top-notch security services for your business.",
    },
    {
      title: "24/7 Surveillance",
      description: "Our team monitors your premises around the clock.",
    },
    {
      title: "Emergency Response",
      description: "Quick and efficient response to any security emergencies.",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
