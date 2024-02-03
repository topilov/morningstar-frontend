import {
    Box,
    createTheme, Divider, IconButton,
    List, ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    styled,
    ThemeProvider, Tooltip, Typography
} from "@mui/material";
import {
    ArrowRight,
    Dns,
    Folder,
    Home, Inbox,
    KeyboardArrowDown, Mail,
    People,
    PermMedia, PersonOutline,
    Public,
    Settings
} from "@mui/icons-material";
import React from "react";

const Categories = () => {
    const categories = [
        {icon: <PersonOutline />, label: "Hebecon" },
        {icon: <PersonOutline />, label: "Teens" },
        {icon: <PersonOutline />, label: "Preteens" },
        {icon: <PersonOutline />, label: "Child" },
    ]

    return (
        <List sx={{ backgroundColor: "inherit" }}>
            {categories.map((category, index) => (
                <>
                    <ListItemButton key={index}>
                        <ListItemIcon sx={{ color: "text.secondary" }}>{category.icon}</ListItemIcon>
                        <ListItemText primary={category.label} />
                    </ListItemButton>
                </>
            ))}
        </List>
    );
};

export const SideList = () => {

    return (
        <Box
            sx={{
                width: 250,
                height: '100vh',
                mt: 8,
                position: 'absolute',
                top: 1,
                backgroundColor: '#0d1117',
                boxSizing: 'border-box',
                transition: 'transform 0.3s ease-out',
                transform: false ? 'translateX(-100%)' : 'translateX(0)',
                borderRight: 1,
                borderRightColor: "#30363d",
            }}
        >
            <Typography margin={2} variant="h6" component="div">Categories</Typography>
            <Categories />
        </Box>
    )
}