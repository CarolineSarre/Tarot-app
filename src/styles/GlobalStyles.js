import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f8f4ec;
    color: #333;
    padding: 20px;
  }

  button {
    cursor: pointer;
  }

  input {
    padding: 8px;
    margin-bottom: 10px;
  }
`

export default GlobalStyle
