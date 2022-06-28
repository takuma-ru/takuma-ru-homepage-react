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
}

const Skills: React.FC<propsInterface> = (props) => {
  // const
  const skillData: skillDataInterface[] = [
    {
      title: 'Vue.js',
      skillLevel: 5,
      description: '~ Vue3',
      chips: ['framework']
    },
    {
      title: 'Nuxt.js',
      skillLevel: 5,
      description: '~ CompositionAPI',
      chips: ['framework']
    },
    {
      title: 'React',
      skillLevel: 3,
      description: '~ CompositionAPI',
      chips: ['framework']
    },
    {
      title: 'Flutter',
      skillLevel: 2,
      description: '~ CompositionAPI',
      chips: ['framework']
    },
  ]

  // method

  // lifeCycle

  return <>
    <SkillsMain>
      <div className='skill-card-group'>
        {skillData.map(skill => (
          <div
            key={skill.title}
            className='skill-card'
            style={{
              width: `${
                skill.skillLevel === 5 || skill.skillLevel === 4 || skill.skillLevel === 3
                  ? 2 * 152
                  : 152
              }px`,
              height: `${
                skill.skillLevel === 5 || skill.skillLevel === 4
                  ? 2 * 152
                  : 152
              }px`,
            }}
          >
            {skill.title + skill.skillLevel}
          </div>
        ))}
      </div>
    </SkillsMain>
  </>
}

const SkillsMain = styled.div`
  display: grid;

  position: relative;
  width: 100%;
  height: 100%;

  overflow: scroll;

  ${mixins.screenSm} {
    align-self: start;
    grid-template-rows: 64px 1fr;
  }

  ${mixins.screenLap} {
    align-items: center;
    grid-template-columns: 128px 1fr;
  }

  .skill-card {
    background-color: ${colors('white')};
  }
`

Skills.defaultProps = {
}

export default Skills