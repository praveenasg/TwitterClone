import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarOptions from './SidebarOptions';
import Button from '@mui/material/Button';


function Sidebar() {
    return (
        <div className='sidebar'>
            <TwitterIcon className="sidebar__twitterIcon" />
            <SidebarOptions active Icon={HomeIcon} text="Home" />
            <SidebarOptions Icon={SearchIcon} text="Explore" />
            <SidebarOptions Icon={NotificationsIcon} text="Notifications" />
            <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
            <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOptions Icon={ListAltIcon} text="Lists" /><SidebarOptions Icon={HomeIcon} text="Home" />
            <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
            <SidebarOptions Icon={MoreHorizIcon} text="More" />
            <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
        </div>

    )
}

export default Sidebar