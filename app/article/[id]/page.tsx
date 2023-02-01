import Image from "next/image";
import { Article } from "types/article";

type Params = {
    id: string;
}

type Props = {
    params: Params;
}

const getArticle = async (id: string): Promise<Article> => {
    const res = await fetch(`http://localhost:3000/article/${id}`);
    if (!res.ok) {
        console.log(res.ok);
        throw Error('Failed to fetch article');
    }
    return res.json();
};

export default async ({ params }: Props) => {
    const { id } = params;
    const {
        title,
        headingImage,
        headingImageDesc,
        firstParagraph,
        firstParagraphImage,
        firstParagraphImageDesc,
        secondParagraph,
        secondParagraphImage,
        secondParagraphImageDesc,
    } = await getArticle(id);
    return (
        <article className="prose lg:prose-xl dark:prose-invert">
            <h1>{title}</h1>
            {headingImage && (
                <figure>
                    <Image
                        width={640}
                        height={480}
                        src={headingImage}
                        alt="heading_image"
                    />
                    <figcaption>{headingImageDesc}</figcaption>
                </figure>
            )}
            <p>{firstParagraph}</p>
            {firstParagraphImage && (
                <figure>
                    <Image
                        width={640}
                        height={480}
                        src={firstParagraphImage}
                        alt="heading_image"
                    />
                    <figcaption>{firstParagraphImageDesc}</figcaption>
                </figure>
            )}
            {secondParagraph && <p>{secondParagraph}</p>}
            {secondParagraphImage && (
                <figure>
                    <Image
                        width={640}
                        height={480}
                        src={secondParagraphImage}
                        alt="heading_image"
                    />
                    <figcaption>{secondParagraphImageDesc}</figcaption>
                </figure>
            )}
        </article>
    );
};