import { Route } from "apps/website/flags/audience.ts";

export interface Props {
  excludePaths: string[];
}

/**
 * @title Redirects
 */
export default async function MySitemap(
  props: Props,
  _req: Request,
  _ctx: unknown,
): Promise<Route[]> {

    const routes: Route[] = [{
        pathTemplate: "/sitemap.xml",
        isHref: true,
        handler: {
          value: {
            excludePaths: props.excludePaths,
            __resolveType: "website/handlers/sitemap.ts",
          },
        },
      }];
    
  return routes;
}