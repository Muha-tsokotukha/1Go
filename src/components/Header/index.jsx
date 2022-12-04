import * as React from "react";
import { ThemeContext } from "../../context/theme";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export function Header() {
  const value = React.useContext(ThemeContext);
  const { toggleTheme } = value;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a style={{ textDecoration: "none" }} href="/">
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" }, color: "#FFFDD0" }}
            >
              1GO
            </Typography>
          </a>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Поиск..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ bgcolor: "white" }}
              onClick={toggleTheme}
            >
              Toggle mode
            </Button>
            <a href="/login" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ bgcolor: "white" }}
              >
                Login
              </Button>
            </a>
            <a href="/register" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ ml: "20px", bgcolor: "white" }}
              >
                Register
              </Button>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
