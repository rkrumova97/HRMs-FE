import {Position} from "./position.model";

export class Project {
  name: any;
  startingDate: any;
  departments: any;
  positions: Position;
  skills: any[];

  constructor() {
    this.name = null;
    this.positions = new Position();
    this.skills = null;
    this.startingDate = null;
    this.departments = null;
  }
}
