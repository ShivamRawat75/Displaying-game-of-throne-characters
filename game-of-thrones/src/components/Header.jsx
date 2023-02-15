

import {AppBar,Toolbar,styled} from '@mui/material';

import Logo from '../images/logo.jpg'
const StyledHeadder=styled(AppBar)`

    background: #000
`


const Header=()=>{
    return (
        <div>
            <StyledHeadder position='static'>
                <Toolbar>
                    <img src={Logo} alt="logo" style={{width:250}} />
                </Toolbar>
            </StyledHeadder>
        </div>
    )

}

export default Header;