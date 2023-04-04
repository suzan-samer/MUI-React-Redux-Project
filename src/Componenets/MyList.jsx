import {
  alpha,
  Badge,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Switch,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  DarkMode,
  Favorite,
  LightMode,
  Person,
} from "@mui/icons-material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { pink } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    backgroundColor: "#D81B60",
    color: "white",
    padding: "0 4px",
  },
}));
const MyList = ({ setmyMOde, theme, showlist, setshowlist }) => {
  // @ts-ignore
  const { selectedProducts } = useSelector((state) => state.cartt);
  // @ts-ignore
  const { selectedFavProducts } = useSelector((state) => state.favorite);
  const navigate = useNavigate();
  const MyList = [
    {
      title: "HOME",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      title: "Category",
      icon: <CategoryIcon />,
    },
    {
      title: "Profile",
      icon: <Person />,
    },
    {
      title: "My Shopping Cart",
      icon: (
        <StyledBadge badgeContent={selectedProducts.length}>
          <ShoppingCartIcon />
        </StyledBadge>
      ),
      path: "/cart",
    },
    {
      title: "My Favorite",
      icon: (
        <StyledBadge badgeContent={selectedFavProducts.length}>
          <Favorite />
        </StyledBadge>
      ),
      path: "/favorite",
    },
    {
      title: "Setting ",
      icon: <ManageAccountsIcon />,
    },
  ];

  return (
    <Box
      className="myList"
      minWidth="240px"
      minHeight="1200px"
      bgcolor={theme.palette.favColor.main}
      sx={{
        display: {
          xs: showlist,
          sm: showlist,
          md: "block",
          borderTopLeftRadius: "20px",
        },
      }}
    >
      <List sx={{ position: "fixed" }}>
        {MyList.map((item) => {
          return (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem>
          <ListItemIcon>
            {theme.palette.mode === "dark" ? (
              <DarkMode />
            ) : (
              <LightMode sx={{ color: "orange" }} />
            )}
          </ListItemIcon>
          <ListItemText primary={theme.palette.mode} />
          <PinkSwitch
            edge="end"
            onChange={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              setmyMOde(theme.palette.mode === "light" ? "dark" : "light");
            }}
            inputProps={{
              "aria-labelledby": "switch-list-label-wifi",
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default MyList;
