import { Quotes } from "deco-sites/campdemo/loaders/zenquotes.ts";
import { AppContext } from "deco-sites/campdemo/apps/site.ts";

export interface Prop {
  quantity?: number;
}

// {"_id":"jbHSeSpkyL5H","content":"Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.","author":"Franklin D. Roosevelt","tags":["Famous Quotes"],"authorSlug":"franklin-d-roosevelt","length":118,"dateAdded":"2021-04-23","dateModified":"2023-04-14"}
export default function apiquotables(
  _prop: Prop,
  _req: Request,
  _ctx: AppContext,
): Promise<Quotes | null> {
  _ctx.response.status = 201;
  return Promise.resolve(null);
}
