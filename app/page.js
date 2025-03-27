import Carousel from "@/components/Carousel";
import Services from "@/app/Services";

export default function Home() {
  return (
    
    <div>
      <Carousel />
      <h2 className="text-3xl font-bold text-center mt-8">Welcome to Defender!</h2>
      <p className="text-center text-gray-600 mt-2">We provide the best services for you.</p>
      <Services />
      {/* Qo'shimcha bo'limlar */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold">About Us</h3>
        <p className="mt-4 text-gray-600">
          Defender is a leading security service provider with years of experience in protecting assets and individuals. Our team of professionals is dedicated to ensuring your safety and peace of mind.
        </p>
      </section>
      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Our Team</h3>
        <p className="mt-4 text-gray-600">
          Our team consists of highly trained and experienced security personnel who are committed to providing top-notch services. We pride ourselves on our professionalism and dedication.
        </p>
      </section>
      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Testimonials</h3>
        <p className="mt-4 text-gray-600">
          "Defender has provided us with exceptional security services. Their team is reliable and highly professional." - Client A
        </p>
        <p className="mt-4 text-gray-600">
          "We feel much safer knowing that Defender is handling our security needs." - Client B
        </p>
      </section>
    </div>
  );
}



