import * as React from "react";
import { AiOutlinePlus } from "react-icons/ai";
// @ts-ignore
import { Flex, Box, Button } from "rebass";

import StudentTable from "./StudentTable";
import StudentModal from "./StudentModal";

type StudentsProps = {};

const Students: React.FC<StudentsProps> = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  return (
    <div>
      <Box height={16} />

      <Flex>
        <Box mx="auto" />
        <Button onClick={() => setToggle(!toggle)}>
          <AiOutlinePlus /> Neuen Schüler hinzufügen
        </Button>
      </Flex>

      <StudentTable />

      {toggle && <StudentModal toggle={toggle} setToggle={setToggle} />}
    </div>
  );
};

export default Students;
