"use client"
import logo from '@/assets/logo.jpg'
import Link from 'next/link';
import { motion } from "framer-motion";
const visible = { opacity: 1, y: 0, transition: { duration: 0.9 } };
export default function HomePage() {
  return (
    <motion.div initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 1 } }}
    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    id="home">
      <motion.img src={logo.src} variants={{
              hidden: { opacity: 0, y: -10 },
              visible,
            }}
            viewport={{ once: false, amount: 0.4 }} alt="A newspaper" className='w-80' />
      <motion.h1 variants={{
              hidden: { opacity: 0, y: -15 },
              visible,
            }}
            viewport={{ once: false, amount: 0.4 }}>
              <span className='title'>FEW FACTS</span> For You</motion.h1>
      <motion.div
      variants={{
        hidden: { opacity: 0, y: +5 },
        visible,
      }}
      viewport={{ once: false, amount: 0.4 }}>

      <p>
        FewFacts is here to deliver you all the latest interesting facts - concise &
        unbiased!
      </p>

      <p>
        FewFacts aims to provide you with the latest news in a concise and
        unbiased manner. We strive to deliver the news in a way that is easy to
        understand and to the point. We want to keep you informed without
        overwhelming you with unnecessary information.
      </p>

      <p>
        <Link href="/news">Read the latest news</Link>
      </p>
      </motion.div>
    </motion.div>
  );
}