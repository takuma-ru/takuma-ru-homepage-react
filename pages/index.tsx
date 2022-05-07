import type { NextPageWithLayout } from 'next'
import Divider from '../components/utils/Divider'
import { Layout } from '../layouts/Layout'

const Index: NextPageWithLayout = () => {
  return <>
    <div className='index'>
      <h1 className='my-name'>
        Hi! I'm takuma-ru.
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

          font-size: 96px;
          font-weight: 300;

          &::after {
            position: absolute;
            content: '';
            right: 0px;

            width: 65%;
            height: 100%;

           border: 1px solid $black-opacity;
          }
        }
      }
    `}</style>
  </>
}

Index.getLayout = (page) => <Layout metaTitle='INDEX'>{page}</Layout>

export default Index
