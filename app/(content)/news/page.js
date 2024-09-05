import NewsList from '@/components/news-list';
import {getAllNews} from '@/lib/news';

export default async function NewsPage(){
  const news = await getAllNews();

  return (
    <>
    <h1>News Page</h1>
    <NewsList news={news}/>
    </>
  )}


//   'use client'
// import NewsList from '@/components/news-list';
// import { useEffect, useState } from 'react';

// export default function NewsPage(){
//   const[error, setError] =useState()
//   const[isLoading, setIsLoading] =useState(false)
//   const[news, setNews] =useState()
//   useEffect(()=>{
//     async function fetchNews() {
//       setIsLoading(true);
//       const response = await fetch('http://localhost:8080/news');
//       if(!response.ok){
//         setError('Failed to fetch data')
//         setIsLoading(false)
//       }
//     const news = await response.json();
//     setIsLoading(false)
//     setNews(news);
//   }
//   fetchNews();
// }, []);
// console.log(news)
// if(isLoading){
//   return <p>Loading...</p>
// }
// if(error){
//   return <p>{error}</p>
// }
// let newsContent;
// if(news){
//   newsContent = <NewsList news={news}/>
// }
//   return (
//     <>
//     <h1>News Page</h1>
//     {newsContent}
//     </>
//   )}

// 2 вариант server async component
// import NewsList from '@/components/news-list';

// export default async function NewsPage(){
//   const response = await fetch('http://localhost:8080/news');
//       if(!response.ok){
//         setError('Failed to fetch data')
//       }
//     const news = await response.json();

//   return (
//     <>
//     <h1>News Page</h1>
//     <NewsList news={news}/>
//     </>
//   )}