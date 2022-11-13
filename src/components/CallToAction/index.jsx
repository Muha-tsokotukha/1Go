import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export const CallToAction = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        bgcolor: "#FFFDD0",
        padding: "50px",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          noWrap
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Хочешь стать партнером?
        </Typography>
        <Typography
          variant="h2"
          sx={{ display: { xs: "none", sm: "block" }, color: "#1976d2" }}
        >
          Оставь контакты
        </Typography>
      </Box>
      <form>
        <Box>
          <Typography
            variant="h5"
            sx={{ display: { xs: "none", sm: "block" }, color: "#1976d2" }}
          >
            Оставь контакты
          </Typography>
        </Box>
        <Box sx={{ display: "grid", gap: "20px", marginTop: "10px" }}>
          <Box>
            <TextField label="Имя" variant="outlined" />
          </Box>
          <Box>
            <TextField label="Номер телефона" variant="outlined" />
          </Box>
          <Button variant="contained">Отправить</Button>
        </Box>
      </form>
    </Box>
  );
};
