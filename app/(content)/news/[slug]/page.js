import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

export default async function NewsDetailsPage({params}) {
    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug)

    if(!newsItem){
        notFound();
    }
  return (
    <article className="news-article">
<header>
        <Link href={`/news/${newsItem.slug}/image`}><img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/></Link>
        <h1>{newsItem.title}</h1>
        <time>{newsItem.date}</time>
</header>
{newsItem.content.split("\n").map((i,key) => {
            return <p key={key}>{i}</p>;
        })}
    </article>
  )
}
