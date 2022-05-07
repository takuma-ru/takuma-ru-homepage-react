import { ReactElement } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Divider from '../components/utils/Divider';

type LayoutProps = Required<{
  readonly children: ReactElement
  readonly metaTitle: String
}>

interface linkInterface {
  name: string,
  path: string,
}

export function Layout({
  children,
  metaTitle,
}: LayoutProps) {
  // const
  const router = useRouter();
  const links: Array<linkInterface> = [
    {name: 'Index', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Works', path: '/works'},
    {name: 'Contact', path: '/contact'},
  ]

  // method
  const routerPush = (link: string) => {
    router.push(link)
  }

  return <>
    <div id='layout'>
      <Head>
        <title>{metaTitle}&#65372;takuma-ru</title>
        <meta name="description" content="takuma-ru's homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='tool-bar'>

      </div>

      <div className='navigation-bar'>
        <div className='button-group'>
          {links.map(link =>(
            <button
              key={link.name}
              onClick={() => routerPush(link.path)}
            >
              <span className='name'>{link.name}</span>
              <Divider vertical color='white-opacity' />
              <div className='chip' />
            </button>
          ))}
        </div>
      </div>

      <main>
        {children}
      </main>


      {/* scss styled jsx */}
      <style lang='scss' scoped jsx>{`
        #layout {
          display: grid;
          width: 100vw;
          height: 100vh;

          grid-template-columns: 56px 1fr 56px;
          grid-template-rows: 56px 1fr 56px;
          align-items: center;
        }

        main {
          grid-column: 2;
          grid-row: 2;
          justify-self: start;
          align-self: flex-start;

          width: 100%;
          height: 100%;
          padding: 16px;

          color: $black;
        }

        .navigation-bar {
          grid-column: 1;
          grid-row: 1/4;

          .button-group {
            button {
              position: relative;
              display: flex;
              min-width: 56px;
              height: 32px;

              margin: 8px 0px;
              padding: 8px 0px;

              background-color: $black;
              border: none;
              justify-content: flex-end;
              align-items: center;
              font-family: 'Roboto', 'Noto Sans JP', sans-serif;

              .name {
                max-width: 0px;
                max-height: 0px;
                line-height: 32px;
                font-size: 0px;
                font-weight: 300;
                color: $white;

                margin: 8px 8px;

                transform-origin: center left;
                transition: all 0.1s ease-in-out;
              }

              .chip {
                width: 8px;
                height: 8px;

                background-color: $white;

                margin: 8px 16px;
              }


              &:hover {
                height: 56px;
                .name {
                  max-width: 9999px;
                  max-height: 9999px;
                  font-size: 32px;
                  margin: 8px 16px;
                }
              }
            }
          }
        }

        .tool-bar {
          grid-column: 1/4;
          grid-row: 1;
        }
      `}</style>
    </div>
  </>
}