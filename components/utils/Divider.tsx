/*
  区切り線コンポーネント
*/
import { useState } from 'react'
import scssVariable from '../../composables/returnScssVariables'

interface propsInterface {
  vertical?: boolean,
  color?: string,
}

interface stateInterface {
}

const  Divider = (props: propsInterface) =>  {
  const [ color, setColor ] = useState(scssVariable(props.color!))

  return <>
    <hr
      className={props.vertical ? 'vertical' : 'divider'}
    />

    {/* scss styled jsx */}
    <style lang='scss' scoped jsx>{`
      .divider {
        border-top: 1px solid;
        border-bottom: 0px;
        color: ${color};
      }

      .vertical {
        width: 1px;
        height: 100%;
        border-width:0;
        margin: 0px;
        background-color: ${color};
      }
    `}</style>
  </>
}

Divider.defaultProps = {
  vertical: false,
  color: 'black-opacity',
}

export default Divider