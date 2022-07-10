import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LyricsIcon from '@mui/icons-material/Lyrics';
import SecurityIcon from '@mui/icons-material/Security';
import VideoCameraBackTwoToneIcon from '@mui/icons-material/VideoCameraBackTwoTone';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function MenuItems() {
  return (
    <List component="nav">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <Divider sx={{ my: 1 }} />
      <ListSubheader component="div" inset>
        Apps
      </ListSubheader>
      {appItems}
      <Divider sx={{ my: 1 }} />
      <ListSubheader component="div" inset>
        Motorcycle Videos
      </ListSubheader>
      <Divider sx={{ my: 1 }} />
      {videoItems}
    </List>
  )
}

const appItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <CalendarMonthIcon />
      </ListItemIcon>
      <ListItemText primary="Shift Calendar" />
    </ListItemButton>
    <ListItemButton component={Link} to={{ pathname: "https://github.com/roguehedgehog/claire" }} target="_blank">
      <ListItemIcon>
        <SecurityIcon />
      </ListItemIcon>
      <ListItemText primary="claire" />
    </ListItemButton>
    <ListItemButton component={Link} to={{ pathname: "https://github.com/roguehedgehog/tune" }} target="_blank">
      <ListItemIcon>
        <LyricsIcon />
      </ListItemIcon>
      <ListItemText primary="Song Search" />
    </ListItemButton>    
  </React.Fragment>
);

const videoItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/motorcycle-videos/wales">
      <ListItemIcon>
        <VideoCameraBackTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Wales" />
    </ListItemButton>

    <ListItemButton component={Link} to="/motorcycle-videos/portugal">
      <ListItemIcon>
        <VideoCameraBackTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Portugal" />
    </ListItemButton>

    <ListItemButton component={Link} to="/motorcycle-videos/morocco">
      <ListItemIcon>
        <VideoCameraBackTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Morocco" />
    </ListItemButton>

    <ListItemButton component={Link} to="/motorcycle-videos/spain">
      <ListItemIcon>
        <VideoCameraBackTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Spain" />
    </ListItemButton>
  </React.Fragment>
);