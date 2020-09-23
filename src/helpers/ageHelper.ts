import moment, { Moment } from "moment";

// age should be calculated and rendered
const calculateAge = (birthdate: string | Moment) =>
  moment().diff(moment(birthdate, "DD.MM.YYYY"), "years");

export { calculateAge };
