import * as React from "react";
import { useObserver } from "mobx-react";

import RowStudentTable from "./RowStudentTable";

import { useStore } from "../store";
import { TStudent } from "../TStudent";

// responsive HTML table

type StudentTableProps = {};

const StudentTable: React.FC<StudentTableProps> = () => {
  const store = useStore();

  return useObserver(() => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Alter</th>
          <th>Klasse</th>
          <th>Aktion</th>
        </tr>
      </thead>
      <tbody>
        {store.students
          ? store.studentList.map((student: TStudent) => (
              <RowStudentTable key={student.id} student={student} />
            ))
          : null}
      </tbody>
    </table>
  ));
};

export default StudentTable;
