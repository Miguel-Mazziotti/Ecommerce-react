export const navbarStyle = theme => {
    return ({
        nav:{
            justifyContent: 'space-between'
        },
       links:{
            display: 'flex',
            listStyle: 'none',
            textDecoration: 'none',
            backgroundColor: '#0082e6',
            height: '2.6rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            color:'white',
            paddingRight: "3rem",
            [theme.breakpoints.between('xs', 'md')]:{
                display: 'flex',
                position: 'relative',
                alignItems: 'center',
                flexWrap: 'wrap',
                flexDirection: 'column',
                justifyContent: 'center'
            } ,  
         
       
             '& a':{
                textDecoration: 'none',
                listStyle: 'none',
                paddingRight: 7,
                paddingLeft:10, 
                color:'white',
                borderRadius: '1rem',
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                fontWeight: '25rem',
                
                '& a:hover':{
                    backGround: '#1b9bff',
                    transition:'5s'
                },
                
                 

                    
            },
            tags:{
                display: 'flex',
                alignItems: 'center',
            }

        }
    })
}