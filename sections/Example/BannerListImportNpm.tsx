import { Quotes } from "../../loaders/Example/types.ts";
import currency from "npm:currency-in-words@3.0.1";

/**
 * @title {{text}}
 */
export interface ListItem {
  text: string;
  bold?: boolean;
  color?: "text-red-800" | "text-green-800";
}

export interface Props {
  title: string;
  description?: string;
  items: ListItem[];
  quote?: Quotes | null;
  currency: string;
}

function ListItems(props: { items: ListItem[] }) {
  return (
    <ul className="mt-4">
      {props.items.map((item, index) => (
        <li key={index} className={`${item.color ?? "text-gray-800"}`}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default function BannerList(props: Props) {
  return (
    <div className="bg-primary p-4">
      <h1 className="text-2xl font-bold">{props.title}</h1>
      {props.description && <p className="text-gray-600">{props.description}
      </p>}
      {currency.convert(props.currency)}
      <ListItems items={props.items}></ListItems>
      {props.quote && <p>{props.quote.data[0]}</p>}
    </div>
  );
}
