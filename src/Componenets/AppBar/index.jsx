import { AccountCircle, Favorite, ShoppingCart } from "@mui/icons-material";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Box,
  CssBaseline,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const AppBarr = ({ showlist, setshowlist, search, setSearch }) => {
  const refmenuMobile = useRef(null);
  const [showmenuMob, setshowmenuMob] = useState(false);
  const refmenu = useRef(null);
  const [showmenu, setshowmenu] = useState(false);
  const ButtMenu = () => {
    setshowmenuMob(true);
  };
  const closeMenu = () => {
    setshowmenuMob(false);
  };
  const ButtMenuDes = () => {
    setshowmenu(true);
  };
  const closeMenuDesk = () => {
    setshowmenu(false);
  };
  const renderMobileMenu = (
    <Menu
      anchorEl={refmenuMobile.current}
      open={showmenuMob}
      onClose={closeMenu}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge sx={{ color: pink[400] }} badgeContent={4}>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Shopping Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications">
          <Badge sx={{ color: pink[400] }} badgeContent={17}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Favorite</p>
      </MenuItem>
      <MenuItem onClick={closeMenu}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle sx={{ color: pink[400] }} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const renderMenu = (
    <Menu anchorEl={refmenu.current} open={showmenu} onClose={closeMenuDesk}>
      <MenuItem onClick={closeMenuDesk}>Profile</MenuItem>
      <MenuItem onClick={closeMenuDesk}>My account</MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={undefined}>
      <CssBaseline />
      <AppBar
        color="inherit"
        className="suza"
        sx={{ borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px" }}
        position="sticky"
      >
        <Toolbar>
          <IconButton
            onClick={() => {
              if (showlist === "none") {
                setshowlist("block");
              } else {
                setshowlist("none");
              }
            }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { md: "none", xs: "flex" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            CLUB MONAKO
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <IconButton
              sx={{ height: "37px", width: "37px" }}
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={6} color="success">
                <Favorite />
              </Badge>
            </IconButton>
            <IconButton
              sx={{ height: "37px", width: "37px" }}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="success">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton
              ref={refmenu}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={ButtMenuDes}
              color="inherit"
            >
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp" src="./images/suz.jpeg" />
              </StyledBadge>
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              ref={refmenuMobile}
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={ButtMenu}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        {renderMobileMenu}
        {renderMenu}
      </AppBar>
    </ThemeProvider>
  );
};

export default AppBarr;
