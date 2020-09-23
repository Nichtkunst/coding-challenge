import * as React from "react";
import { useLocalStore } from "mobx-react";

import { mockedStudentList, mockedKlasseList } from "./mockedData";
import { TStudent } from "./TStudent";

const createStore = () => {
  // note the use of this which refers to observable instance of the store
  return {
    students: [] as TStudent[],
    studentList: mockedStudentList, //mockedStudentList,
    klassen: mockedKlasseList,
    addStudent(student: TStudent) {
      this.students.push(student);
    },
    deleteStudent(id: string) {
      this.students.filter((i) => i.id !== id);
      console.log("studentList", this.students);
    },
    get singleStudent() {
      return this.students.filter((i) => i.id);
    }
  };
};

export type TStore = ReturnType<typeof createStore>;

const storeContext = React.createContext<TStore | null>(null);

const StoreProvider = (props: { children: React.ReactNode }) => {
  const store = useLocalStore(createStore);

  return (
    <storeContext.Provider value={store}>
      {props.children}
    </storeContext.Provider>
  );
};

const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};

export { storeContext, StoreProvider, createStore, useStore };
