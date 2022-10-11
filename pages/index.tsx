import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Carousel from '../components/Page'
import Header from '../components/Header'

const Home: NextPage = () => {

  const [carouselControl, setCarouselControl] = useState("")

  useEffect(() => {
    setCarouselControl("")
  }, [carouselControl])

  return (
    <div className="relative font-custom bg-neutral-400">
      <Head>
        <title>Room</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Header />

      <main>
        
        <Carousel />

      </main>
    </div>
  )
}

export default Home
