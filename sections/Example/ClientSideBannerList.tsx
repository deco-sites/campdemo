import ClientSideIsland from "../../islands/Example/ClientSideIsland.tsx";

export interface Props {
  fast?: boolean;
}
export default function ClientSideBannerList(props: Props) {
  return <ClientSideIsland {...props} />;
}
