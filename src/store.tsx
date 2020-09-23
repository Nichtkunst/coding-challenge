import * as React from "react";
import { useLocalStore } from "mobx-react";

import { mockedStudentList, mockedKlasseList } from "./mockedData";
import { IStudent } from "./interfaces/IStudent";

const storeContext = React.createContext();

const StoreProvider = (props: { children: React.ReactNode }) => {
  const store = useLocalStore(() => ({
    studentList: mockedStudentList,
    klasseList: mockedKlasseList,
    addStudent: (student: IStudent) => {
      store.studentList.push(student);
    },
    deleteStudent: (id: string) => {
      store.studentList.filter((i) => i.id !== id);
      console.log("studentList", store.studentList);
    }
  }));

  return (
    <storeContext.Provider value={store}>
      {props.children}
    </storeContext.Provider>
  );
};

export { storeContext, StoreProvider };
