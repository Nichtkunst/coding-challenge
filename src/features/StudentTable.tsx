import * as React from "react";
import { StudentModel } from "../interfaces/StudentModel";

import RowStudentTable from "./RowStudentTable";

// responsive HTML table

type StudentTableProps = {
  studentList: StudentModel[];
};

const StudentTable: React.FC<StudentTableProps> = ({ studentList }) => {
  // logged mobX
  console.log("studentList", studentList);

  return (
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
        {studentList.map((student, index) => (
          <RowStudentTable key={index} student={student} />
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
