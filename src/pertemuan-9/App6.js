import { useState } from "react";
import Header from "./header";

const App = () => {
  const [welcome, setWelcome] = useState("Welcome");

  const handleClickEvent = () => {
    setWelcome("Selamat Datang");
  };

  const handleClickEvent2 = () => {
    console.log("Button Pressed");
  };

  return (
    <>
      <h1>{welcome}</h1>
      <Header
        text={welcome}
        onClicklogo={handleClickEvent}
        onClickOther={handleClickEvent2}
      />
    </>
  );
};

export default App;
