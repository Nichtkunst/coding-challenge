import * as React from "react";
import { observable } from "mobx";
import { useLocalStore } from "mobx-react";

// mockedStudentList
import { mockedKlasseList } from "./mockedData";
import { TStudent } from "./TStudent";
import { calculateAge } from "./helpers/ageHelper";

const createStore = () => {
  // note the use of this which refers to observable instance of the store
  return {
    query: observable.box(""),
    klasse: observable.box(""), // ?? hmm
    toggle: Boolean,
    students: [] as TStudent[], //mockedStudentList,
    klassen: mockedKlasseList,
    addStudentV(student: TStudent) {
      this.students.push(student);
    },
    editStudentV(student: TStudent) {
      const studentIndex = this.students.findIndex((i) => i.id === student.id);
      this.students[studentIndex].name = student.name;
      this.students[studentIndex].birthdate = student.birthdate;
      this.students[studentIndex].klasse = student.klasse;
    },
    setQuery(query: string) {
      this.query.set(query.toLowerCase());
    },
    setKlasse(klasse: string) {
      this.klasse.set(klasse);
    },
    // 1 list for fitered items
    // @ts-ignore
    get filteredStudents() {
      return this.students.filter(
        (i: TStudent) =>
          // @ts-ignore
          i.name.toLowerCase().includes(this.query.get()) &&
          i.klasse.includes(this.klasse.get())
      );
    },
    // abfsteigend
    sortByAgeDesc() {
      // @ts-ignore
      this.students.replace(
        this.students.slice().sort((studentA: TStudent, studentB: TStudent) => {
          return (
            calculateAge(studentA.birthdate) - calculateAge(studentB.birthdate)
          );
        })
      );
    },
    // aufsteigend
    sortByAgeAsc() {
      // @ts-ignore
      this.students.replace(
        this.students.slice().sort((studentA: TStudent, studentB: TStudent) => {
          return (
            calculateAge(studentB.birthdate) - calculateAge(studentA.birthdate)
          );
        })
      );
    },
    deleteStudent(id: number) {
      const studentToDelete = this.students.filter((i) => i.id !== id);
      this.students = studentToDelete;
    },
    setToggle() {
      return false;
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
