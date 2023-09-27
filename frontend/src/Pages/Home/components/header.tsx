import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { SearchIcon } from "Icons";
import flat from "Assets/flat.jpg";

function Header() {
  return (
    <Stack sx={{ gap: "10vh", mt: 8, height: "90vh" }}>
      <Box
        component="img"
        sx={{
          height: 600,
          width: { sx: 400, md: 900 },
          position: "absolute",
          zIndex: 0,
          right: 0,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="The flat."
        src={flat}
      />
      <Stack sx={{ gap: "1vh", zIndex: 5, mt: 10 }}>
        <Typography variant="h1" color={"#133b5c"}>
          Flats <br /> For Everyone
        </Typography>
        <Typography variant="h6">
          Cheap prices, Vibrant neighborhoods, full-service, <br /> strikingly
          beautiful apartment buildings.
        </Typography>
      </Stack>

      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: { sx: "100%", md: "80%" },
          zIndex: 5,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Stack>
  );
}

export default Header;
