import * as React from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";
import "./styles.css";

import Students from "./features";

// single MobX Store e.g. in order to create or edit a student

// Students can be filtered by: Name and Klasse
// Students can be sorted by each field ASC and DESC

// flexbox table

// portal === custom modal window pops up
// *new student
// *edit a student

// *delete a student (inline via table)

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Students />
    </ThemeProvider>
  );
}
