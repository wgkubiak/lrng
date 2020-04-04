import React, { useEffect, useState } from "react";
import "./App.css";
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

function App() {
  const [text, setText] = useState("");
  const [length, setLength] = useState(0);
  const [arr, setArr] = useState([]);

  const change = (event) => {
    setText(event.target.value);
  };

  const removeCharHandler = (index) => {
    console.log(index);
    const _arr = [...arr];

    const id = _arr.findIndex((elem, id) => {
      return id === index;
    });

    console.log(id);

    _arr.splice(id, 1);

    setArr(_arr);
  };

  useEffect(() => {
    setLength(text.length);
    setArr(Array.from(text));
  }, [text.length, text]);

  return (
    <div className="App">
      <input onChange={(event) => change(event)} value={text}></input>
      <ValidationComponent textLength={length < 5} />
      {arr.map((letter, index) => {
        return (
          <CharComponent
            key={`${letter}${index}`}
            letter={letter}
            click={() => removeCharHandler(index)}
          />
        );
      })}
    </div>
  );
}

export default App;
