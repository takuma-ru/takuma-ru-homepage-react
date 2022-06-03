import type { NextPageWithLayout } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styled from 'styled-components'

import { Layout } from '../layouts/Layout'

import { colors } from '../composables/styles/color';
import { mixins } from '../composables/styles/mixin'

import Img from '../components/utils/Img';
import Divider from '../components/utils/Divider';
import Link from '../components/utils/Link';
import returnDisplayType from '../composables/returnDisplayType';
import MediaQuery from 'react-responsive';

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
    }
  ]
  const hrefs = [
    {
      url: 'https://github.com/takuma-ru',
      hrefName: 'GitHub',
    },
    {
      url: 'https://twitter.com/takumaru_2222',
      hrefName: 'Twitter',
    },
    {
      url: 'https://bitbucket.org/takuma-ru',
      hrefName: 'Bitbucket',
    },
    {
      url: 'https://play.google.com/store/apps/dev?id=7473198602481823619',
      hrefName: 'GooglePlay',
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
      <div className='topic'>
        <h1>{docments.find(v => v.docId === docId)?.title}</h1>
      </div>
      <div className='contents'>
        {(() => {
          if (docId === 'profile') {
            return <>
              <div className='profile'>
                <Img
                  src='https://ejrjdzwbpayqlmpyvomf.supabase.co/storage/v1/object/sign/image/NK_v6_sq_3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9OS192Nl9zcV8zLnBuZyIsImlhdCI6MTY1Mzc4NzQxMiwiZXhwIjoxOTY5MTQ3NDEyfQ.IZ_-ZnBgn1_FHSlWabaBu3ft44rsHb7uWs4YsYhNe2s'
                  circle
                  smSize='64px'
                  lapSize='128px'
                />
                <div className='name'>
                  <div className='top'>
                    <h2>takuma-ru</h2>
                    <Divider vertical style='margin: 0px 16px' />
                    {hrefs.map(item => (
                      <MediaQuery key={item.hrefName} minWidth={768}>
                        <Link
                          href={item.url}
                          hrefName={item.hrefName}
                        />
                      </MediaQuery>
                    ))}
                  </div>
                  <div className='bottom'>
                    <span className='sub-text'>Ichinoseki National College of Technology</span>
                  </div>
                </div>
              </div>
            </>
          }
        })()}
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
    grid-template-rows: 10% 1fr;
  }

  ${mixins.screenLap} {
    grid-template-columns: 30% 1fr;
  }

  .topic {

  }

  .contents {
    width: 100%;
    height: 100%;

    padding: 24px;

    display: flex;
    align-items: center;
    justify-items: center;

    .profile {
      display: flex;
      align-items: center;
      justify-items: center;

      ${mixins.screenSm} {
        flex-flow: column;
      }

      .name {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;

        margin-left: 24px;

        .top {
          grid-column: 1/3;

          display: flex;
        }

        .bottom {
          grid-column: 1/3;
          grid-row: 2;

          margin-top: 8px;
        }
      }
    }
  }
`

About.getLayout = (page) => <Layout metaTitle='ABOUT'>{page}</Layout>

export default About
