import * as React from "react";
import { useLocalStore } from "mobx-react";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";

// mockedStudentList
import { mockedKlasseList } from "./mockedData";
import { TStudent } from "./TStudent";
import { calculateAge } from "./helpers/ageHelper";

// Students can be filtered by: Name and Klasse *TODO

const createStore = () => {
  // note the use of this which refers to observable instance of the store
  return {
    toggle: Boolean,
    students: [] as TStudent[], // [] as TStudent[],
    studentList: [] as TStudent[], //mockedStudentList,
    klassen: mockedKlasseList,
    addStudent(name: string, birthdate: string, klasse: string) {
      this.students.push({ id: uuidv4(), name, birthdate, klasse });
    },
    addStudentV(student: TStudent) {
      this.studentList.push(student);
    },
    editStudentV(student: TStudent) {
      const studentIndex = this.studentList.findIndex(
        (i) => i.id === student.id
      );
      this.studentList[studentIndex].name = student.name;
      this.studentList[studentIndex].birthdate = student.birthdate;
      this.studentList[studentIndex].klasse = student.klasse;
    },
    // abfsteigend
    sortByAgeDesc() {
      // @ts-ignore
      this.studentList.replace(
        this.studentList
          .slice()
          .sort((studentA: TStudent, studentB: TStudent) => {
            return (
              calculateAge(studentA.birthdate) -
              calculateAge(studentB.birthdate)
            );
          })
      );
    },
    // aufsteigend
    sortByAgeAsc() {
      // @ts-ignore
      this.studentList.replace(
        this.studentList
          .slice()
          .sort((studentA: TStudent, studentB: TStudent) => {
            return (
              calculateAge(studentB.birthdate) -
              calculateAge(studentA.birthdate)
            );
          })
      );
    },
    deleteStudent(id: number) {
      const studentToDelete = this.studentList.filter((i) => i.id !== id);
      console.log("studentToDelete", studentToDelete);
      this.studentList = studentToDelete;
    },
    setToggle() {
      return false;
    }
    /* get singleStudent() {
      return this.students.filter((i) => i.id);
    }*/
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
