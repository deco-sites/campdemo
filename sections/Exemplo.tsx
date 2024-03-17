export interface Props {
    text: string;
}

export default function Exemplo({ text }: Props) {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
}