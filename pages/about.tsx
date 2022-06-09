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
import Profile from '../components/about/Profile';

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
  const careerData = [
    {
      title: '一関工業高等専門学校 入学',
      subTitle: '未来創造工学科 / 情報ソフトウェア系',
      date: new Date('2018-04'),
    },
    {
      title: 'チームラボ株式会社 アルバイト入社',
      subTitle: 'Package team / Frontend team',
      date: new Date('2022-05'),
    },
    {
      title: '一関工業高等専門学校 在籍中',
      subTitle: '未来創造工学科 / 情報ソフトウェア系',
      date: new Date(),
      now: true,
    },
    {
      title: '一関工業高等専門学校 卒業見込み',
      subTitle: '未来創造工学科 / 情報ソフトウェア系',
      date: new Date('2023-03'),
    },
    {
      title: 'チームラボ株式会社 入社見込み',
      subTitle: 'Package team / Frontend team',
      date: new Date('2023-04'),
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
              <Profile />
            </>
          } else if (docId === 'career') {
            return <>
              <div className='career'>
                {careerData.map(item => (
                  <div
                    className='career-item'
                    key={item.title}
                  >
                    <h1 className='career-item-title'>
                      aaa
                    </h1>
                    <Divider />
                    <h4 className='career-item-sub-title'>
                      aaa
                    </h4>
                    <p className='career-item-date'></p>
                  </div>
                ))}
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
  align-items: center;
  ${mixins.screenSm} {
    justify-items: start;
  }
  ${mixins.screenLap} {
    justify-items: center;
  }

  height: 100%;
  color: ${colors.black};

  ${mixins.screenSm} {
    grid-template-rows: 20% 1fr;
  }
  ${mixins.screenLap} {
    grid-template-columns: 30% 1fr;
  }

  .topic {
    padding: 16px;
  }

  .contents {
    position: relative;
    width: 100%;
    height: 100%;

    padding: 16px;

    display: flex;
    align-items: center;
    justify-items: center;

    .career {

      &-item {

      }
    }
  }
`

About.getLayout = (page) => <Layout metaTitle='ABOUT'>{page}</Layout>

export default About
