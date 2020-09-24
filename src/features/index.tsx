/** @jsx jsx */
import * as React from "react";
import { useObserver } from "mobx-react";
import { AiOutlinePlus } from "react-icons/ai";
import { Flex, Box, Button, jsx, Text } from "theme-ui";

import StudentTable from "./StudentTable";
import StudentSearch from "./StudentSearch";
import StudentFlexTable from "./StudentFlexTable";
import StudentModal from "./StudentModal";
import { useStore } from "../store";

type StudentsProps = {};

const Students: React.FC<StudentsProps> = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const store = useStore();

  return useObserver(() => (
    <div className="app">
      {toggle && <StudentModal toggle={toggle} setToggle={setToggle} />}
      <Flex
        sx={{
          px: "32px",
          py: "32px",
          alignItems: ["center", "flex-end"],
          flexDirection: ["column", "row"]
        }}
      >
        <StudentSearch />
        <Box mx={[null, "auto"]} mb={["16px", null]} />

        <Button
          mr={[null, "16px"]}
          mb={["16px", "0px"]}
          onClick={() => {
            store.setKlasse("");
            store.setQuery("");
          }}
        >
          Filter zurücksetzen
        </Button>

        <Button onClick={() => setToggle(!toggle)}>
          <AiOutlinePlus /> Neuen Schüler hinzufügen
        </Button>
      </Flex>
      <Flex px={32} sx={{ flexDirection: ["column", "row"] }}>
        <Box sx={{ width: "100%" }}>
          <Text>Responsive Table</Text>
          <StudentTable />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Text>Flexbox Table</Text>
          <StudentFlexTable />
        </Box>
      </Flex>
    </div>
  ));
};

export default Students;
