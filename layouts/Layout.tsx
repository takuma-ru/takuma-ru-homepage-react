import { ReactNode } from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import NavigationBar from '../components/layouts/NavigationBar'
import LinkBar from '../components/layouts/LinkBar'

import { mixins } from '../styles/styledComponents/mixin'
import colors from '../styles/styledComponents/colors'
import NavigationDrawer from '../components/layouts/NavigationDrawer'

type LayoutProps = Required<{
  readonly children: ReactNode
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
      <NavigationDrawer />

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
  grid-template-rows: 56px calc(100vh - 56px - 56px) 56px;
  align-items: center;
`

const Main = styled.main`
  grid-column: 2;
  grid-row: 2;
  ${mixins.screenSm} {
    grid-column: 1/4;
    grid-row: 2/4;
  }
  justify-self: start;
  align-self: flex-start;

  width: 100%;
  height: 100%;
  padding: 16px;

  color: ${colors('black')};
`