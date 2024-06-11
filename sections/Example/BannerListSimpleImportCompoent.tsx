import { Quotes } from "../../types.ts";
import ListItems from "../../components/banner/ListItems.tsx";
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
}

export default function BannerList(props: Props) {
  return (
    <div className="bg-primary p-4">
      <h1 className="text-2xl font-bold">{props.title}</h1>
      {props.description && <p className="text-gray-600">{props.description}
      </p>}
      <ListItems items={props.items}></ListItems>
      {props.quote && <p>{props.quote.data[0]}</p>}
    </div>
  );
}
