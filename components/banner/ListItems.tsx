import { ListItem } from "../../sections/Example/BannerList.tsx";

export default function ListItems(props: { items: ListItem[] }) {
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
