/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { useObserver } from "mobx-react";

import RowStudentTable from "./RowStudentTable";
import Table from "../components/Table";

import { useStore } from "../store";
import { TStudent } from "../TStudent";

type StudentTableProps = {};

const StudentTable: React.FC<StudentTableProps> = () => {
  const store = useStore();

  return useObserver(() => (
    <Table titles={["Name", "Alter", "Klasse", "Aktion"]}>
      {store.studentList
        ? store.studentList.map((student: TStudent) => (
            <RowStudentTable key={student.id} student={student} />
          ))
        : null}
    </Table>
  ));
};

export default StudentTable;
