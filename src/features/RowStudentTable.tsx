import * as React from "react";
import { useObserver } from "mobx-react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
// @ts-ignore
import { Button, Text } from "rebass";

import { useStore } from "../store";
import { TStudent } from "../TStudent";
import StudentModal from "./StudentModal";
import { calculateAge } from "../helpers/ageHelper";

type RowStudentTableProps = {
  student: TStudent;
};

// finally I get it
const RowStudentTable: React.FC<RowStudentTableProps> = ({ student }) => {
  const store = useStore();
  const [toggle, setToggle] = React.useState<boolean>(false);

  return useObserver(() => (
    <>
      <tr>
        <td>
          <Text>{student.name}</Text>
        </td>
        <td>
          <Text>{calculateAge(student.birthdate)}</Text>
        </td>
        <td>
          <Text>{student.klasse}</Text>
        </td>
        <td>
          <Button
            mr={2}
            variant="secondary"
            onClick={() => {
              store.deleteStudent(student.id);
              console.log("student", student.id);
            }}
          >
            <AiOutlineDelete />
          </Button>
          <Button variant="secondary" onClick={() => setToggle(!toggle)}>
            <AiOutlineEdit /> Schüler editieren
          </Button>
        </td>
      </tr>
      {toggle && (
        <StudentModal toggle={toggle} setToggle={setToggle} student={student} />
      )}
    </>
  ));
};

export default RowStudentTable;
