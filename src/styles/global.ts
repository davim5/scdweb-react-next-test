import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray100',
    color: '$gray900'
  },

  
  'body, input, textarea, button': {
      fontFamily: 'Roboto',
      fontWeight: 400
    },

    'h1, h2, h3, h4, h5, h6':{
      fontFamily: 'Baloo 2',
      fontWeight: 600
    },

  a: {
    color:"inherit",
  },

  button: {
    cursor:"pointer",
  }
})