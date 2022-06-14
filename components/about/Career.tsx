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

interface careerDataInterface {
  title: string,
  subTitle: string,
  date: Date,
  now?: boolean,
}

const Career: React.FC<propsInterface> = (props) => {
  // const
  const careerData: Array<careerDataInterface> = [
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

  // method

  // lifeCycle

  return <>
    <CareerMain>

    </CareerMain>
  </>
}

const CareerMain = styled.div`
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

Career.defaultProps = {
}

export default Career