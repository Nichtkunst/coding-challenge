import * as React from "react";
import { useObserver } from "mobx-react";
import { AiOutlinePlus } from "react-icons/ai";
import { Label, Select, Flex, Box, Button } from "theme-ui";

import StudentTable from "./StudentTable";
import StudentModal from "./StudentModal";
import { useStore } from "../store";

type StudentsProps = {};

const Students: React.FC<StudentsProps> = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const store = useStore();

  return useObserver(() => (
    <>
      {toggle && <StudentModal toggle={toggle} setToggle={setToggle} />}
      <div className="app">
        <Flex px={32}>
          <Box width="320px">
            <Label htmlFor="country">Nach Alter</Label>
            <Select
              id="alter"
              name="alter"
              placeholder="Sortieren"
              defaultValue="sortieren"
              onChange={(e: any) => {
                if (e.target.value === "absteigend") {
                  store.sortByAgeDesc();
                } else if (e.target.value === "aufsteigend") {
                  store.sortByAgeAsc();
                } else {
                  return;
                }
              }}
            >
              <option key="1" value="absteigend">
                absteigend sortieren
              </option>
              <option key="2" value="aufsteigend">
                aufsteigend sortieren
              </option>
            </Select>
          </Box>
          <Box mx="auto" />
          <Box>
            <Button onClick={() => setToggle(!toggle)}>
              <AiOutlinePlus /> Neuen Schüler hinzufügen
            </Button>
          </Box>
        </Flex>
        <StudentTable />
      </div>
    </>
  ));
};

export default Students;
