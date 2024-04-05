import defaults from "deco/engine/manifest/defaults.ts";
import { Route } from "apps/website/flags/audience.ts";
import { type Props as RedirectProps } from "apps/website/loaders/redirect.ts";

const isHref = (from: string) => !from.includes("*") && !from.includes(":");


/**
 * @title Redirects
 */
export default async function Redirects(
  _props: unknown,
  _req: Request,
  _ctx: unknown,
): Promise<Route[]> {

    const allRedirects = [{redirect: {from: "/hello", to: "/world", type: "temporary"}}];
    const routes: Route[] = allRedirects.map(({ redirect }) => ({
        pathTemplate: redirect.from,
        isHref: isHref(redirect.from),
        handler: {
          value: {
            __resolveType: "website/handlers/redirect.ts",
            to: redirect.to,
            type: redirect.type,
          },
        },
      }));
    


  return routes;
}