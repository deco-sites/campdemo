import Newsletter from "../../islands/Newsletter.tsx";

export interface Props {
  lojaCep: string;
  reviews: string[];
  total: number;
}

export interface SectionProps {
  lojaAddress: { rua: string };
  reviews: string[];
  total: number;
}

export const loader = (props: Props, _req: Request) => {
  const mapa: { [key: string]: { rua: string } } = {
    "123": { rua: "Rua 123" },
    "456": { rua: "Rua 456" },
  };
  return {
    ...props,
    lojaAddress: mapa[props.lojaCep] ?? { rua: "Rua Default" },
  };
};

export default function MyReviews(props: SectionProps) {
  return (
    <div>
      <h2>My Reviews</h2>
      <Newsletter content={{ title: "oi" }}></Newsletter>
      <p>Loja Address: {props.lojaAddress.rua}</p>
      <ul>
        {props.reviews.splice(0, props.total).map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
}
