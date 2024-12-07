import GridContainer from "@/components/GridContainer";
import TrainingProgram from "@/components/TrainingProgram";
import { trainingPrograms } from "@/data";
import SectionHeader from "../../components/SectionHeader";
import Wrapper from "../../components/Wrapper";

const TrainingPrograms = () => {
  return (
    <Wrapper>
      <SectionHeader
        title="Training Programs"
        description="Gear up for the ultimate motocross experience! Our training programs are designed to enhance your skills, build confidence, and help you dominate the track, whether you're a beginner or a seasoned rider."
      />
      <GridContainer>
        {trainingPrograms.map((trainingProgram) => (
          <TrainingProgram
            key={trainingProgram._id}
            trainingProgram={trainingProgram}
          />
        ))}
      </GridContainer>
    </Wrapper>
  );
};

export default TrainingPrograms;
