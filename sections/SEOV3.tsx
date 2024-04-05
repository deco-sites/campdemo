import Seo, { Props as SeoProps } from "apps/website/components/Seo.tsx";
import {
  renderTemplateString,
  SEOSection,
} from "apps/website/components/Seo.tsx";
import { AppContext } from "deco-sites/campdemo/apps/site.ts";

type Props = Pick<
  SeoProps,
  "title" | "description" | "type" | "favicon" | "image"
>;

export function loader(
  props: Props,
  _req: Request,
  ctx: AppContext,
) {
  const {
    titleTemplate = "",
    descriptionTemplate = "",
    title: appTitle = "",
    description: appDescription = "",
    ...seoSiteProps
  } = ctx.seo ?? {};

  const { title: _title, description: _description, ...seoProps } = props;
  const title = renderTemplateString(titleTemplate, _title ?? appTitle);
  const description = renderTemplateString(
    descriptionTemplate,
    _description ?? appDescription,
  );
  const themeColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return { ...seoSiteProps, ...seoProps, themeColor, title, description };
}

function Section(props: Props): SEOSection {
  return <Seo {...props} />;
}

export { default as Preview } from "apps/website/components/_seo/Preview.tsx";

export default Section;
