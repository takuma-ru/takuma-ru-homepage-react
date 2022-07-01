import type { NextPageWithLayout } from 'next'
import styled from 'styled-components'

import { Layout } from '../layouts/Layout'
import Divider from '../components/utils/Divider'

import { mixins } from '../styles/styledComponents/mixin'
import colors from '../styles/styledComponents/colors'

const Index: NextPageWithLayout = () => {
  return <>
    <IndexMain>
      <h1 className='my-name'>
        <span>Hi!&nbsp;</span>
        <span>I&#x27;m&nbsp;</span>
        <span>takuma-ru.</span>
      </h1>
    </IndexMain>
  </>
}

const IndexMain = styled.div`
  width: 100%;
  height: 100%;
  margin: 16px;

  display: flex;
  align-items: center;
  justify-content: start;

  
  .my-name {
    position: relative;
    width: 100%;
    margin: 0px;

    span {
      display: inline-block;
    }
  }
`

Index.getLayout = (page) => <Layout metaTitle='INDEX'>{page}</Layout>

export default Index
