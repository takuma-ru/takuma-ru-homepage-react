import { ReactElement } from 'react'
import Head from 'next/head'

type LayoutProps = Required<{
  readonly children: ReactElement
  readonly metaTitle: String
}>

export function Layout({
  children,
  metaTitle,
}: LayoutProps) {
  return(
    <div>
      <Head>
        <title>{metaTitle}&#65372;takuma-ru</title>
        <meta name="description" content="takuma-ru's homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        hello
        {children}
      </main>

      {/* scss styled jsx */}
      <style lang='scss' scoped jsx>{`
        main {
          color: $black;
        }
      `}</style>
    </div>
  )
}