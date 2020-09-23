import * as React from "react";
import moment from "moment";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";
// @ts-ignore
import { Flex, Box, Button } from "rebass";
// @ts-ignore
import { Label, Input, Select } from "@rebass/forms";

import Modal from "../components/Modal";
import { storeContext } from "../store";
import { calculateAge } from "../helpers/ageHelper";
import { IKlasse } from "../interfaces/IKlasse";

type StudentModalProps = {
  toggle: boolean;
  setToggle: (t: boolean) => void;
};

const StudentModal: React.FC<StudentModalProps> = ({ toggle, setToggle }) => {
  const store = React.useContext(storeContext);
  const [name, setName] = React.useState<string>("");
  const [birthdate, setBirthdate] = React.useState<string>("");
  const [klasse, setKlasse] = React.useState<string>("");

  return (
    <Modal>
      <form
        onSubmit={(e) => {
          const formattedDate = moment(birthdate).format("DD.MM.YYYY");
          console.log("date", formattedDate);
          store.addStudent({
            id: uuidv4(),
            name,
            birthdate: calculateAge(formattedDate),
            klasse
          });
          setName("");
          setBirthdate("");
          setKlasse("");
          setToggle(!toggle);
          e.preventDefault();
        }}
      >
        <Flex flexDirection="column" p={16}>
          <Box width={1 / 3}>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={name}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setName(e.target.value)}
              defaultValue="Vorname Nachname"
            />
          </Box>
          <Box width={1 / 3}>
            <Label htmlFor="birthdate">Geburtsdatum</Label>
            <Input
              id="birthdate"
              name="birthdate"
              value={birthdate}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setBirthdate(e.target.value)}
              type="date"
              defaultValue="Geburtsdatum"
            />
          </Box>
          <Box width={1 / 3}>
            <Label htmlFor="klasse">Klasse</Label>
            <Select
              id="klasse"
              value={klasse}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setKlasse(e.target.value)}
              name="klasse"
              defaultValue="Klasse auswählen"
            >
              {store.klasseList.map((i: IKlasse, index: number) => (
                <option key={index}>{i.klasse}</option>
              ))}
            </Select>
          </Box>
          <Box height={16} />
          <Flex>
            <Button variant="outline" onClick={() => setToggle(!toggle)}>
              Schließen
            </Button>
            <Box mx="auto" />
            <Button variant="primary" type="submit">
              Schüler hinzufügen
            </Button>
          </Flex>
        </Flex>
      </form>
    </Modal>
  );
};

export default StudentModal;
