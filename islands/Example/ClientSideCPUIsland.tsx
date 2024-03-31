import { useSignal } from "@preact/signals";
import { invoke } from "deco-sites/campdemo/runtime.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect } from "preact/hooks";

export default function ClickIsland() {
  const data = useSignal("");
  useEffect(() => {
    const start = Date.now();
    while (Date.now() - start < 5000) {
      // Do some CPU-intensive task here
      // For example, calculate prime numbers
      let isPrime = true;
      const num = 999999999;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    data.value = "urgh, my cpu";
  });

  if (!IS_BROWSER) {
    return <div></div>;
  }
  return (
    <div>
      {data.value && (
        <div>
          <div>{data}</div>
          <img src="https://placehold.co/600x400"></img>
        </div>
      )}
    </div>
  );
}
