import React from "react";
import ReactDOM from "react-dom";


const name = 'Вася Пупкин2';
    const element = <h1>Привет, {name}</h1>;

    ReactDOM.render(
      element,
      document.getElementById('app')
    );