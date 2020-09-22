import { decorate, observable } from "mobx";
import { mockedStudentList, mockedKlasseList } from "../mockedData";

class Store {
  studententList = mockedStudentList;
  klassenList = mockedKlasseList;

  addEmployee = () => {
    const name = prompt("The name:");
    const birthday = prompt("birthday:");
    const klasse = prompt("klasse:");
    this.studententList.push({ name, birthday, klasse });
    // ERROR !!! this will not update the view ??? why
  };

  deleteAllStudentsList = () => {
    this.studententList = [];
    // ERROR !!! this will not update the view ??? why
  };

  deleteStudent = (name: string) => {
    this.studententList = this.studententList.filter((i) => i.name !== name);
    // ERROR !!! this will not update the view ??? why
  };
}

// see docs; so  far I don't get it
decorate(Store, {
  studententList: observable
});

const appState = new Store();

export { appState };
