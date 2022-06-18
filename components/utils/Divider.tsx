/*
  区切り線コンポーネント
*/

import React, { useState } from 'react'
import styled, { CSSObject } from 'styled-components'

import colors from '../../styles/styledComponents/colors'

interface propsInterface {
  vertical?: boolean,
  color?: string,
  size? : string,
  style?: CSSObject,
  thickness?: string,
}

const Divider: React.FC<propsInterface> = (props) => {
  const [ color, setColor ] = useState<string>(colors(props.color!))

  const DividerMain = styled.hr`
    width: ${props.size};
    border-top: ${props.thickness} solid;
    border-bottom: 0px;
    margin: 0px;
    color: ${color};
    ${props.style}
  `

  const VerticalMain = styled.hr`
    width: ${props.thickness};
    height: ${props.size};
    border-width: 0;
    margin: 0px;
    background-color: ${color};
    ${props.style}
  `

  return <>
    {(() => {
      return props.vertical ? <VerticalMain /> : <DividerMain />
    })()}
  </>
}


Divider.defaultProps = {
  vertical: false,
  color: 'black-opacity',
  size: '100%',
  thickness: '2px'
}

export default Divider