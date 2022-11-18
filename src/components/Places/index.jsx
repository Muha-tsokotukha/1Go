import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CategoryCard } from "../Categories/card";
import { places } from "./data";

export const ListOfPlaces = () => {
  return (
    <Box sx={{ mt: "50px", p: "20px" }}>
      <Typography variant="h4">Все места которые можно посетить</Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "40px", mt: "50px" }}>
        {places.map((place, index) => (
          <CategoryCard item={place} key={index} />
        ))}
      </Box>
    </Box>
  );
};
