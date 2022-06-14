/*
  Buttonコンポーネント
*/

import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/styledComponents/colors'

interface propsInterface {
  type: string,
}

interface stateInterface {
}

const Button: React.FC<propsInterface> = (props) => {

  // styledComponents
  const Button = styled.button`
    
  `
  const ButtonVertical = styled.button`
    
  `

  return <>
    {(() => {
      return props.type === 'vertical' ? <ButtonVertical /> : <Button />
    })()}
  </>
}

Button.defaultProps = {
}

export default Button