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

const Skills: React.FC<propsInterface> = (props) => {
  // const

  // method

  // lifeCycle

  return <>
    <SkillsMain>

    </SkillsMain>
  </>
}

const SkillsMain = styled.div`
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

Skills.defaultProps = {
}

export default Skills