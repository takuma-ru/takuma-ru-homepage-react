/*
  区切り線コンポーネント
*/

import React, { useState } from 'react'
import styled from 'styled-components'

import colors from '../../composables/styles/returnScssVariables'

interface propsInterface {
  vertical?: boolean,
  color?: string,
  size? : string,
  style?: string,
}

const Divider: React.FC<propsInterface> = (props) => {
  const [ color, setColor ] = useState<string>(colors(props.color!))

  const DividerMain = styled.hr`
    width: ${props.size};
    border-top: 2px solid;
    border-bottom: 0px;
    margin: 0px;
    color: ${color};
    ${props.style}
  `

  const VerticalMain = styled.hr`
    width: 1px;
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
}

export default Divider