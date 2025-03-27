const services = [
  { title: "Personal Security", desc: "Professional bodyguard services." },
  { title: "Corporate Security", desc: "Protecting your business assets." },
  { title: "Event Security", desc: "Ensuring safety at your events." },
];

export default function Services() {
  return (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
