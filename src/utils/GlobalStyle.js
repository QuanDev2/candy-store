import { Global, css } from '@emotion/react'

function GlobalStyle() {
  const globalStyle = css`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

    :root {
      --green: #0bbb98;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }

    a {
      text-decoration: none;
    }

    body {
    }

    li {
      list-style: none;
    }
  `
  return <Global styles={globalStyle} />
}

export default GlobalStyle
