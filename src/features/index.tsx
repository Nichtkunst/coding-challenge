import * as React from "react";
import { useObserver, observableArray } from "mobx-react";
import { AiOutlinePlus } from "react-icons/ai";
// @ts-ignore
import { Flex, Box, Button } from "rebass";

import StudentTable from "./StudentTable";
import StudentModal from "./StudentModal";
import { useStore } from "../store";
import { calculateAge } from "../helpers/ageHelper";
import { TStudent } from "../TStudent";

type StudentsProps = {};

const Students: React.FC<StudentsProps> = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const store = useStore();

  return (
    <>
      {toggle && <StudentModal toggle={toggle} setToggle={setToggle} />}
      <div className="app">
        <Flex px={32}>
          <Button mr={2} onClick={() => store.sortByAgeAsc()} variant="outline">
            Nach Alter aufsteigend sortieren
          </Button>
          <Button
            mr={2}
            onClick={() => store.sortByAgeDesc()}
            variant="outline"
          >
            Nach Alter absteigend sortieren
          </Button>
          <Box mx="auto" />
          <Button onClick={() => setToggle(!toggle)}>
            <AiOutlinePlus /> Neuen Schüler hinzufügen
          </Button>
        </Flex>
        <StudentTable />
      </div>
    </>
  );
};

export default Students;
