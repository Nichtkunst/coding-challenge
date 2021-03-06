import { Moment } from "moment";

export type TStudent = {
  id: number;
  name: string;
  birthdate: string | Moment;
  klasse: string;
};

export type TKlasse = {
  klasse: string;
};

export type TStudentList = {
  studentList: TStudent[];
};

export type TStudenFormModel = {
  name: { value: string };
  birthdate: { value: Moment | string };
  klasse: { value: string };
};
