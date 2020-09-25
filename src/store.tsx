import * as React from "react";
import { observable } from "mobx";
import { useLocalStore } from "mobx-react";

// mockedStudentList
import { mockedKlasseList } from "./mockedData";
import { TStudent } from "./TStudent";
import { calculateAge } from "./helpers/ageHelper";

enum SortOrder {
  "sortByAgeAsc" = "sortByAgeAsc",
  "sortByAgeDesc" = "sortByAgeDesc",
  "sortByNameAsc" = "sortByNameAsc",
  "sortByNameDesc" = "sortByNameDesc",
  "sortByKlasseAsc" = "sortByKlasseAsc",
  "sortByKlasseDesc" = "sortByKlasseeDesc"
}

const createStore = () => {
  // note the use of this which refers to observable instance of the store
  return {
    query: observable.box(""),
    klasse: observable.box(""),
    order: observable.box(""),
    students: [] as TStudent[],
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
    setOrder(order: string) {
      this.order.set(order);
    },
    // filterLogic
    // @ts-ignore
    get filteredStudents() {
      const copyArray = this.students;
      console.log("what is th order", this.order.get());
      if (this.query.get() || this.klasse.get()) {
        return copyArray.filter(
          (i: TStudent) =>
            // @ts-ignore
            i.name.toLowerCase().includes(this.query.get()) &&
            i.klasse.includes(this.klasse.get())
        );
      } else if (this.order.get() === SortOrder.sortByAgeAsc) {
        const result = this.students.slice();
        return result.sort((studentA: TStudent, studentB: TStudent) => {
          return (
            calculateAge(studentA.birthdate) - calculateAge(studentB.birthdate)
          );
        });
      } else if (this.order.get() === SortOrder.sortByAgeDesc) {
        const result = this.students.slice();
        return result.sort((studentA: TStudent, studentB: TStudent) => {
          return (
            calculateAge(studentB.birthdate) - calculateAge(studentA.birthdate)
          );
        });
      } else if (this.order.get() === SortOrder.sortByNameAsc) {
        const result = this.students.slice();
        return result.sort((studentA: TStudent, studentB: TStudent) =>
          studentA.name.localeCompare(studentB.name)
        );
      } else if (this.order.get() === SortOrder.sortByNameDesc) {
        const result = this.students.slice();
        return result.sort((studentA: TStudent, studentB: TStudent) =>
          studentB.name.localeCompare(studentA.name)
        );
      } else if (this.order.get() === SortOrder.sortByKlasseAsc) {
        const result = this.students.slice();
        return result.sort((studentA: TStudent, studentB: TStudent) =>
          studentA.klasse.localeCompare(studentB.klasse)
        );
      } else if (this.order.get() === SortOrder.sortByKlasseDesc) {
        const result = this.students.slice();
        return result.sort((studentA: TStudent, studentB: TStudent) =>
          studentB.klasse.localeCompare(studentA.klasse)
        );
      } else {
        return this.students;
      }
    },
    deleteStudent(id: number) {
      const studentToDelete = this.students.filter((i) => i.id !== id);
      this.students = studentToDelete;
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

export { storeContext, StoreProvider, createStore, useStore, SortOrder };
