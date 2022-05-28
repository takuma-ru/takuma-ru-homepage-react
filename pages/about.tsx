import type { NextPageWithLayout } from 'next'
import styled from 'styled-components'

import { Layout } from '../layouts/Layout'

import { colors } from '../styles/styledComponents/_variables'
import { mixins } from '../styles/styledComponents/mixin'

const About: NextPageWithLayout = () => {
  return <>
    <AboutMain>
      <div>
        <h1>topic</h1>
      </div>
      <div>
        asd
      </div>

    </AboutMain>
  </>
}

const AboutMain = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;

  height: 100%;
  color: ${colors.black};

  ${mixins.screenSm} {
    grid-template-rows: 20% 1fr;
  }

  ${mixins.screenLap} {
    grid-template-columns: 30% 1fr;
  }
`

About.getLayout = (page) => <Layout metaTitle='ABOUT'>{page}</Layout>

export default About
