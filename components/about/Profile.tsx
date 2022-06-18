/**
* link-barコンポーネント(Layout.tsx専用)
**/

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Divider from '../utils/Divider';
import Img from '../utils/Img';
import Link from '../utils/Link';

import colors from '../../styles/styledComponents/colors';
import { mixins } from '../../styles/styledComponents/mixin'


interface propsInterface {
}

interface stateInterface {
}

interface hrefsInterface {
  url: string,
  hrefName: string,
}

const Profile: React.FC<propsInterface> = (props) => {
  // const
  const hrefs: Array<hrefsInterface> = [
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

  // method

  // lifeCycle

  return <>
    <ProfileMain>
      <Img
        src='https://ejrjdzwbpayqlmpyvomf.supabase.co/storage/v1/object/sign/image/NK_v6_sq_3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9OS192Nl9zcV8zLnBuZyIsImlhdCI6MTY1Mzc4NzQxMiwiZXhwIjoxOTY5MTQ3NDEyfQ.IZ_-ZnBgn1_FHSlWabaBu3ft44rsHb7uWs4YsYhNe2s'
        circle
        smSize='64px'
        lapSize='128px'
      />
      <div className='name'>
        <div className='name-top'>
          <h2 style={{ whiteSpace: 'nowrap' }}>takuma-ru</h2>
          <Divider vertical style={{ margin: '0px 16px'}} />
          <span className='sub-text'>Ichinoseki National College of Technology</span>
        </div>
        <div className='name-bottom'>
          {hrefs.map(item => (
            <Link
              key={item.hrefName}
              href={item.url}
              hrefName={item.hrefName}
            />
          ))}
        </div>
      </div>
    </ProfileMain>
  </>
}

const ProfileMain = styled.div`
  display: grid;
  align-items: center;
  ${mixins.screenSm} {
    grid-template-rows: 64px 1fr;
  }

  ${mixins.screenLap} {
    grid-template-columns: 128px 1fr;
  }

  width: 100%;

  .name {
    display: grid;

    ${mixins.screenSm} {
      margin-left: 0px;
    }
    ${mixins.screenLap} {
      margin-left: 24px;
    }

    padding: 24px 0px;

    &-top {
      display: flex;
      align-items: center;
      justify-items: center;
      align-content: flex-start;
    }

    &-bottom {
      grid-row: 2;

      margin-top: 16px;

      display: flex;
      align-items: flex-start;
      justify-items: center;

      ${mixins.screenSm} {
        flex-flow: column;

        div {
          margin-top: 16px;
        }
      }

      ${mixins.screenLap} {
        grid-template-columns: 128px 1fr;

        div {
          margin-right: 16px;
        }
      }
    }
  }
`

Profile.defaultProps = {
}

export default Profile