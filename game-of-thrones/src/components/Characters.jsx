
import { Box,Grid } from "@mui/material";
import {data} from '../constants/data';



import Character from "./Character";

const Characters =() =>{
    return (
        <Box style={{margin: '10px  35px'}}>
            <Grid container>
            {
                data.characters.map(value =>(
                    <Character value={value}/>
                ))
            }
            </Grid>
        </Box>
    )
}

export default Characters;