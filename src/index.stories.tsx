import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number, text } from "@storybook/addon-knobs";

import { ClickCounterButton } from "./ClickCounterButton";

export default {
  title: "ClickCounterButton",
  decorators: [withKnobs],
};


export const ButtonOne: React.FC<{}> = () => {
  return(
    <button>{text("Name", "Пример кнопки")}</button>
  )
}

export const ClickCounterButtonStory: React.FC<{}> = () => {
  const count = number("Number", 0);

  return (
    <ClickCounterButton increment={action("Increment")}>
      {count}
    </ClickCounterButton>
  );
};

export const HeaderD: React.FC<{}> = () => {
  return (
    <h1 onClick={action("Hesd")}>{text("Header", "MegaHeader")}</h1>
  )
}


export const HelloWorld: React.FC<{}> = () => {
  const name = 'Вася Пупкин';
  return (
    <h1>Привет, {text("Имя", name)}</h1>
  )
}






    