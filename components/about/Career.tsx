/**
* link-barコンポーネント(Layout.tsx専用)
**/

import React, { useEffect, useState } from 'react'
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
      {careerData.map( (career, index) => (
        <div key={index} className='career-block'>
          <h3>{ career.title }</h3>
        </div>
      ))}
    </CareerMain>
  </>
}

const CareerMain = styled.div`
  display: grid;
  align-items: center;

  width: 100%;

  .career-block {
    display: flex;
    align-items: center;

    height: 64px;
  }
`

Career.defaultProps = {
}

export default Career