import {Team} from "./team.model";

export class Match {
  firstTeam!: Team;
  secondTeam!: Team;
  time!: string;
  id!: number;
  winner!:number;
  pick!:number;
}
