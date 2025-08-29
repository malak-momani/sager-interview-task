import { Box, Icon, IconButton, ImageListItem, SvgIcon } from "@mui/material";
import capture from '../../assests/capture.svg';
import notification from '../../assests/notification.svg';
import langauage  from '../../assests/language.svg';
import LanguageIcon from '@mui/icons-material/Language';
const NavTop = () => {
    return (
        <Box sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between"
        }}>
             <IconButton color="white" aria-label="add an alarm">
                <img src={capture}/>
            </IconButton>
             <IconButton color="white" aria-label="add an alarm">
                <img src={langauage}/>
            </IconButton>
            <IconButton color="white" aria-label="add an alarm">
                <img src={notification}/>
            </IconButton>
        </Box>
    );
}

export default NavTop;