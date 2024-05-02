import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";

//seleccionando elemento en el DOM, creando la constante raiz

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="Ryan Rey"
      amount={3000.0}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", City: "NewYork" }}
    />
  </>
);
