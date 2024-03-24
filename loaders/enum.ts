import { allowCorsFor, FnContext } from "deco/mod.ts";

export default function IconsLoader(
  _props: unknown,
  req: Request,
  ctx: FnContext,
) {
  // Allow Cors
  Object.entries(allowCorsFor(req)).map(([name, value]) => {
    ctx.response.headers.set(name, value);
  });

  return ["X", "Y", "Z"];
}
