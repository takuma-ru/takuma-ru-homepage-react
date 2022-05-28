import type { NextPageWithLayout } from 'next'
import returnDisplayType from '../composables/returnDisplayType'
import { Layout } from '../layouts/Layout'

const About: NextPageWithLayout = () => {
  return <>
    <div className='about'>
      <div className='topic'>
        <h1>topic</h1>
      </div>
      <div className='contents'>
        asd
      </div>

    </div>

    {/* scss styled jsx */}
    <style lang="scss" scoped jsx>{`
      .about {
        display: grid;
        justify-items: center;
        align-items: center;

        height: 100%;
        @media screen and ( min-width: 480px ) and ( max-width: 1024px ) {
          grid-template-rows: 20% 1fr;
        }

        @media screen and ( min-width: 1024px ) {
          grid-template-columns: 30% 1fr;
        }
      }
    `}</style>
  </>
}

About.getLayout = (page) => <Layout metaTitle='ABOUT'>{page}</Layout>

export default About
