import React from "react"; // we need this to make JSX compile

type CurrentConditionsCard = {
  title: string;
  paragraph: string;
};

export const CurrentConditionsCard = ({
  title,
  paragraph,
}: CurrentConditionsCard) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </aside>
);
