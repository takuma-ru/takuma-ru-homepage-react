import { ReactElement } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Divider from '../components/utils/Divider';
import NavigationBar from '../components/layouts/NavigationBar';
import LinkBar from '../components/layouts/LinkBar';

type LayoutProps = Required<{
  readonly children: ReactElement
  readonly metaTitle: String
}>

export function Layout({
  children,
  metaTitle,
}: LayoutProps) {
  // const

  // method

  return <>
    <div id='layout'>
      <Head>
        <title>{metaTitle}&#65372;takuma-ru</title>
        <meta name="description" content="takuma-ru's homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LinkBar />

      <NavigationBar />

      <main>
        {children}
      </main>


      {/* scss styled jsx */}
      <style lang='scss' scoped jsx>{`
        #layout {
          display: grid;
          width: 100vw;
          height: 100vh;

          grid-template-columns: 56px 1fr 56px;
          grid-template-rows: 56px 1fr 56px;
          align-items: center;
        }

        main {
          grid-column: 2;
          grid-row: 2;
          justify-self: start;
          align-self: flex-start;

          width: 100%;
          height: 100%;
          padding: 16px;

          color: $black;
        }

        .tool-bar {
          grid-column: 1/4;
          grid-row: 1;
        }
      `}</style>
    </div>
  </>
}