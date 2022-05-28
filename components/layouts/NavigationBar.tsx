/*
  navigation-barコンポーネント(Layout.tsx専用)
*/

import { useRouter } from 'next/router';
import React from 'react'
import styled from 'styled-components';
import colors from '../../composables/styles/returnScssVariables'

interface propsInterface {
}

interface stateInterface {
}

interface linkInterface {
  name: string,
  path: string,
}

const NavigationBar: React.FC<propsInterface> = (props) => {
  // const
  const router = useRouter();
  const links: Array<linkInterface> = [
    {name: 'INDEX', path: '/'},
    {name: 'ABOUT', path: '/about'},
    {name: 'WORKS', path: '/works'},
    {name: 'COTACT', path: '/contact'},
  ]

  // method
  const routerPush = (link: string) => {
    router.push(link)
  }

  return <>
    <NavigationBarMain>
      <div className='button-group'>
        {links.map(link =>(
          <button
            key={link.name}
            onClick={() => routerPush(link.path)}
            className={link.path === router.pathname ? 'button-selected' : ''}
          >
            <span className='name'>
              <h3>
                {link.name}
              </h3>
            </span>
            <div className='chip'></div>
          </button>
        ))}
      </div>
    </NavigationBarMain>
  </>
}

const NavigationBarMain = styled.div`
  grid-column: 1;
  grid-row: 1/4;

  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: start;

  height: 100%;

  .button-group {
    margin: 24px 0px;

    button {
      position: relative;
      display: flex;
      width: auto;
      height: max-content;

      margin: 12px 0px;
      padding: 24px 11px;

      border: none;
      justify-content: flex-end;
      align-items: center;
      font-family: 'Roboto', 'Noto Sans JP', sans-serif;
      background-color: ${colors('white')};
      color: ${colors('black')};
      cursor: pointer;

      .name {
        h3 {
          margin: 0px;

          writing-mode: vertical-rl;
          text-orientation: sideways-right;
        }
      }

      .chip {
        width: 2px;
        height: 40px;

        margin-left: 8px;
        background-color: ${colors('black-opacity')};
      }

    }

    .button-selected {
      background-color: ${colors('black')};
      color: ${colors('white')};
      .chip {
        background-color: ${colors('white-opacity')};
      }
    }
  }
`

NavigationBar.defaultProps = {
}

export default NavigationBar