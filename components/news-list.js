"use client"
import Link from 'next/link';
import { motion } from "framer-motion";
const visible = { opacity: 1, y: 0, transition: { duration: 0.9 } };

export default function NewsList({ news }) {
  return (
    <motion.ul className="news-list"
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 1 } }}
    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      {news.map((newsItem) => (
        <motion.li key={newsItem.id}
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible,
        }}
        viewport={{ once: false, amount: 0.2 }}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}