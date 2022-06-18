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
import Button from '../components/utils/Button';

interface docmentsInterface {
  docId: string,
  title: string,
}

const About: NextPageWithLayout = () => {
  // const
  const router = useRouter()
  const query = router.query
  const docments: Array<docmentsInterface> = [
    {
      docId: 'profile',
      title: 'Profile',
    },
    {
      docId: 'career',
      title: 'Career',
    },
    {
      docId: 'skills',
      title: 'Skills',
    },
  ]

  const [nowDocment, setNowDocment] = useState<docmentsInterface>({
    docId: 'profile',
    title: 'Profile',
  })

  const [docId, setDocId] = useState<string |string[] | undefined>(undefined)

  // method
  const routerPush = (link: string) => {
    router.push(link)
  }

  // lifeCycle
  useEffect(() => {
    if(router.isReady){
      setDocId(query.docId)
    }
  },[query, router])

  return <>
    <AboutMain>
      <div className='arrow-button-prev'>
        {(() => {
          if (docments[docments.findIndex(v => v.docId === docId) - 1]) {
            return <>
              <Button
                type='vertical'
                color='transparent'
                icon='IoChevronUpSharp'
                iconTop
                child={docments[docments.findIndex(v => v.docId === docId) - 1]?.title}
                onClick={() => { routerPush('?docId=' + docments[docments.findIndex(v => v.docId === docId) - 1]?.docId) }}
              />
            </>
          }
        })()}
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
        {(() => {
          if (docments[docments.findIndex(v => v.docId === docId) + 1]) {
            return <>
              <Button
                type='vertical'
                color='transparent'
                icon='IoChevronDownSharp'
                child={docments[docments.findIndex(v => v.docId === docId) + 1]?.title}
                onClick={() => { routerPush('?docId=' + docments[docments.findIndex(v => v.docId === docId) + 1]?.docId) }}
              />
            </>
          }
        })()}
      </div>

      <div className='step-bar-wrapper'>
        {docments.map( docment => (
          <div
            key={docment.docId}
            className={ docment.docId === docId ? 'step-bar-slect' : 'step-bar' }
          />
        ))}
      </div>
    </AboutMain>
  </>
}

const AboutMain = styled.div`
  display: grid;
  align-items: center;

  position: relative;
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
      grid-row: 1/4;
    }
    display: flex;
    align-items: center;
    justify-items: center;

    position: relative;
    width: 100%;
    height: 100%;

    padding: 16px;

    overflow-y: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar{
      display: none;
    }
  }

  .arrow-button {
    &-prev {
      ${mixins.screenLap} {
        grid-row: 1;
      }
    }

    &-next {
      ${mixins.screenLap} {
        grid-row: 3;
      }
    }
  }

  .step-bar-wrapper {
    display: flex;
    flex-flow: column;

    position: absolute;
    right: -8px;
  }

  .step-bar {
    width: 4px;
    height: 6vh;

    margin: 4px 0px;

    background-color: ${colors('black-opacity-2')};

    &-slect {
      width: 4px;
      height: 6vh;

      margin: 4px 0px;

      background-color: ${colors('black')};
    }
  }
`

About.getLayout = (page) => <Layout metaTitle='ABOUT'>{page}</Layout>

export default About
