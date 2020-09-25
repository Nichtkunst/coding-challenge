import * as React from "react";
import { useObserver } from "mobx-react";
import { Text } from "theme-ui";

import { TStudent } from "../TStudent";
import StudentModal from "./StudentModal";
import StudentActions from "./StudentActions";
import { calculateAge } from "../helpers/ageHelper";

type RowStudentTableProps = {
  student: TStudent;
};

// finally I get it
const RowStudentTable: React.FC<RowStudentTableProps> = ({ student }) => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  return useObserver(() => (
    <>
      <tr role="row">
        <td role="cell">
          <Text>{student.name}</Text>
        </td>
        <td role="cell">
          <Text>{calculateAge(student.birthdate)}</Text>
        </td>
        <td role="cell">
          <Text>{student.klasse}</Text>
        </td>
        <td role="cell">
          <StudentActions
            studentId={student.id}
            setToggle={() => setToggle(!toggle)}
          />
        </td>
      </tr>
      {toggle && (
        <StudentModal toggle={toggle} setToggle={setToggle} student={student} />
      )}
    </>
  ));
};

export default RowStudentTable;
