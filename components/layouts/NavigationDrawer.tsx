/*
  navigation-drawerコンポーネント(Layout.tsx専用)
*/

import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { IoMenuOutline } from "react-icons/io5";

import styled from 'styled-components';
import colors from '../../composables/styles/returnScssVariables'

interface propsInterface {
}

interface stateInterface {
}

interface linkInterface {
  name: string,
  path: string,
  to?: string,
}

const NavigationDrawer: React.FC<propsInterface> = (props) => {
  // const
  const router = useRouter();
  const isLap = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const [isOpen, setIsOpen] = useState(false)
  const links: Array<linkInterface> = [
    {name: 'INDEX', path: '/'},
    {name: 'ABOUT', path: '/about', to: '/about?docId=profile'},
    {name: 'WORKS', path: '/works'},
    {name: 'COTACT', path: '/contact'},
  ]

  // method
  const routerPush = (link: string) => {
    router.push(link)
    setIsOpen(false)
  }

  return !isLap ? <>
    <NavigationDrawerMain>
      <div className='menu' onClick={(() => { setIsOpen(!isOpen) })}>
        <IoMenuOutline
          size={36}
        />
      </div>
      { isOpen && (
        <div className='drawer'>
          <div className='button-group'>
            {links.map( link => (
              <button
                key={link.name}
                onClick={() => routerPush(link.to ? link.to : link.path)}
                className={(() => {if (link.path === router.pathname) return 'button-selected'})()}
              >
                <span className='name'>
                  <h3>
                    {link.name}
                  </h3>
                </span>
                <span className='chip'/>
              </button>
            ))}
          </div>
        </div>
      )}
    </NavigationDrawerMain>
  </> : null
}

const NavigationDrawerMain = styled.div`
  grid-column: 3;
  grid-row: 1;

  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: start;

  height: 100%;

  .menu {
    z-index: 100;
    position: relative;
    cursor: pointer;
  }

  .drawer {
    display: grid;
    grid-template-columns: 1fr 56px;
    grid-template-rows: 56px 1fr;
    align-items: center;
    justify-items: center;

    z-index: 99;
    position: fixed;
    width: 100vw;
    height: 100vh;

    top: 0px;
    left: 0px;

    background-color: ${colors('white')};

    .button-group {
      grid-column: 1;
      grid-row: 2;

      width: 100%;

      margin: 24px 0px;

      button {
        position: relative;
        display: flex;
        width: 100%;
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
          }
        }

        .chip {
          width: 2px;
          height: 40px;

          margin-left: 24px;
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
  }
`

NavigationDrawer.defaultProps = {
}

export default NavigationDrawer