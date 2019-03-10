import React, { useState, useEffect, useReducer } from "react";
import Axios from "axios";
import { useTodos } from "./hooks/todos";

//* componentDidUpdate => useEffect(()=>{},[])
//* componentDidUpdate => useEffect(()=>{},[state,props])
//* componentWillUnmount => useEffect(()=>{ return ()=> {...}})
//! React.memo() works opposite to shouldComponentUpdate
//* shouldComponentUpdate => React.memo(function,(prevProps,nextProps)=>{return false})

//? .bind()
//? useContext

//* React.memo() => Stop rendering component unless passed props or state inside of the component are changed

const initialState = { count: 1 };
const INCREMENT = "INCREMENT";
const RESET = "RESET";

const init = () => {
  return initialState;
};

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case RESET:
      return init(action.payload);
    default:
      return state;
  }
};

export default function Hooks() {
  const [title, setTitle] = useState("Hooks");
  const [words, setWords] = useState("");
  const [MyTodo, setMyTodo] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const Todos = useTodos([]);

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/todos/${state.count}`)
      .then(res => {
        setMyTodo([...MyTodo, res.data]);
      })
      .catch(e => console.log(e));
  }, [state.count]);

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
      <p>Counter :{state.count}</p>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: RESET, payload: 1 })}>
        Reset
      </button>
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
