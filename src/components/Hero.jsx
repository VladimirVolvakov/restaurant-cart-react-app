//Image:
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="max-w-[1440px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute h-full w-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-center">
          <h2 className="px-4 mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h2>
          <h2 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Foods</span> Delivered
          </h2>
        </div>
        <img 
          className="w-full max-h-[500px] object-cover"
          src={heroImage} 
          alt="Food" 
        />
      </div>
    </section>
  );
};

export default Hero;