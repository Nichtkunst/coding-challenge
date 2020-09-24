import { TKlasse } from "./TStudent";

enum Klassen {
  "1A" = "1A",
  "1B" = "1B",
  "2A" = "2A",
  "2B" = "2B"
}

const mockedKlasseList: TKlasse[] = [
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

export { mockedKlasseList };
