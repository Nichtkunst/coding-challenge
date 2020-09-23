import { Moment } from "moment";

export type TStudent = {
  id: number | string;
  name: string;
  birthdate: string | number | Moment;
  klasse: string;
};

export type TKlasse = {
  klasse: string;
};

export type TStudentList = {
  studentList: TStudent[];
};
