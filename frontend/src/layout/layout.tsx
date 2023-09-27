import * as React from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";
import { useAppSelector } from "Store";
import { getIsLightMode } from "Slices/theme.slice";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { MenuIcon } from "Icons";
import { darkTheme, lightTheme } from "Styles";
import { Outlet, useNavigate } from "react-router-dom";
import { mainRoutes } from "Routes";
import logoLightMode from "Assets/logo_light_mode.png";
import { StyledAppBar } from "./layout.styles";
import { Footer } from "./components";

export function Layout() {
  const isLightMode = useAppSelector(getIsLightMode);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      <Stack display={"flex"} flexDirection={"column"}>
        <StyledAppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Avatar
                alt="czechia flats"
                src={logoLightMode}
                sx={{ mr: 2, width: 100, height: 100 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#133b5c",
                  textDecoration: "none",
                }}
              >
                Czechia Flats
              </Typography>

              {/** Menu when phone */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {mainRoutes.map((route) => (
                    <MenuItem
                      key={route.name}
                      onClick={() => {
                        navigate(route.path);
                        handleCloseNavMenu();
                      }}
                    >
                      <Typography textAlign="center" sx={{ color: "black" }}>
                        {route.name}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#133b5c",
                  textDecoration: "none",
                }}
              >
                Czechia Flats
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  ml: 20,
                }}
              >
                {mainRoutes.map((route) => (
                  <Button
                    key={route.name}
                    onClick={() => {
                      navigate(route.path);
                      handleCloseNavMenu();
                    }}
                    sx={{ my: 2, color: "black", display: "block", mr: 10 }}
                  >
                    {route.name}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </StyledAppBar>
      </Stack>
      <Box
        component="main"
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Outlet />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
