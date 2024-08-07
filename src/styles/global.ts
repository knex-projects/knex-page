import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    /* configurar um box-shadow padrão */
    /* box-shadow: 0 0 0 2px  ${({ theme }) => theme}; */
  }

  body {
    background: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme.white};
  }

  body, input, textarea, button {
    /* adicionar fonte, vou deixar primeiramente sem serifa */
    font-family: sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
