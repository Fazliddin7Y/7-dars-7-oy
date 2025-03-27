import Carousel from "@/components/Carousel";
import Services from "@/components/Services"; 

export default function Home() {
  return (
    <div>
      <Carousel />
      <h2 className="text-3xl font-bold text-center mt-8">Welcome to Defender!</h2>
      <p className="text-center text-gray-600 mt-2">We provide the best services for you.</p>
      <Services />
    </div>
  );
}
