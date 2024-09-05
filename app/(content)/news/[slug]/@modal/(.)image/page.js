import BackdropModal from '@/components/backdrop-modal';
import { getNewsItem } from '@/lib/news';
import { notFound, useRouter } from "next/navigation";

export default async function InterceptedImagePage({params}) {
   
    
    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug);

    if(!newsItem){
        notFound();
    }
    return <><BackdropModal />
    <dialog className="modal" open>
        <div>
            <img className="fullscreen-image" src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
        </div>
    </dialog>
    </>
}