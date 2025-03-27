import Carousel from "@/components/Carousel";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* 🔹 Carousel */}
      <Carousel />

      {/* 🔹 Hero Section */}
      <section className="text-center py-20 bg-gray-800 text-white">
        <h1 className="text-5xl font-bold">Welcome to Defender</h1>
        <p className="mt-4 text-lg">Your safety is our priority</p>
        <Link href="/services">
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all hover:scale-110">
            View Services
          </button>
        </Link>
      </section>

      {/* 🔹 About Section */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Defender is a professional security company dedicated to ensuring your safety. We offer top-notch security solutions for individuals and businesses.
          </p>
        </div>
      </section>

      {/* 🔹 Services Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 text-gray-900">
                <Image src={`/carousel${num % 3 + 1}.jpg`} alt="Service" width={300} height={200} className="rounded-lg" />
                <h3 className="text-xl font-bold mt-4">Service {num}</h3>
                <p className="mt-2 text-gray-600">Professional security service description.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Why Choose Us Section */}
      <section className="py-20 bg-gray-100 text-gray-900 text-center">
        <h2 className="text-4xl font-bold">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[1, 2, 3].map((num) => (
            <div key={num} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-2xl font-bold">Feature {num}</h3>
              <p className="mt-2 text-gray-600">We provide unmatched security solutions tailored for your needs.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Testimonials Section */}
      <section className="py-20 bg-gray-800 text-white text-center">
        <h2 className="text-4xl font-bold">What Our Clients Say</h2>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="bg-gray-900 p-6 rounded-lg max-w-sm hover:scale-105 transition-all">
              <p className="italic">"Defender's security team is amazing. Highly recommended!"</p>
              <p className="mt-4 font-bold">- Client {num}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 FAQ Section */}
      <section className="py-20 bg-gray-100 text-gray-900 text-center">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-10 max-w-3xl mx-auto">
          {[1, 2, 3].map((num) => (
            <div key={num} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 mb-4">
              <h3 className="text-2xl font-bold">Question {num}?</h3>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Blog Section */}
      <section className="py-20 bg-gray-800 text-white text-center">
        <h2 className="text-4xl font-bold">Latest Security News</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <div key={num} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-2xl font-bold">Blog Post {num}</h3>
              <p className="mt-2">Stay updated with the latest security trends and tips.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Contact Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="mt-4 text-lg">We are here to protect you 24/7.</p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all hover:scale-110">
            Get in Touch
          </button>
        </Link>
      </section>
    </div>
  );
}
