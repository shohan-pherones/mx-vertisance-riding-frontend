import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="hero h-[calc(100vh-4rem)]"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/2696060/pexels-photo-2696060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-screen-2xl">
          <h1 className="mb-5 text-5xl font-bold">
            MX Vertisance Riding Academy
          </h1>
          <p className="mb-5">
            MX Vertisance Riding Academy is a renowned motocross training
            academy located in Bangladesh, offering world-class facilities,
            expert instructors, and tailored programs designed to help riders of
            all levels master the art of motocross, from foundational skills to
            advanced techniques, in a safe and professional environment.
          </p>
          <Link href="/training-programs" className="btn btn-primary">
            Kickstart your ride today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
