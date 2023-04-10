import { styled } from "@stitches/react";

export const HomeContainer = styled('main', {
    display: 'grid',
   
    gridTemplateColumns:'1fr 1fr 1fr 1fr',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 920px) / 2))',
    margin: '0 auto',
    // minHeight: 656,
    minHeight: 'calc(100vh - 128px)',
    gap: '1rem'
  })

  export const HeaderContainer = styled('header', {
    padding: '1rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom:"1px solid $gray900",
    marginBottom:"1rem",
  
    button: {
      border:'2px solid black',
      borderRadius:'4px',
      boxShadow:'2px 2px 0px black',
      padding: '0.5rem 1rem',
      marginLeft: "auto",

      transition: '.3s filter, .3s scale,.3s border-color,.3s background-color, .3s background-image,transform .3s, box-shadow .3s',

      '&:hover':{
        filter: 'brightness(90%)',
        boxShadow:'none',
        transform:'translate(2px,2px)'
      },
    },
    a: {
      marginRight:'1rem'
    }
  });

  export const Product = styled('div', {
    background: 'linear-gradient(180deg, $gray100 0%, $gray300 100%)',
    borderRadius: 8,
    border:'2px solid $gray900',
    boxShadow:'2px 2px 0px black',
    position: 'relative',
    overflow: 'hidden',
  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap:' 25%',
    padding:'0.5rem',
    height:'14rem',
    width:'16rem',

    div: {
      display:"flex",
      flexDirection:"column",
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center'
    },

    'input[type=checkbox]': {
      appearance: 'none',
      width:'30px',
      height:'30px',
      borderRadius:'4px',
      border:'2px solid black',
      background:'var(--back)',
      cursor: 'pointer',
      boxShadow:'2px 2px 0px black',

  },

 ' input[type="checkbox"]:checked':{
    backgroundColor: '$green300',
    boxShadow:'none',
    transform: 'translate(2px,2px)',
    backgroundImage: 'url(https://moderncss.goodvessel92551.repl.co/tick.svg)'
}
  })