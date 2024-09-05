import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news"

export default async function LatestPage() {
    const latest = await getLatestNews();
    return (
      <> 
      <h2>
        Latest facts
        </h2>
        <NewsList news={latest}/>
        </>
    )
  }
  