/*
  Iconコンポーネント
*/

import React from 'react'
import { IconType } from 'react-icons'


interface propsInterface {
  size?: string,
  color?: string,
}

interface stateInterface {
}

const Button: React.FC<propsInterface> = (props) => {
  const reactIcons = require('react-icons/io5')
  const Icon: IconType = reactIcons['IoAccessibilityOutline']
  return <>
    <Icon size={props.size} color={props.color}></Icon>
  </>
}

Button.defaultProps = {
  size: '24px',
  color: 'black',
}

export default Button