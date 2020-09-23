import { Moment } from "moment";

export interface IStudent {
  id: string;
  name: string;
  birthdate: Moment | number;
  klasse: string;
}
