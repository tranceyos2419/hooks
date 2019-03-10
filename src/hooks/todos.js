import { useState, useEffect } from "react";
import Axios from "axios";

export const useTodos = dependencies => {
  const [Todos, setTodos] = useState(null);

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => {
        setTodos(res.data);
      })
      .catch(e => console.log(e));
  }, dependencies);
  return Todos;
};
