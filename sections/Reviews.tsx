import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface Props {
  lojaCep: string;
  reviews: string[];
  total: number;
}

export interface SectionProps {
  lojaAddress: { logradouro: string };
  reviews: string[];
  total: number;
}

export const loader = async (props: Props, _req: Request) => {
  try {
    const response = await fetch(
      `https://viacep.com.br/ws/${props.lojaCep}/json/`,
    );
    const data = await response.json();
    console.log(data);
    const lojaAddress = { logradouro: data.logradouro };
    return { ...props, lojaAddress };
  } catch (error) {
    console.error("Error fetching cep:", error);
    return { ...props, lojaAddress: { logradouro: "Default Address" } };
  }
};

export default function BannerList(props: SectionProps) {
  return (
    <div className="bg-primary p-4">
      <h1>{props.lojaAddress.logradouro}</h1>
      {props.reviews.slice(0, props.total).map((review) => <div>{review}</div>)}
      {props.reviews.length > props.total && (
        <button {...usePartialSection({ props: { total: props.total + 1 } })}>
          Load More
        </button>
      )}
      <button
        {...usePartialSection({
          props: {
            total: props.total,
            reviews: [...props.reviews].sort(() => Math.random() - 0.5),
          },
        })}
      >
        Random
      </button>
    </div>
  );
}
