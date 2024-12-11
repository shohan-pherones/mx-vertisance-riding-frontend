import { ITrainingProgram } from "@/interfaces";
import SectionHeader from "./SectionHeader";
import Wrapper from "./Wrapper";

const TrainingProgramDetails = ({
  trainingProgram,
}: {
  trainingProgram: ITrainingProgram;
}) => {
  return (
    <Wrapper id="details">
      <SectionHeader
        title="Training Program Details"
        description="Take the time to thoroughly review the training schedule, paying close attention to every detail, particularly the designated time slots and any potential changes or shifts in timing, to ensure complete accuracy and avoid any misunderstandings."
      />
      <div className="flex flex-col gap-5 md:gap-10">
        {trainingProgram.programs.map((program) => (
          <div key={program._id}>
            <h3 className="text-xl font-semibold">
              Day {program.day}: {program.title}
            </h3>
            <div className="flex flex-col mt-2.5">
              {program.sessions.map((session) => (
                <div
                  key={session._id}
                  className="grid grid-cols-[160px_1fr] gap-2.5 md:gap-5"
                >
                  <span className="badge badge-accent">{session.time}</span>
                  <div>
                    {session.activities.map((activity, idx, arr) => (
                      <span key={idx + activity}>
                        {activity}
                        {idx === arr.length - 1 ? "" : ", "}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5 md:gap-10">
        <h2 className="text-3xl font-semibold">Fee: ${trainingProgram.fee}</h2>
        <button className="btn btn-outline btn-primary">
          Proceed to checkout
        </button>
      </div>
    </Wrapper>
  );
};

export default TrainingProgramDetails;
