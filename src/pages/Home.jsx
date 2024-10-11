import { useDataStore } from "../Store";

export default function Home() {
  const bears = useDataStore((state) => state.bears)
  const increasePopulation = useDataStore((state) => state.increasePopulation);
  // const [bears, increasePopulation] = useDataStore(state => [state.bears, state.increasePopulation])

  return <>
    <h2>Home</h2>
    <div>Bears count: {bears}</div>
    <button onClick={increasePopulation}>Increase</button>
  </>;
}
