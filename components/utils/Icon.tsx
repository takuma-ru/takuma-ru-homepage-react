/*
  Iconコンポーネント
*/

import React from 'react'
import { IconType } from 'react-icons'
import colors from '../../styles/styledComponents/colors'


interface propsInterface {
  icon?: string,
  size?: string,
  color?: string,
}

interface stateInterface {
}

const Button: React.FC<propsInterface> = (props) => {
  const reactIcons = require('react-icons/io5')
  const Icon: IconType = reactIcons[props.icon!]
  return <>
    <Icon size={props.size} color={colors(props.color!)}></Icon>
  </>
}

Button.defaultProps = {
  size: '24px',
  color: 'black',
}

export default Button