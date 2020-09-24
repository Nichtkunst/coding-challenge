/** @jsx jsx */
import * as React from "react";
import moment, { Moment } from "moment";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { Flex, Box, Button, Label, Input, Select, jsx } from "theme-ui";

import Modal from "../components/Modal";
import { useStore } from "../store";
import { TKlasse, TStudent, TStudenFormModel } from "../TStudent";

type StudentModalProps = {
  student?: TStudent;
  toggle: boolean;
  setToggle: (t: boolean) => void;
};

const StudentModal: React.FC<StudentModalProps> = ({
  student,
  toggle,
  setToggle
}) => {
  const store = useStore();

  const [name, setName] = React.useState<string>(student?.name || "");
  const [birthdate, setBirthdate] = React.useState<Moment | string>(
    student?.birthdate || ""
  );
  const [klasse, setKlasse] = React.useState<string>(student?.klasse || "");

  const reset = () => {
    setName("");
    setBirthdate("");
    setKlasse("");
    setToggle(!toggle);
  };

  const onSubmitAdd = () => {
    store.addStudentV({
      id: uuidv4(),
      name,
      birthdate,
      klasse
    });
    reset();
  };

  const onSubmitEdit = () => {
    store.editStudentV({
      id: student?.id!,
      name,
      birthdate,
      klasse
    });
    reset();
  };

  return (
    <Modal toggle={toggle} setToggle={setToggle}>
      <form<TStudenFormModel>
        onSubmit={(e: React.SyntheticEvent) => {
          !student ? onSubmitAdd() : onSubmitEdit();
          e.preventDefault();
        }}
      >
        <Flex sx={{ flexDirection: "column" }} p={16}>
          <Box sx={{ width: "320px", mb: 3 }}>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={name}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setName(e.target.value)}
              placeholder="Vorname Nachname"
            />
          </Box>
          <Box sx={{ width: "320px", mb: 3 }}>
            <Label htmlFor="birthdate">Geburtsdatum</Label>
            <Input
              id="birthdate"
              name="birthdate"
              value={moment(birthdate).format("YYYY-MM-DD")}
              onChange={(e: {
                target: { value: React.SetStateAction<string | moment.Moment> };
              }) => setBirthdate(e.target.value)}
              type="date"
              placeholder="Geburtsdatum"
            />
          </Box>
          <Box sx={{ width: "320px" }}>
            <Label htmlFor="klasse">Klasse</Label>
            <Select
              id="klasse"
              value={klasse}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setKlasse(e.target.value)}
              name="klasse"
              placeholder="Klasse auswählen"
            >
              <option key="1" value="" disabled selected>
                Bitte auswählen...
              </option>
              {store.klassen.map((i: TKlasse, index: number) => (
                <option key={index} value={i.klasse}>
                  {i.klasse}
                </option>
              ))}
            </Select>
          </Box>
          <Box sx={{ height: "32px" }} />
          <Flex>
            <Button variant="secondary" onClick={() => setToggle(!toggle)}>
              Schließen
            </Button>
            <Box mx="auto" />
            <Button variant="primary" type="submit">
              Schüler {!student ? "hinzufügen" : "editieren"}
            </Button>
          </Flex>
        </Flex>
      </form>
    </Modal>
  );
};

export default StudentModal;
