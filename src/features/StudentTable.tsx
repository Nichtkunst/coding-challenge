import * as React from "react";
import { useObserver } from "mobx-react";

import RowStudentTable from "./RowStudentTable";
import Table from "../components/Table";

import { useStore } from "../store";
import { TStudent } from "../TStudent";

type StudentTableProps = {};

const StudentTable: React.FC<StudentTableProps> = () => {
  const store = useStore();

  console.log("store.filteredStudents", store.filteredStudents);

  return useObserver(() => (
    <Table titles={["Name", "Alter", "Klasse", "Aktion"]}>
      {store.filteredStudents.map((student: TStudent) => (
        <RowStudentTable key={student.id} student={student} />
      ))}
    </Table>
  ));
};

export default StudentTable;
