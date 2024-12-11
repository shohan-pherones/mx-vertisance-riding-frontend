import Hero from "@/components/Hero";
import TrainingProgramDetails from "@/components/TrainingProgramDetails";
import { trainingPrograms } from "@/data";
import { notFound } from "next/navigation";

const TrainingProgramDetailsPage = ({ params }: { params: { id: string } }) => {
  const trainingProgram = trainingPrograms.find(
    (program) => program._id === params.id
  );

  if (!trainingProgram) {
    return notFound();
  }

  return (
    <div>
      <Hero
        image={trainingProgram.banner}
        headline={trainingProgram.title}
        description={trainingProgram.description}
        ctaLink={`/training-programs/${trainingProgram._id}#details`}
        ctaText="View details"
      />
      <TrainingProgramDetails trainingProgram={trainingProgram} />
    </div>
  );
};

export default TrainingProgramDetailsPage;
