/*
  Buttonコンポーネント
*/

import React from 'react'
import scssVariable from '../../composables/returnScssVariables'

interface propsInterface {
}

interface stateInterface {
}

const Button: React.FC<propsInterface> = (props) => {
  return <>
    <button></button>

    {/* scss styled jsx */}
    <style lang='scss' scoped jsx>{`

    `}</style>
  </>
}

Button.defaultProps = {
}

export default Button