import Image from "next/image";
import Link from "next/link";
import { FeedItem } from "../../../types/feed";

type Props = FeedItem;

export default ({
    id,
    text,
    title,
    image
}: Props) => {
    return (
        <div className="w-full card card-compact bg-base-100 shadow-xl">
            <div className="card-body">
                <Link href={`/article/${id}`}>
                    <h2 className="card-title">{title}</h2>
                    <Image
                        style={{ margin: 'auto' }}
                        width="500"
                        height="500"
                        src={image}
                        alt="article image"
                    />
                    <p>{text}</p>
                </Link>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};
