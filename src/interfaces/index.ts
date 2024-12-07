export interface ITrainingSession {
  _id: string;
  time: string;
  activities: string[];
}

export interface ITrainingDay {
  _id: string;
  day: number;
  title: string;
  sessions: ITrainingSession[];
}

export interface ITrainingProgram {
  _id: string;
  title: string;
  description: string;
  banner: string;
  fee: number;
  programs: ITrainingDay[];
}
