export const ItemStyle = theme =>{
    return({
       
        titulo:{
        fontSize: '2rem',
         height: '1vh',       
        },
        content:{
            display: 'flex',
           alignItems: 'center',
           backGround:'white',

        },
        contenedor:{
            display:'flex',
        },
        
        img:{
            width: '45%'
        },
        detalles:{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },
        button:{
            backGround:'white',
            color:'black',
            border:'2px solid #008CBA',
            transitionDuration:'0.4s',
            position:'absolute',
            '& hover':{
                backGroundColor:'#008CBA',
                color:'white',
            }
        },
    })
}

export default ItemStyle