export type TStudent = {
  id: number | string;
  name: string;
  birthdate: string;
  klasse: string;
};

export type TKlasse = {
  klasse: string;
};

export type TStudentList = {
  studentList: TStudent[];
};
