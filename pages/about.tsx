import type { NextPageWithLayout } from 'next'
import { Layout } from '../layouts/Layout'

const About: NextPageWithLayout = () => {
  return <>
    <div className='index'>
      about page

    </div>

    {/* scss styled jsx */}
    <style lang='scss' scoped jsx>{`
      main {
        color: $black;
      }
    `}</style>
  </>
}

About.getLayout = (page) => <Layout metaTitle='ABOUT'>{page}</Layout>

export default About
