import { useDataStore } from "../store";

export default function Todos() {
  const todos = useDataStore((state) => state.todos);
  const addTodo = useDataStore((state) => state.addTodo);

  return (
    <>
      <h2>Todos</h2>
      {todos.map((todo, i) => (
        <div key={i}>{todo}</div>
      ))}
      <button onClick={() => addTodo("Wat Neuet")}>Neues Todo</button>
    </>
  );
}
