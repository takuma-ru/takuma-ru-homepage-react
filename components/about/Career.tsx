/**
* link-barコンポーネント(Layout.tsx専用)
**/

import React, { ReactNode, useEffect, useState } from 'react'
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
  title: ReactNode | string,
  subTitle: ReactNode | string,
  date: Date,
  now?: boolean,
}

const Career: React.FC<propsInterface> = (props) => {
  // const
  const careerData: Array<careerDataInterface> = [
    {
      title:  <><span>一関工業高等専門学校</span> <span>在籍中</span></>,
      subTitle:  <><span>未来創造工学科</span> / <span>情報ソフトウェア系</span></>,
      date: new Date(),
      now: true,
    },
    {
      title:  <><span>チームラボ株式会社</span> <span>アルバイト入社</span></>,
      subTitle:  <><span>Package team</span> / <span>Frontend team</span></>,
      date: new Date('2022'),
    },
    {
      title:  <><span>一関工業高等専門学校</span> <span>入学</span></>,
      subTitle:  <><span>未来創造工学科</span> / <span>情報ソフトウェア系</span></>,
      date: new Date('2018'),
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
            <div className='circle' />
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
            <p className='date'>{career.date.getFullYear()}</p>
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
    display: grid;
    grid-template-columns: 42px 1fr 34px 1fr auto;
    align-items: center;

    min-height: 64px;

    margin: 8px 0px;

    span {
      display: inline-block;
    }

    .circle {
      width: 32px;
      height: 32px;

      margin-left: 2px;
      margin-right: 8px;

      border-radius: 50%;
      background-color: ${colors('black')};
    }

    .date {
      color: ${colors('black-opacity-2')};
    }
  }

  ${mixins.screenSm} {
    .career-block {
      grid-row: auto 42px 42px;
      grid-template-columns: 42px 1fr;
      flex-flow: column;

      .circle {
        grid-row: 2;
      }

      h3 {
        grid-row: 2;
      }

      h4 {
        grid-row: 3;
        grid-column: 2;

        margin-top: 16px;
      }

      .date {
        grid-row: 1;
      }
    }
  }
`

Career.defaultProps = {
}

export default Career