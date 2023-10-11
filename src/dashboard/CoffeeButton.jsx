import { Button, styled } from "@mui/material";

const CustomButton = styled(Button) (({theme})=>({
    backgroundColor: theme.palette.primary.main,
    color: "white",
    width:'100%',


    cursor:'pointer',
    transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',

    '&:hover':{
        transform:'scale(1.2)',
        
    }
}))


function CoffeeButton({children}) {
    return ( 
        <CustomButton variant="contained">{children}</CustomButton>
     );
}

export default CoffeeButton;