/** @jsx jsx */
import * as React from "react";
import { useObserver } from "mobx-react";

import RowStudentTable from "./RowStudentTable";
import Table from "../components/Table";
import StudentTableTitle from "./StudentTableTitle";

import { SortOrder, useStore } from "../store";
import { TStudent } from "../TStudent";
import { jsx } from "theme-ui";

type StudentTableProps = {};

const StudentTable: React.FC<StudentTableProps> = () => {
  const store = useStore();

  return useObserver(() => (
    <Table
      titles={[
        {
          id: "1",
          component: (
            <StudentTableTitle
              title="Name"
              filterAsc={() => store.setOrder(SortOrder.sortByNameAsc)}
              filterDesc={() => store.setOrder(SortOrder.sortByNameDesc)}
            />
          )
        },
        {
          id: "2",
          component: (
            <StudentTableTitle
              title="Alter"
              filterAsc={() => store.setOrder(SortOrder.sortByAgeAsc)}
              filterDesc={() => store.setOrder(SortOrder.sortByAgeDesc)}
            />
          )
        },
        {
          id: "3",
          component: (
            <StudentTableTitle
              title="Klasse"
              filterAsc={() => store.setOrder(SortOrder.sortByKlasseAsc)}
              filterDesc={() => store.setOrder(SortOrder.sortByKlasseDesc)}
            />
          )
        },
        { id: "4", component: <div>Aktion</div> }
      ]}
    >
      {store.filteredStudents.map((student: TStudent) => (
        <RowStudentTable key={student.id} student={student} />
      ))}
    </Table>
  ));
};

export default StudentTable;
