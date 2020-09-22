import { Moment } from "moment";

export interface StudentModel {
  name: string;
  birthdate: Moment | number;
  klasse: string;
}
