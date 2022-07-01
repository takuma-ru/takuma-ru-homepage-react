/**
* link-barコンポーネント(Layout.tsx専用)
**/

import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Divider from '../utils/Divider';
import Img from '../utils/Img';
import Link from '../utils/Link';

import colors from '../../styles/styledComponents/colors';
import { mixins } from '../../styles/styledComponents/mixin'
import dependsLuminanceColor from '../../styles/styledComponents/luminanceDependsColor';


interface propsInterface {
}

interface stateInterface {
}

interface skillDataInterface {
  /*
    title: 技術名
    skillLevel: スキルレベル
      > 0: 初学
      > 1: 基礎
      > 2: 基礎＋α
      > 3: 個人開発
      > 4: 指導（人に教える）
      > 5: 実務
    description?: ReactNode | string,
    chips?: Array<string>
  */
  title: string,
  skillLevel: 0 | 1 | 2 | 3 | 4 | 5,
  description?: ReactNode | string,
  chips?: Array<string>
  row: string,
  col: string,
}

const Skills: React.FC<propsInterface> = (props) => {
  // const
  const skillData: skillDataInterface[] = [
    {
      title: 'Vue.js',
      skillLevel: 5,
      description: '~ Vue3',
      chips: ['framework'],
      row: '1/3',
      col: '1/3',
    },
    {
      title: 'Nuxt.js',
      skillLevel: 5,
      description: '~ CompositionAPI',
      chips: ['framework'],
      row: '3/5',
      col: '1/3',
    },
    {
      title: 'React',
      skillLevel: 3,
      description: '~ CompositionAPI',
      chips: ['framework'],
      row: '1/2',
      col: '3/4',
    },
    {
      title: 'Flutter',
      skillLevel: 2,
      description: '~ CompositionAPI',
      chips: ['framework'],
      row: '2/3',
      col: '3/4',
    },
  ]

  // method

  // lifeCycle

  return <>
    <SkillsMain>
      <div className='skill-card-wrapper'>
        {skillData.map(skill => (
          <div
            key={skill.title}
            className='skill-card'
            style={{
              gridRow: skill.row,
              gridColumn: skill.col,
              /* width: `${
                skill.skillLevel === 5 || skill.skillLevel === 4 || skill.skillLevel === 3
                  ? 2 * 128
                  : 128
              }px`,
              height: `${
                skill.skillLevel === 5 || skill.skillLevel === 4
                  ? 2 * 128
                  : 128
              }px`, */
            }}
            onClick={() => {}}
          >
            <div className='skill-card-title'>
              <h2>{ skill.title }</h2>
              <Divider vertical />
              <h4>{ skill.skillLevel }</h4>
            </div>
          </div>
        ))}
      </div>
    </SkillsMain>
  </>
}

const SkillsMain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  ${mixins.screenSm} {
    align-self: start;
    grid-template-rows: 64px 1fr;
  }

  ${mixins.screenLap} {
    align-items: center;
    grid-template-columns: 128px 1fr;
  }

  .skill-card-wrapper {
    display: grid;
    grid-auto-rows: 152px;
    grid-auto-columns: 152px;

    width: 100%;
    height: 100%;
    padding: 16px;

    overflow: auto;

    .skill-card {
      padding: 16px;

      background-color: ${colors('white')};
      color: ${dependsLuminanceColor('white')};
      cursor: pointer;

      &:hover {
        background-color: ${colors('black')};
        color: ${dependsLuminanceColor('black')};
      }

      &-title {
        display: flex;
        align-items: center;

        height: 32px;

        h2 {
          margin-right: 16px;
        }

        h4 {
          margin-left: 16px;
        }
      }
    }
  }
`

Skills.defaultProps = {
}

export default Skills