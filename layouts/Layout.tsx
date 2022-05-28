import { ReactElement } from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import NavigationBar from '../components/layouts/NavigationBar'
import LinkBar from '../components/layouts/LinkBar'

import { mixins } from '../composables/styles/mixin'
import colors from '../composables/styles/returnScssVariables'

type LayoutProps = Required<{
  readonly children: ReactElement
  readonly metaTitle: String
}>

export function Layout({ children, metaTitle }: LayoutProps) {
  // const

  // method

  return <>
    <LayoutMain>
      <Head>
        <title>{metaTitle}&#65372;takuma-ru</title>
        <meta name="description" content="takuma-ru's homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LinkBar />

      <NavigationBar />

      <Main>
        {children}
      </Main>
    </LayoutMain>
  </>
}

const LayoutMain = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;

  grid-template-columns: 56px 1fr 56px;
  grid-template-rows: 56px 1fr 56px;
  align-items: center;
`

const Main = styled.main`
  grid-column: 2;
  grid-row: 2;
  justify-self: start;
  align-self: flex-start;

  width: 100%;
  height: 100%;
  padding: 16px;

  color: ${colors('black')};
`