import type { NextPageWithLayout } from 'next'
import { Layout } from '../layouts/Layout'

const Works: NextPageWithLayout = () => {
  return <>
    <div className='index'>
      works page

    </div>

    {/* scss styled jsx */}
    <style lang='scss' scoped jsx>{`
      main {
        color: $black;
      }
    `}</style>
  </>
}

Works.getLayout = (page) => <Layout metaTitle='WORKS'>{page}</Layout>

export default Works
