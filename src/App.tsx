import * as React from "react";
import { ThemeProvider } from "theme-ui";
import { theme as swiss } from "./theme";
import "./styles.css";

import { StoreProvider } from "./store";

import Students from "./features";

// single MobX Store e.g. in order to create or edit a student ✅

// Name && Klasse ???
// Students can be filtered by: Name and Klasse ✅
// Students can be sorted by each field ASC and DESC
// * age ✅
// * TODO: klasse
// * TODO: name

// flexbox table *TODO ✅ requirements ???
// responsive table ✅

// portal === custom modal window pops up ✅
// *new student ✅
// *edit a student ✅

// *delete a student (inline via table) ✅

export default function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={swiss}>
        <Students />
      </ThemeProvider>
    </StoreProvider>
  );
}
