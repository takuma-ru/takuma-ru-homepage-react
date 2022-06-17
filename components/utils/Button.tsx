/*
  Buttonコンポーネント
*/

import React, { ReactNode } from 'react'
import styled from 'styled-components'
import colors from '../../styles/styledComponents/colors'
import luminanceDependsColor from '../../styles/styledComponents/luminanceDependsColor'
import Icon from './Icon'

interface propsInterface {
  type?: 'default' | 'vertical',
  color: string,
  icon?: string,
  iconTop?: boolean,
  child?: ReactNode | string | number,
  onClick?: () => void,
}

interface stateInterface {
}

const Button: React.FC<propsInterface> = (props) => {

  // styledComponents
  const Button = styled.button`
    display: inline-flex;
    align-items: center;

    position: relative;
    padding: 10px 24px;

    font-size: 16px;
    line-height: 20px;

    border: none;
    background-color: ${ colors(props.color) };
    color: ${ luminanceDependsColor(props.color) };
    font-family: 'Roboto', 'Noto Sans JP', sans-serif;

    cursor: pointer;
    -webkit-tap-highlight-color: #00000000;

    :hover::after {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0%;
      left: 0%;

      content: '';
      background-color: ${ colors('black-opacity-3') };
    }

    :focus {
      outline: none;
    }
  `
  const ButtonVertical = styled(Button)`
    flex-flow: column;

    span {
      order: ${ props.iconTop ? 1 : 0 };
    }
  `

  return <>
    {(() => {
      return props.type === 'vertical' ? (
        <ButtonVertical onClick={props.onClick}>
          <span>
            {props.child}
          </span>
          <Icon icon={props.icon} color={luminanceDependsColor(props.color)} />
        </ButtonVertical>
      ) : (
        <Button onClick={props.onClick}>
          <Icon icon={props.icon} color={luminanceDependsColor(props.color)} />
          <span style={{
            marginLeft: '8px',
          }}>
            {props.child}
          </span>
        </Button>
      )
    })()}
  </>
}

Button.defaultProps = {
  color: 'black',
}

export default Button