import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Stack,
  Box,
} from "@mui/material";
import AppBarr from "Componenets/AppBar";
import { useMemo, useState } from "react";
import getDesignTokens from "styles/MyTheme";
import MyList from "Componenets/MyList";
import ".././index.css";
import LatestProducts from "Componenets/LatestProducts";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [showlist, setshowlist] = useState("none");
  const [search, setSearch] = useState("");
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box className={theme.palette.mode}>
      <AppBarr
        showlist={showlist}
        setshowlist={setshowlist}
        search={search}
        setSearch={setSearch}
      />
      <Stack
        sx={{ justifyContent: "space-between" }}
        direction="row"
        spacing={2}
      >
        <MyList
          setmyMOde={setmyMOde}
          theme={theme}
          showlist={showlist}
          setshowlist={setshowlist}
        />
        <Outlet />
        {/* <Typography>
          <Products />
        </Typography> */}
        <LatestProducts />
      </Stack>
    </Box>
    
    <div className="App"></div>
  </ThemeProvider>
  );
}

export default Root;
