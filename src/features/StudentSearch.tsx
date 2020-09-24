import * as React from "react";
import { useObserver } from "mobx-react";
import { Label, Select, Box, Input } from "theme-ui";

import { useStore } from "../store";
import { TKlasse } from "../TStudent";

const StudentSearch = () => {
  const store = useStore();

  return useObserver(() => (
    <>
      <Box sx={{ width: "220px" }}>
        <Label htmlFor="name">Nach Name filtern</Label>
        <Input
          value={store.query.get()}
          onChange={(e) => store.setQuery(e.target.value)}
        />
      </Box>
      <Box sx={{ width: [null, "32px"], height: ["16px", null] }} />
      <Box sx={{ width: "220px" }}>
        <Label htmlFor="klasse">Nach Klasse filtern</Label>
        <Select
          id="klasse"
          value={store.klasse.get()}
          onChange={(e) => {
            console.log(e.target.value);
            store.setKlasse(e.target.value);
          }}
          name="klasse"
        >
          <option key="1" value="" disabled selected>
            Bitte auswählen...
          </option>
          {store.klassen.map((i: TKlasse, index: number) => (
            <option key={index} value={i.klasse}>
              {i.klasse}
            </option>
          ))}
        </Select>
      </Box>
      <Box sx={{ width: [null, "32px"], height: ["16px", null] }} />
      <Box sx={{ width: "220px" }}>
        <Label htmlFor="country">Nach Alter sortieren</Label>
        <Select
          id="alter"
          name="alter"
          onChange={(e: any) => {
            if (e.target.value === "absteigend") {
              store.sortByAgeDesc();
            } else if (e.target.value === "aufsteigend") {
              store.sortByAgeAsc();
            } else {
              return;
            }
          }}
        >
          <option key="1" value="" disabled selected>
            Bitte auswählen...
          </option>
          <option key="2" value="absteigend">
            absteigend
          </option>
          <option key="3" value="aufsteigend">
            aufsteigend
          </option>
        </Select>
      </Box>
    </>
  ));
};

export default StudentSearch;
