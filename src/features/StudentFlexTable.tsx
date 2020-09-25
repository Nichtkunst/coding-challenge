/** @jsx jsx */
import * as React from "react";
import { useObserver } from "mobx-react";
import { Flex, Box, jsx } from "theme-ui";

import { SortOrder, useStore } from "../store";
import { TStudent } from "../TStudent";
import StudentTableTitle from "./StudentTableTitle";
import StudentModal from "./StudentModal";
import StudentActions from "./StudentActions";
import { calculateAge } from "../helpers/ageHelper";

// flexbox table in case they wanna have it

const StudentFlexTable = () => {
  const store = useStore();
  const [toggle, setToggle] = React.useState<boolean>(false);

  return useObserver(() => (
    <Box>
      <Flex
        sx={{
          padding: "8px",
          flexDirection: ["column", "row"],
          alignItems: "center",
          background: "#333",
          justifyContent: "space-between"
        }}
      >
        <StudentTableTitle
          title="Name"
          filterAsc={() => store.setOrder(SortOrder.sortByNameAsc)}
          filterDesc={() => store.setOrder(SortOrder.sortByNameDesc)}
        />
        <StudentTableTitle
          title="Alter"
          filterAsc={() => store.setOrder(SortOrder.sortByAgeAsc)}
          filterDesc={() => store.setOrder(SortOrder.sortByAgeDesc)}
        />
        <StudentTableTitle
          title="Klasse"
          filterAsc={() => store.setOrder(SortOrder.sortByKlasseAsc)}
          filterDesc={() => store.setOrder(SortOrder.sortByKlasseDesc)}
        />
        <Box sx={{ color: "#fff", fontWeight: "bold" }}>Aktion</Box>
      </Flex>
      {store.filteredStudents.map((student: TStudent) => (
        <Flex
          sx={{
            flexDirection: ["column", "row"],
            justifyContent: "space-between",
            p: "8px"
          }}
          key={student.id}
        >
          <Box>{student.name}</Box>
          <Box>{calculateAge(student.birthdate)}</Box>
          <Box>{student.klasse}</Box>
          <Box>
            <StudentActions
              studentId={student.id}
              setToggle={() => setToggle(!toggle)}
            />
          </Box>
          {toggle && (
            <StudentModal
              toggle={toggle}
              setToggle={setToggle}
              student={student}
            />
          )}
        </Flex>
      ))}
    </Box>
  ));
};

export default StudentFlexTable;
