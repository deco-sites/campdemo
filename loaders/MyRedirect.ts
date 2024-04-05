import { Route } from "apps/website/flags/audience.ts";

const isHref = (from: string) => !from.includes("*") && !from.includes(":");

/**
 * @title Redirects
 */
export default function Redirects(
  _props: unknown,
  _req: Request,
  _ctx: unknown,
): Route[] {
  const allRedirects = [{
    redirect: { from: "/hello", to: "/world", type: "temporary" },
  }];
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
