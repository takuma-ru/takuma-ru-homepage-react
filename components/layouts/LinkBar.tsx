/**
* link-barコンポーネント(Layout.tsx専用)
**/

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Divider from '../utils/Divider';

import colors from '../../composables/styles/returnScssVariables';

interface propsInterface {
}

interface stateInterface {
}

interface linkInterface {
  name: string,
  path: string,
}

const LinkBar: React.FC<propsInterface> = (props) => {
  // const
  const router = useRouter()
  const query = router.query
  const links: Array<linkInterface> = [
    {name: 'INDEX', path: '/'},
    {name: 'ABOUT', path: '/about'},
    {name: 'WORKS', path: '/works'},
    {name: 'COTACT', path: '/contact'},
  ]
  const [docId, setDocId] = useState<string |string[] | undefined>(undefined)

  // method
  const routerPush = (link: string) => {
    router.push(link)
  }

  // lifeCycle
  useEffect(() => {
    if(router.isReady){
      setDocId(query.docId)
    }
  },[query, router])

  return <>
    <LinkBarMain>
      <Divider size='10%' />
      <h3 className='path-name'>
        { links.find(v => v.path === router.pathname )?.name }
      </h3>
      <div className='dot' />
      <span className='sub-path-name'>
        { docId }
      </span>
      {(() => {
        if (docId) {
          return <div className='dot' />
        }
      })()}
    </LinkBarMain>
  </>
}

const LinkBarMain = styled.div`
  grid-column: 1/4;
  grid-row: 1;

  display: flex;
  justify-items: flex-start;
  align-items: center;

  height: 56px;

  .path-name {
    margin-left: 16px;
  }

  .dot {
    width: 4px;
    height: 4px;

    margin-left: 16px;

    background-color: ${colors('black-opacity')};
  }

  .sub-path-name {
    margin-left: 16px;

    font-size: 16px;
  }
`

LinkBar.defaultProps = {
}

export default LinkBar