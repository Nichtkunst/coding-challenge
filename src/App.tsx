import * as React from "react";
import { ThemeProvider } from "emotion-theming";
// @ts-ignore
import theme from "@rebass/preset";
import "./styles.css";

import { StoreProvider } from "./store";

import Students from "./features";

// single MobX Store e.g. in order to create or edit a student ✅

// Students can be filtered by: Name and Klasse
// Students can be sorted by each field ASC and DESC

// flexbox table

// portal === custom modal window pops up
// *new student ✅
// *edit a student

// *delete a student (inline via table)

export default function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <Students />
      </ThemeProvider>
    </StoreProvider>
  );
}
