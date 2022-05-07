import type { NextPageWithLayout } from 'next'
import Divider from '../components/utils/Divider'
import { Layout } from '../layouts/Layout'

const Index: NextPageWithLayout = () => {
  return <>
    <div className='index'>
      <h1 className='my-name'>I'm takuma-ru.</h1>
    </div>

    {/* scss styled jsx */}
    <style lang='scss' scoped jsx>{`
      .index {
        .my-name {
          position: absolute;
          top: 50%;
          right: 0%;
          transform: translate(-50%, -50%);
          font-size: 72px;
        }
      }
    `}</style>
  </>
}

Index.getLayout = (page) => <Layout metaTitle='INDEX'>{page}</Layout>

export default Index
