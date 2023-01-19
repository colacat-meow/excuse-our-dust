import Head from 'next/head'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import { Container } from 'react-bootstrap'
import styles from "src/styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>{`T's Wreaths and Things`}</title>
        <meta name="description" content="A website for the etsy store tswreathsandthings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <Header />
        <Container fluid className={styles.main}>
          <div className={styles.wreath}>
          <h1>Please excuse our dust!</h1>
          <h2>{`We're working on our site, our wreaths, and things!`}</h2></div>
        </Container>
        <Footer />
      </div>
    </>
  )
}
