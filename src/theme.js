import {createTheme} from '@mui/material/styles';

export const customTheme = createTheme({
    palette : {
       secondary : {
        light : '#8bc34a',
        main : '#ffc400',
       },
       mycolor:{
        main: "#33ab9f"
       } 
    },
    typography: {
        fontSize: 30
    }
})