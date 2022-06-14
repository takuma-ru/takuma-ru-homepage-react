import type { NextPageWithLayout } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styled from 'styled-components'

import { Layout } from '../layouts/Layout'

import colors from '../styles/styledComponents/colors'
import { mixins } from '../styles/styledComponents/mixin'

import Img from '../components/utils/Img';
import Divider from '../components/utils/Divider';
import Link from '../components/utils/Link';
import Profile from '../components/about/Profile';
import Career from '../components/about/Career';
import Icon from '../components/utils/Icon';

const About: NextPageWithLayout = () => {
  // const
  const router = useRouter()
  const query = router.query
  const docments = [
    {
      docId: 'profile',
      title: 'Profile',
    },
    {
      docId: 'career',
      title: 'Career',
    },
  ]

  const [docId, setDocId] = useState<string |string[] | undefined>(undefined)

  // lifeCycle
  useEffect(() => {
    if(router.isReady){
      setDocId(query.docId)
    }
  },[query, router])

  return <>
    <AboutMain>
      <div className='arrow-button-prev'>
        <button>prev</button>
      </div>

      <div className='topic'>
        <h1>{docments.find(v => v.docId === docId)?.title}</h1>
      </div>
      <div className='contents'>
        {(() => {
          if (docId === 'profile') {
            return <Profile />
          } else if (docId === 'career') {
            return <Career />
          }
        })()}
      </div>

      <div className='arrow-button-next'>
        <button>next</button>
      </div>

    </AboutMain>
  </>
}

const AboutMain = styled.div`
  display: grid;
  align-items: center;

  height: 100%;
  color: ${colors('black')};

  ${mixins.screenSm} {
    justify-items: start;
    grid-template-rows: auto auto 1fr auto;
  }
  ${mixins.screenLap} {
    justify-items: center;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 30% 1fr;
  }

  .topic {
    ${mixins.screenLap} {
      grid-row: 2;
    }
    padding: 16px;
  }

  .contents {
    ${mixins.screenLap} {
      grid-row: 2;
    }
    position: relative;
    width: 100%;
    height: 100%;

    padding: 16px;

    display: flex;
    align-items: center;
    justify-items: center;
  }

  .arrow-button {
    &-prev {
      ${mixins.screenLap} {
        grid-column: 1/3;
        grid-row: 1;
      }
    }

    &-next {
      ${mixins.screenLap} {
        grid-column: 1/3;
        grid-row: 3;
      }
    }
  }
`

About.getLayout = (page) => <Layout metaTitle='ABOUT'>{page}</Layout>

export default About
