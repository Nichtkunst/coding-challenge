import { Moment } from "moment";

export interface IStudent {
  id: string;
  name: string;
  birthdate: any; // Moment | number
  klasse: string;
}
