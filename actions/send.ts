export interface Props {
    addr: string;
    data: string;
}

export default async function ping(props: Props, _req: Request) {
    const { addr, data } = props;
    const res = await fetch(addr, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
    });
    if (!res.ok) {
        throw new Error("Failed to send data");
    }
    return res.json();
}