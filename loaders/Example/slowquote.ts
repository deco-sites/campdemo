import { Quotes } from "../../types.ts";

export interface Prop {
  quantity?: number;
}

export default async function apiquotables(
  _prop: Prop,
  _req: Request,
  _ctx: unknown,
): Promise<Quotes> {
  // This call will hang for 5 seconds
  await fetch("https://rich-puma-16-d8ebp0p2c7ba.deno.dev/noop?N=5");
  return {
    data: [
      "The only thing we have to fear is fear itself.",
    ],
  };
}
