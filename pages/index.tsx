import type { NextPage } from 'next'
import Head from 'next/head'
import Frame from '../components/Frame'
import styles from '../styles/pages/Index.module.scss'

const Index: NextPage = () => {
  return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Frame />

        <main className={styles.main}>
        </main>

        <footer className={styles.footer}>
        </footer>
      </div>
  )
}

export default Index
