import type { NextPageWithLayout } from 'next'
import { Layout } from '../layouts/Layout'

const Works: NextPageWithLayout = () => {
  return <>
    <div className='index'>
      works page

    </div>
  </>
}

Works.getLayout = (page) => <Layout metaTitle='WORKS'>{page}</Layout>

export default Works
