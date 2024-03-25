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

export const loader = async (props: Props, req: Request) => {
  try {
    const response = await fetch(
      `https://viacep.com.br/ws/${props.lojaCep}/json/`,
    );
    const data = await response.json();
    return { ...props, rua: data.logradouro };
  } catch (error) {
    console.error("Error fetching address:", error);
    return { ...props, rua: "Rua Default" };
  }
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
