import Head from 'next/head'
import PostDetailPage from '../component/Posts/Detail'

export default function Posts() {
  return(
    <>
      <Head>
        <title>냥집사즈</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      </Head>
      <PostDetailPage />
    </>
  )
}