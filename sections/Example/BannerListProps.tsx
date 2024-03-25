import { Quotes } from "../../loaders/Example/types.ts";
import { Secret } from "apps/website/loaders/secret.ts";
import { Section } from "deco/blocks/section.ts";
import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { AvailableIcons } from "deco-sites/campdemo/components/ui/Icon.tsx";

/**
 * @title {{text}}
 */
export interface ListItem {
  text: string;
  bold?: boolean;
  color?: "text-red-800" | "text-green-800";
}

export interface Props {
  img?: ImageWidget;
  section?: Section;
  secret?: Secret;
  html?: HTMLWidget;
  /**
   * @maxLength 5
   */
  title: string;
  description?: string;
  items: ListItem[];
  quote?: Quotes;
  /**
   * @format dynamic-options
   * @options deco-sites/campdemo/loaders/enum.ts
   */
  text: string;

  /**
   * @format icon-select
   * @options deco-sites/campdemo/loaders/availableIcons.ts
   */
  icon?: AvailableIcons;
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
      {props.img && <Image src={props.img} width={600} height={500} />}
      {props.html && <div dangerouslySetInnerHTML={{ __html: props.html }} />}
      <h1 className="text-2xl font-bold">{props.title}</h1>
      {props.description && <p className="text-gray-600">{props.description}
      </p>}
      <ListItems items={props.items} />
      {props.quote && <p>{props.quote.data[0]}</p>}
      {props.secret && props.secret.get()}
      {props.section && <props.section.Component {...props.section.props} />}
    </div>
  );
}
