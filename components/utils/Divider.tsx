/*
  区切り線コンポーネント
*/

import React, { useState } from 'react'
import scssVariable from '../../composables/returnScssVariables'

interface propsInterface {
  vertical?: boolean,
  color?: string,
  size? : string,
  style?: string,
}

const Divider: React.FC<propsInterface> = (props) => {
  const [ color, setColor ] = useState<string>(scssVariable(props.color!))

  return <>
    <hr
      className={props.vertical ? 'vertical' : 'divider'}
    />

    {/* scss styled jsx */}
    <style lang='scss' scoped jsx>{`
      .divider {
        width: ${props.size};
        border-top: 2px solid;
        border-bottom: 0px;
        margin: 0px;
        color: ${color};
        ${props.style}
      }

      .vertical {
        width: 1px;
        height: ${props.size};
        border-width: 0;
        margin: 0px;
        background-color: ${color};
        ${props.style}
      }
    `}</style>
  </>
}

Divider.defaultProps = {
  vertical: false,
  color: 'black-opacity',
  size: '100%',
}

export default Divider