import { getNewsItem } from '@/lib/news';
import { notFound } from "next/navigation";

export default async function ImagePage({params}) {
    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug);

    if(!newsItem){
        notFound();
    }
    return <div>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
    </div>
}