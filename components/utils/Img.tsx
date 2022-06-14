/*
  Imgコンポーネント
*/

import React from 'react'
import Image from 'next/image';
import styled from 'styled-components'

import colors from '../../styles/styledComponents/colors'
import { mixins } from '../../styles/styledComponents/mixin'

interface propsInterface {
  src: string,
  smSize: string,
  lapSize: string,
  circle?: boolean
}

interface stateInterface {
}

const Img: React.FC<propsInterface> = (props) => {
  const ImgMain = styled.div`
    position: relative;
    ${mixins.screenSm} {
      width: ${props.smSize};
      height: ${props.smSize};
    }

    ${mixins.screenLap} {
      width: ${props.lapSize};
      height: ${props.lapSize};
    }

    background-color: ${colors('black-opacity')};

    border-width: 4px;
    border-radius: ${props.circle ? '50%' : '0%'};
    border-color: ${colors('black')};

    img {
      border-radius: ${props.circle ? '50%' : '0%'};
    }
  `

  return <>
    <ImgMain>
      <Image
        src={props.src}
        alt='img'
        layout='fill'
      />
    </ImgMain>
  </>
}

Img.defaultProps = {
}

export default Img