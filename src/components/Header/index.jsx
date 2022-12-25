import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme";
import { getCategories } from "../../services/places.service";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Search } from "../Search";
import { useEffect } from "react";

export function Header() {
  const value = React.useContext(ThemeContext);
  const { toggleTheme } = value;
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setPhotos(data.slice(0, 1000)));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/1Go">
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" }, color: "#FFFDD0" }}
            >
              1GO
            </Typography>
          </Link>
          <Search data={photos} />
          <Box>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ bgcolor: "white" }}
              onClick={toggleTheme}
            >
              Toggle mode
            </Button>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ bgcolor: "white" }}
              >
                Login
              </Button>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ ml: "20px", bgcolor: "white" }}
              >
                Register
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
