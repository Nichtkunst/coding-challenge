import * as React from "react";
import { useObserver } from "mobx-react";
// @ts-ignore
import { Button } from "rebass";

import { storeContext } from "../store";
import { IStudent } from "../interfaces/IStudent";

type RowStudentTableProps = {
  student: IStudent;
};

// finally I get it
const RowStudentTable: React.FC<RowStudentTableProps> = ({ student }) => {
  const store = React.useContext(storeContext);

  return useObserver(() => (
    <tr>
      <td>{student.name}</td>
      <td>{student.birthdate}</td>
      <td>{student.klasse}</td>
      <td>
        <Button
          variant="secondary"
          onClick={() => {
            store.deleteStudent(student.id);
            console.log("student", student.id);
          }}
        >
          Schüler löschen
        </Button>
      </td>
    </tr>
  ));
};

export default RowStudentTable;
