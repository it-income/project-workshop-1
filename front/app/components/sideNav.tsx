import Drawer from '@mui/material/Drawer';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import NextLink from 'next/link';

export const SideNav = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        height: '100vh',
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {width: 240, boxSizing: 'border-box'},
      }}
      PaperProps={{
        sx: {
          backgroundColor: '#ECF0F1',
        }
      }}
    >
      <Toolbar/>
      <Box sx={{overflow: 'auto'}}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={NextLink} href="/">
              <ListItemText primary={'Рога и копыта'}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}
