import Hero from "../components/Hero";
import TrainingPrograms from "./training-programs/page";

const HomePage = () => {
  return (
    <div>
      <Hero
        image="https://images.pexels.com/photos/2696060/pexels-photo-2696060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        headline="MX Vertisance Riding Academy"
        description="MX Vertisance Riding Academy is a renowned motocross training
            academy located in Bangladesh, offering world-class facilities,
            expert instructors, and tailored programs designed to help riders of
            all levels master the art of motocross, from foundational skills to
            advanced techniques, in a safe and professional environment."
        ctaLink="/training-programs"
        ctaText="Kickstart your ride today"
      />
      <TrainingPrograms />
    </div>
  );
};

export default HomePage;
