import type { NextPageWithLayout } from 'next'
import styled from 'styled-components'

import { Layout } from '../layouts/Layout'
import Divider from '../components/utils/Divider'

import { mixins } from '../composables/styles/mixin'
import { colors } from '../composables/styles/color'

const Index: NextPageWithLayout = () => {
  return <>
    <IndexMain>
      <h1 className='my-name'>
        Hi! I&#x27;m takuma-ru.
      </h1>
    </IndexMain>
  </>
}

const IndexMain = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: start;

  .my-name {
    position: relative;
    margin: 0px;
  }
`

Index.getLayout = (page) => <Layout metaTitle='INDEX'>{page}</Layout>

export default Index
