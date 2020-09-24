import moment, { Moment } from "moment";

// age should be calculated and rendered
const calculateAge = (birthdate: Moment | string) =>
  moment().diff(moment(birthdate), "years");

export { calculateAge };
