export const buttonStyle = theme => {
    return({
        lnk:{
            textDecoration: 'none'
        },
        content:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        buttons:{
            display: 'flex',
            border:"2px  #008CBA",
            paddingBottom: '0.5rem'
        },
        compra:{
    border: '1px solid #00B4CC',
    backgroundColor: 'white',
    background: '#00B4CC',
    textAlign: 'center',
    color: 'black',
    borderRadius:'4rem',
    padding: '0.9rem',
    fontSize: '12px',
    height: '10px',
    width: '6rem',
    textTransform: 'uppercase',
    paddingBottom: '1.5rem'
        }
    })
}