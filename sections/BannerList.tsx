import { Quotes } from "deco-sites/campdemo/loaders/zenquotes.ts";
import Rating from "../components/daisy/Rating.tsx";
import { Chart } from "fresh_charts/mod.ts";
import { ComponentChildren } from "preact/src/index.js";
import { Secret } from "apps/website/loaders/secret.ts";
import { Section } from "deco/blocks/section.ts";
import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { AvailableIcons } from "deco-sites/campdemo/components/ui/Icon.tsx";
import { AppContext } from "deco-sites/campdemo/apps/site.ts";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

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

function ListItems(props: { items: ListItem[]; children: ComponentChildren }) {
  return (
    <ul className="mt-4">
      {props.items.map((item, index) => (
        <li key={index} className={`${item.color ?? "text-gray-800"}`}>
          {item.text}
          {props.children}
        </li>
      ))}
    </ul>
  );
}

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <BannerList
      title="Error"
      items={[{ text: error?.message ?? "Unknown error", bold: true }]}
      text="A"
    />
  );
}

export function LoadingFallback() {
  return (
    <BannerList
      title="Loading"
      items={[{ text: "Loading", bold: true }]}
      text="A"
    />
  );
}

export const loader = (props: Props, req: Request, ctx: AppContext) => {
  if (!props.quote || props.quote.data.length === 0) {
    ctx.response.status = 404;
  }
  return props;
};

export default function BannerList(props: Props) {
  return (
    <div className="bg-primary p-4">
      {props.img && <Image src={props.img} width={600} height={500} />}
      {props.html && <div dangerouslySetInnerHTML={{ __html: props.html }} />}
      <Rating maxRating={5} />
      <button
        {...usePartialSection({
          props: { title: "PARTIAL" },
          href: "/page/2",
          mode: "append",
        })}
      >
        Click me!
      </button>
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
      <ListItems items={props.items}>
        <div>hi</div>
      </ListItems>
      {props.quote && <p>{props.quote.data[0]}</p>}
      {props.secret && props.secret.get()}
      {props.section && <props.section.Component {...props.section.props} />}
    </div>
  );
}
