import React from "react";
import { ContactForm } from "./components/ContactForm.js";
import { CrudApi } from "./components/CrudApi.js";
import { CrudApp } from "./components/CrudApp.js";
import { Modals } from "./components/Modals.js";

import SelectsAnidados from "./components/SelectsAnidados.js";
import { SongSearch } from "./components/SongSearch.js";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <Modals />
      <hr />
      <ContactForm />
      {/* <SelectsAnidados /> */}
      <hr />
      {/* <SongSearch /> */}
      <hr />
      {/* <CrudApi /> */}
      <hr />
      <CrudApp />
      <hr />
    </>
  );
}

export default App;
