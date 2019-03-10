import React, { useState, useEffect } from "react";
import Axios from "axios";

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
  const [Todos, setTodos] = useState(null);
  const [MyTodo, setMyTodo] = useState([]);
  const [Counter, setCounter] = useState(1);

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => {
        setTodos(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/todos/${Counter}`)
      .then(res => {
        setMyTodo([...MyTodo, res.data]);
      })
      .catch(e => console.log(e));
  }, [Counter]);

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
      <p>Counter :{Counter}</p>
      <button onClick={() => setCounter(Counter + 1)}>Increment</button>
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
