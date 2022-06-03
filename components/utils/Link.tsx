/*
  Linkコンポーネント
*/

import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'
import { IoLinkOutline } from 'react-icons/io5'

import colors from '../../composables/styles/returnScssVariables'

interface propsInterface {
  href: string,
  hrefName: string,
}

interface stateInterface {
}

const Link: React.FC<propsInterface> = (props) => {
  // const


  // style
  const LinkMain = styled.div`
    margin: 0px 8px;

    a {
      height: 100%;
      display: inline-flex;
      justify-items: center;
      align-items: center;
    }

    p {
      margin-right: 8px
    }
  `

  return <>
   <LinkMain>
      <NextLink href={props.href}>
        <a>
          <p>{props.hrefName}</p>
          <IoLinkOutline
            color={colors('black-opacity')}
            size='20px'
          />
        </a>
      </NextLink>
   </LinkMain>
  </>
}

Link.defaultProps = {
}

export default Link