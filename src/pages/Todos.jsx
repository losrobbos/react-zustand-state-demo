import { useDataStore } from "../Store";

export default function Todos() {
  const todos = useDataStore((state) => state.todos);
  const addTodo = useDataStore((state) => state.addTodo);
  console.log(todos);

  return (
    <>
      <h2>Todos</h2>
      {todos.map((todo) => (
        <div key={todo}>{todo}</div>
      ))}
      <button onClick={() => addTodo("Wat Neuet")}>Neues Todo</button>
    </>
  );
}
