import { Moment } from "moment";

export interface IStudent {
  id: number | string;
  name: string;
  birthdate: Moment | number;
  klasse: string;
}
