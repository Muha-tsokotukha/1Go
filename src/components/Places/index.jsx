import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CategoryCard } from "../Categories/card";
import { getPlacesPhotos } from "../../services/places.service";

export const ListOfPlaces = () => {
  const [places, setPlaces] = useState();
  getPlacesPhotos().then((data) => setPlaces(data));

  return (
    <Box sx={{ mt: "50px", p: "20px" }}>
      <Typography variant="h4">Все места которые можно посетить</Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "40px",
          mt: "50px",
        }}
      >
        {places?.map((place, index) => (
          <CategoryCard item={place} key={index} />
        ))}
      </Box>
    </Box>
  );
};
