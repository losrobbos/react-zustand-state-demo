import { useShallow } from "zustand/shallow";
import { useDataStore } from "../store";

export default function Home() {
  const [bears, increasePopulation] = useDataStore(
    useShallow((state) => [state.bears, state.increasePopulation])
  );

  return (
    <>
      <h2>Home</h2>
      <div>Bears count: {bears}</div>
      <button onClick={increasePopulation}>Increase</button>
    </>
  );
}
