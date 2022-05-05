import type { NextPageWithLayout } from 'next'
import { Layout } from '../layouts/Layout'

const Index: NextPageWithLayout = () => {
  return <>
    <div className='index'>
      index page

    </div>

    {/* scss styled jsx */}
    <style lang='scss' scoped jsx>{`
      main {
        color: $black;
      }
    `}</style>
  </>
}

Index.getLayout = (page) => <Layout metaTitle='INDEX'>{page}</Layout>

export default Index
