
type Params = {
    id: string;
}

type Props = {
    params: Params;
}

const getArticle = async (id: string) => {
    const res = await fetch(`http://localhost:3000/article/${id}`);
    if (!res.ok) {
        console.log(res.ok);
        throw Error('Failed to fetch article');
    }
    return res.json();
};

export default async ({ params }: Props) => {
    const { id } = params;
    const {} = await getArticle(id);
    return <div>{id}</div>;
};