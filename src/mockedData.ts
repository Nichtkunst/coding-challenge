import { calculateAge } from "./helpers/ageHelper";
import { StudentModel } from "./interfaces/StudentModel";
import { KlasseModel } from "./interfaces/KlasseModel";

enum Klassen {
  "1A" = "1A",
  "1B" = "1B",
  "2A" = "2A",
  "2B" = "2B"
}

// Fields of a single Student:
// Name,
// Birthdate (age should be calculated and rendered),
// Klasse (can be chosen with a Select)

const mockedStudentList: StudentModel[] = [
  {
    name: "Constantin Raabe",
    birthdate: calculateAge("03.07.2008"),
    klasse: Klassen["1A"]
  },
  {
    name: "Lauren Doe",
    birthdate: calculateAge("03.01.2007"),
    klasse: Klassen["2A"]
  },
  {
    name: "Dolores Sofie Schmiedinger",
    birthdate: calculateAge("11.05.2006"),
    klasse: Klassen["2B"]
  }
];

const mockedKlasseList: KlasseModel[] = [
  {
    klasse: Klassen["1A"]
  },
  {
    klasse: Klassen["1B"]
  },
  {
    klasse: Klassen["2A"]
  },
  {
    klasse: Klassen["2B"]
  }
];

export { mockedStudentList, mockedKlasseList };
