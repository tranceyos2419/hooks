import React, { useState, useEffect, useReducer } from "react";
import Axios from "axios";
import { useTodos } from "./hooks/todos";
import { useCounterValue } from "./context/counter/counter";
import { INCREMENT, RESET } from "./context/counter/counterType";

//* componentDidUpdate => useEffect(()=>{},[])
//* componentDidUpdate => useEffect(()=>{},[state,props])
//* componentWillUnmount => useEffect(()=>{ return ()=> {...}})
//! React.memo() works opposite to shouldComponentUpdate
//* shouldComponentUpdate => React.memo(function,(prevProps,nextProps)=>{return false})

// React.memo() => Stop rendering component unless passed props or state inside of the component are changed

//? .bind()

export default function Hooks() {
  const [title, setTitle] = useState("Hooks");
  const [words, setWords] = useState("");
  const [MyTodo, setMyTodo] = useState([]);
  const [{ count }, dispatch] = useCounterValue();
  const Todos = useTodos([]);

  useEffect(() => {
    if (count === 1) {
      setMyTodo([]);
    } else {
      Axios.get(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(res => {
          setMyTodo([...MyTodo, res.data]);
        })
        .catch(e => console.log(e));
    }
  }, [count]);

  console.log(`my todo ${JSON.stringify(MyTodo)}`);
  return (
    <div>
      <h2>{title}</h2>
      <input
        type="text"
        value={words}
        onChange={e => setWords(e.target.value)}
      />
      <br />
      <p>Counter :{count}</p>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
      <br />
      <h3>My Todo list</h3>
      <ul>
        {MyTodo ? (
          MyTodo.map(todo => <li key={todo.id}>{todo.title}</li>)
        ) : (
          <div />
        )}
      </ul>
      <h3>Todo List</h3>
      <ul>
        {Todos ? (
          Todos.map(todo => <li key={todo.id}>{todo.title}</li>)
        ) : (
          <div />
        )}
      </ul>
    </div>
  );
}
