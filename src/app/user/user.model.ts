import {Week} from "../team-picker/week.model";

export class User {
  name!: string;
  password!: string;
  points!: number;
}


export class UserWeek {
  user!: User;
  week!: Week;
  points!: number;
}
