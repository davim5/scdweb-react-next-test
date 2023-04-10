import { styled } from "@stitches/react";

export const AddProductContainer = styled('main', {
    display: 'flex',
    flexWrap:"wrap",
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    // minHeight: 656,
    minHeight: 'calc(100vh - 128px)',
    gap: '1rem',

    form:{
        display:"flex",
        flexDirection:"column"
    },
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
      marginLeft:'1rem'
    }
  });

  export const Form = styled('form', {
    display: "flex",
    width: '30%',
    alignItems:'center',
    gap:"1rem",

    label: {
      display: 'flex',
      flexDirection: 'row'
    }
  })

  export const Button = styled('button', {
    border:'2px solid black',
    borderRadius:'4px',
    boxShadow:'2px 2px 0px black',
    padding: '0.5rem 1rem',

    transition: '.3s filter, .3s scale,.3s border-color,.3s background-color, .3s background-image,transform .3s, box-shadow .3s',

    '&:hover':{
      filter: 'brightness(90%)',
      boxShadow:'none',
      transform:'translate(2px,2px)'
    },  
  })

  export const InputContainer = styled('label',{
    display:'flex',
    flexDirection: 'row',
    alignItems:'center',

    'input[type=text]':{
      border:'2px solid black',
      color:'$gray900',
      height:'25px',
      borderRadius:'4px',
      background: 'none',
      margin: '4px',
      boxShadow:'2px 2px 0px black',
      padding:'5px',
    },

    select:{
      appearance: 'none',
      padding:'8px 32px 8px 8px',
      background: '#fff',
      boxShadow:'1px 1px 0px black',
      border:'2px solid black',
      borderRadius: '4px',
      color:'var(--text)',
      backgroundImage: 'url(https://Moderncss.goodvessel92551.repl.co/down.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      backgroundSize: '20px 20px',
      cursor: 'pointer',
  }
  })