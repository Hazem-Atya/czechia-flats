import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import flat from "Assets/flat.jpg";
import logoLightModeNBG from "Assets/logo_light_mode-NBG.png";
import { mainRoutes } from "Routes";
import { useNavigate } from "react-router-dom";
import { IconText } from "Shared";
import { MailIcon, PhoneIcon, PositionIcon } from "Icons";

function Footer() {
  const navigate = useNavigate();
  return (
    <Stack sx={{ backgroundColor: "#fdfdfd", mt: 5 }}>
      <Box
        component="img"
        sx={{
          height: 500,
          width: "100%",
          position: "absolute",
          zIndex: 0,
          left: 0,
          opacity: 0.15,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="The flat."
        src={flat}
      />
      <Stack
        sx={{
          gap: "1vh",
          zIndex: 5,
          flexDirection: { sx: "column", md: "row" },
          mt: 5,
        }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography variant="h3" color={"#133b5c"}>
          A special and qualified service
        </Typography>
        <Avatar
          alt="czechia flats"
          src={logoLightModeNBG}
          sx={{ mr: 2, width: 300, height: 180 }}
        />
      </Stack>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" }, gap:"40%" }}>
        <Stack ml={20}>
          {mainRoutes.map((route) => (
            <Button
              key={route.name}
              onClick={() => {
                navigate(route.path);
              }}
              sx={{
                mb: 2,
                color: "black",
                display: "block",
                mr: 5,
                width: "100px",
              }}
            >
              - {route.name}
            </Button>
          ))}
        </Stack>
        <Stack>
          <IconText
            icon={<PositionIcon sx={{ fill: "#133b5c" }} />}
            text="Czechia, Praha"
          />
          <IconText
            icon={<PhoneIcon sx={{ fill: "#133b5c" }} />}
            text="+420 558 050 054"
          />
          <IconText
            icon={<MailIcon sx={{ fill: "#133b5c" }} />}
            text="CzechiaFlats@gmail.com"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Footer;
