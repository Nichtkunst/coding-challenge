import moment from "moment";

// age should be calculated and rendered
const calculateAge = (birthdate: string) =>
  moment().diff(moment(birthdate, "DD.MM.YYYY"), "years");

export { calculateAge };
