import * as React from "react";
import { observer } from "mobx-react";
// @ts-ignore
import { Flex, Box, Button } from "rebass";

import { appState } from "../store";
import StudentModal from "./StudentModal";
import StudentTable from "./StudentTable";

const Students = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  return (
    <div>
      <Box height={16} />

      <Flex>
        <Box mx="auto" />
        <Button onClick={() => setToggle(!toggle)}>
          Neuen Schüler hinzufügen
        </Button>
      </Flex>

      <StudentTable studentList={appState.studententList} />

      {toggle && <StudentModal toggle={toggle} setToggle={setToggle} />}
    </div>
  );
};

export default observer(Students);
