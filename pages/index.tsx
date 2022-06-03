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
  justify-content: end;

  .my-name {
    position: relative;
    margin: 0px;

    font-size: 10vmin;
    font-weight: 300;
    text-align: right;

    &::after {
      position: absolute;
      content: '';

      width: 65%;
      height: 100%;

      transform-origin: top right;
      transform: translate(-100%, -0%);
      border: 1px solid ${colors.blackOpacity};
    }
  }
`

Index.getLayout = (page) => <Layout metaTitle='INDEX'>{page}</Layout>

export default Index
