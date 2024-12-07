import { ITrainingProgram } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

const TrainingProgram = ({
  trainingProgram,
}: {
  trainingProgram: ITrainingProgram;
}) => {
  return (
    <div className="card bg-base-200 w-full shadow-xl">
      <figure className="w-full aspect-video overflow-hidden">
        <Image
          src={trainingProgram.banner}
          alt={trainingProgram.title}
          width={1280}
          height={720}
          priority
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{trainingProgram.title}</h2>
        <p className="text-sm opacity-50">{trainingProgram.description}</p>
        <div className="card-actions justify-between items-center">
          <h2 className="card-title">${trainingProgram.fee}</h2>
          <Link
            href={`/training-programs/${trainingProgram._id}`}
            className="btn btn-secondary"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingProgram;
