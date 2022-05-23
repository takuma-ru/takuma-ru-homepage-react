import type { NextPageWithLayout } from 'next'
import Divider from '../components/utils/Divider'
import { Layout } from '../layouts/Layout'

const Index: NextPageWithLayout = () => {
  return <>
    <div className='index'>
      <h1 className='my-name'>
        Hi! I&#x27;m takuma-ru.
      </h1>
    </div>

    {/* scss styled jsx */}
    <style lang='scss' scoped jsx>{`
      .index {
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
            border: 1px solid $black-opacity;
          }
        }
      }
    `}</style>
  </>
}

Index.getLayout = (page) => <Layout metaTitle='INDEX'>{page}</Layout>

export default Index
