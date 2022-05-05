import type { NextPageWithLayout } from 'next'
import { Layout } from '../layouts/Layout'

const Contact: NextPageWithLayout = () => {
  return <>
    <div className='index'>
      contact page

    </div>

    {/* scss styled jsx */}
    <style lang='scss' scoped jsx>{`
      main {
        color: $black;
      }
    `}</style>
  </>
}

Contact.getLayout = (page) => <Layout metaTitle='CONTACT'>{page}</Layout>

export default Contact
