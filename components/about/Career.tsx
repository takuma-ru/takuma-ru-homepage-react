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
import useMedia from 'use-media';


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
      title: '一関工業高等専門学校 在籍中',
      subTitle: '未来創造工学科 / 情報ソフトウェア系',
      date: new Date(),
      now: true,
    },
    {
      title: 'チームラボ株式会社 アルバイト入社',
      subTitle: 'Package team / Frontend team',
      date: new Date('2022-05'),
    },
    {
      title: '一関工業高等専門学校 入学',
      subTitle: '未来創造工学科 / 情報ソフトウェア系',
      date: new Date('2018-04'),
    },
  ]

  const isLap = useMedia({ minWidth: "1024px" })

  // method

  // lifeCycle

  return <>
    <CareerMain>
      {careerData.map( (career, index) => (
        <>
          <div key={index} className='career-block'>
            <h3>{career.title}</h3>
            {(() => {
              if (isLap) {
                return <>
                  <Divider
                    vertical
                    size='32px'
                    style={{ margin: '0px 16px' }}
                  />
                </>
              }
            })()}
            <h4>{career.subTitle}</h4>
          </div>
          {(() => {
            if (index != careerData.length - 1) {
              return <>
                <Divider
                  vertical
                  size='32px'
                  color='black-opacity-3'
                  style={{ margin: '0px 16px' }}
                />
              </>
            }
          })()}
        </>
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
    ${mixins.screenSm} {
      flex-flow: column;
    }

    min-height: 64px;

    margin: 8px 0px;
  }
`

Career.defaultProps = {
}

export default Career