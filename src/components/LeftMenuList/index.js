import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ReactComponent as Dashboard } from '../../assests/dashboard.svg'
import { ReactComponent as Map } from '../../assests/map.svg'

export default function LeftMenuList() {

    const list = [
        {
            text: 'DASHBOARD',
            icon: <Dashboard />
        },
        {
            text: 'MAP',
            icon: <Map />
        }
    ]
    const DrawerList = (
        <Box sx={{ width: 130 }} role="presentation">
            <List>
                {list.map((item, index) => (
                    <>
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton sx={{ flex: 1, flexDirection: 'column', textAlign: 'center', margin: 2 }}>
                                <ListItemIcon sx={{ margin: 1, justifyContent: 'center' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ color: 'gray' }} />
                            </ListItemButton>
                        </ListItem>
                        {list.length - 1 !== index ? <Divider sx={{ width: 100, textAlign: 'center', flex: 1, backgroundColor: 'gray' }} /> : <></>}
                    </>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Drawer open={true} >
                {DrawerList}
            </Drawer>
        </div>
    );
}




