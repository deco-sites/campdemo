import { Quotes } from "../../types.ts";
import { Chart } from "fresh_charts/mod.ts";

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
  quote?: Quotes;
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
      <Chart
        type="line"
        data={{
          labels: ["1", "2", "3"],
          datasets: [{
            label: "Sessions",
            data: [123, 234, 234],
          }, {
            label: "Users",
            data: [346, 233, 123],
          }],
        }}
      />
      <h1 className="text-2xl font-bold">{props.title}</h1>
      {props.description && <p className="text-gray-600">{props.description}
      </p>}
      <ListItems items={props.items} />
      {props.quote && <p>{props.quote.data[0]}</p>}
    </div>
  );
}
