import * as React from "react";
import { StudentModel } from "../interfaces/StudentModel";
// @ts-ignore
import { Button } from "rebass";

import { appState } from "../store";

type RowStudentTableProps = {
  student: StudentModel;
};

// finally I get it
const RowStudentTable: React.FC<RowStudentTableProps> = ({ student }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.birthdate}</td>
      <td>{student.klasse}</td>
      <td>
        <Button
          variant="secondary"
          onClick={() => {
            appState.deleteStudent(student.name);
            console.log("student", student);
          }}
        >
          Schüler löschen
        </Button>
      </td>
    </tr>
  );
};

export default RowStudentTable;
