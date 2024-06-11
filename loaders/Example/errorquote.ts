import { Quotes } from "../../types.ts";

export default function apiquotables(
  _prop: unknown,
  _req: Request,
  _ctx: unknown,
): Promise<Quotes> {
  throw new Error("Ops... -- error from loader");
}
