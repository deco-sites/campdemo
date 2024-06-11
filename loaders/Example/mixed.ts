import { AppContext } from "deco-sites/campdemo/apps/site.ts";
import { Quotes } from "../../types.ts";

export default async function mixed(
  _props: unknown,
  _req: Request,
  ctx: AppContext,
): Promise<Quotes> {
  const result1 = await ctx.invoke["deco-sites/campdemo"].loaders.Example
    .zenquotes({ quantity: 1 });
  const result2 = await ctx.invoke["deco-sites/campdemo"].loaders.Example
    .quotable({ quantity: 1 });
  return { data: [...result1.data, ...result2.data] };
}
