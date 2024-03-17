export interface Quotes {
  data: string[];
}

export interface Prop {
  quantity?: number;
}
// [ {"q":"Far more crucial than what we know or do not know is what we do not want to know.","a":"Eric Hoffer","h":"<blockquote>&ldquo;Far more crucial than what we know or do not know is what we do not want to know.&rdquo; &mdash; <footer>Eric Hoffer</footer></blockquote>"} ]
export default async function zenquotes(
  prop: Prop,
  _req: Request,
  _ctx: unknown,
): Promise<Quotes> {
  const quantity = prop.quantity ?? 1;
  const promises = Array.from({ length: quantity }).map(() =>
    fetch("https://zenquotes.io/api/random")
  );
  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map((res) => res.json()));
  return { data: data.map((quote) => quote[0].q) };
}
