import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { getCategories } from "../../services/places.service";
import { CategoryCard } from "./card";

export function Categories() {
  const [categories, setCategories] = useState();
  getCategories().then((data) => setCategories(data.slice(0, 6)));

  return (
    <Box sx={{ margin: "50px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography gutterBottom variant="h5" component="div">
          Рекомендуем посетить
        </Typography>
        <Link to="/places">
          <Typography
            sx={{ color: "#1976d2", cursor: "pointer" }}
            variant="h6"
            component="a"
          >
            Все места {">"}
          </Typography>
        </Link>
      </Box>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {categories?.map((item, index) => (
          <SwiperSlide key={index}>
            <CategoryCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
