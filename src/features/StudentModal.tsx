import * as React from "react";
// @ts-ignore
import { Flex, Box, Button } from "rebass";
// @ts-ignore
import { Label, Input, Select } from "@rebass/forms";

import { appState } from "../store";
import Modal from "../components/Modal";

type StudentModalProps = {
  toggle: boolean;
  setToggle: (t: boolean) => void;
};

const StudentModal: React.FC<StudentModalProps> = ({ toggle, setToggle }) => {
  return (
    <Modal>
      <Flex flexDirection="column" p={16}>
        <Box width={1 / 3}>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" defaultValue="Vorname Nachname" />
        </Box>
        <Box width={1 / 3}>
          <Label htmlFor="birthdate">Geburtsdatum</Label>
          <Input
            id="birthdate"
            name="birthdate"
            type="date"
            defaultValue="Geburtsdatum"
          />
        </Box>
        <Box width={1 / 3}>
          <Label htmlFor="klasse">Klasse</Label>
          <Select id="klasse" name="klasse" defaultValue="Klasse">
            {appState.klassenList.map((i, index) => (
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
          <Button variant="primary">Schüler hinzufügen</Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default StudentModal;
