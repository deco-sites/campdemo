import { useSignal } from "@preact/signals";
import { invoke } from "deco-sites/campdemo/runtime.ts";

export default function ClickIsland() {
  const data = useSignal("");
  const handleClick = async () => {
    const quotes = await invoke["deco-sites/campdemo"].loaders.Example.mixed(
      {},
    );
    data.value = quotes.data.join(", ");
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      <div>{data}</div>
    </div>
  );
}
