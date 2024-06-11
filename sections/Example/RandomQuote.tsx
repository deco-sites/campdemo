import { Quotes } from "../../types.ts";

export interface Props {
  quote?: Quotes | null;
}

export default function RandomQuote(props: Props) {
  return (
    <div className="bg-primary p-4">
      <h1 className="text-2xl font-bold">Random Quote</h1>
      {props.quote && <p>{props.quote.data[0]}</p>}
    </div>
  );
}
