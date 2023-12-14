// pages/index.js
"use client";
import { useState, useEffect } from "react";

const fetchTodos = async () => {
  console.log("trying to fetch");
  const res = await fetch("/api/test/");
  return await res.json();
};
export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const todos = await fetchTodos();
      setTodos(todos);
    })();
  }, []);

  return (
    <>
      <p>test</p>
      {todos.length > 1 ? (
      todos.map((todo) => {
        return <p>{todo}</p>;
      })
     ) : (
       <p>no todos</p>
      )}
    </>
  );
}
