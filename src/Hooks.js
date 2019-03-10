import React, { useState, useEffect } from "react";

//* componentDidUpdate => useEffect(()=>{},[])
//* componentDidUpdate => useEffect(()=>{},[state,props])
//* componentWillUnmount => useEffect(()=>{ return ()=> {...}})
//! React.memo() works opposite to shouldComponentUpdate
//* shouldComponentUpdate => React.memo(function,(prevProps,nextProps)=>{return false})

//? .bind()

//* React.memo() => Stop rendering component unless passed props or state inside of the component are changed

export default function Hooks() {
  const [title, setTitle] = useState("Hooks");

  const [words, setWords] = useState("");

  return (
    <div>
      <h2>{title}</h2>
      <input
        type="text"
        value={words}
        onChange={e => setWords(e.target.value)}
      />
    </div>
  );
}
