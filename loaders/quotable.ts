import { Quotes } from "deco-sites/campdemo/loaders/zenquotes.ts";

export interface Prop {
  quantity?: number;
}

// {"_id":"jbHSeSpkyL5H","content":"Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.","author":"Franklin D. Roosevelt","tags":["Famous Quotes"],"authorSlug":"franklin-d-roosevelt","length":118,"dateAdded":"2021-04-23","dateModified":"2023-04-14"}
export default async function apiquotables(
  prop: Prop,
  _req: Request,
  _ctx: unknown,
): Promise<Quotes> {
  const quantity = prop.quantity ?? 1;
  const promises = Array.from({ length: quantity }).map(() =>
    fetch("https://api.quotable.io/random")
  );
  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map((res) => res.json()));
  return { data: data.map((quote) => quote.content) };
}
