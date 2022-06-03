/*
  Iconコンポーネント
*/

import React from 'react'
import colors from '../../composables/styles/returnScssVariables'

interface propsInterface {
}

interface stateInterface {
}

const Button: React.FC<propsInterface> = (props) => {
  const ioIcon = require('react-icons')
  return <>
    <button></button>
  </>
}

Button.defaultProps = {
}

export default Button