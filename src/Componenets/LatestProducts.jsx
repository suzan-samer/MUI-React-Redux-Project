import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { pink } from "@mui/material/colors";

const LatestProducts = () => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  const itemData = [
    {
      img: "https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dw5cefcbce/hi-res/cm-1466471_alternate4.jpg?sw=1068&sh=1436&sfrm=jpg",
    },
    {
      img: "https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dw08aa0cd6/hi-res/cm-1466474_alternate4.jpg?sw=1068&sh=1436&sfrm=tif",
    },
    {
      img: "https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dw050ee844/hi-res/cm-1466470_alternate4.jpg?sw=1068&sh=1436&sfrm=jpg",
    },
    {
      img: "https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dw1db14110/hi-res/cm-295819112001_alternate2.jpg?sw=1000&sh=1250&sfrm=jpg",
    },
    {
      img: "https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dw415d2872/hi-res/cm-295838706001_alternate2.jpg?sw=1000&sh=1250&sfrm=jpg",
    },
    {
      img: "https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dw4689b1e1/hi-res/cm-295890405002_lifestyle.jpg?sw=1000&sh=1250&sfrm=jpg",
    },
    {
      img: "https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dwbed21b6b/hi-res/cm-295911453001_alternate2.jpg?sw=1000&sh=1250&sfrm=jpg",
    },
    {
      img: "https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dwd4770b00/hi-res/cm-1466285_alternate4.jpg?sw=1068&sh=1436&sfrm=jpg",
    },
    {
      img: "https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dwd31d1879/hi-res/cm-1434608_alternate4.jpg?sw=1068&sh=1436&sfrm=jpg",
    },
    {
      img: "https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dwb2577736/hi-res/cm-1434627_alternate4.jpg?sw=1068&sh=1436&sfrm=jpg",
    },
  ];
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block", lg: "block" },
        flexGrow: "auto",
      }}
    >
      <Typography sx={{ pt: "20px", fontWeight: "100" }} variant="h6">
        Product Rating
      </Typography>

      <StyledRating
        sx={{ justifyContent: "center", my: 2 }}
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" sx={{ color: pink[500] }} />}
        emptyIcon={
          <FavoriteBorderIcon fontSize="inherit" sx={{ color: pink[700] }} />
        }
      />

      <Typography sx={{ mt: "2", mb: "3", fontWeight: "100" }} variant="h6">
        Latest Products
      </Typography>
      <ImageList
        sx={{ width: 300, height: 270, mt: "30px", overflowY: "hidden" }}
        cols={3}
        rowHeight={164}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography sx={{ mt: "12px", fontWeight: "100" }} variant="h6">
        New Arrivals
      </Typography>

      <AvatarGroup sx={{ justifyContent: "center", my: 2 }} total={24}>
        <Avatar
          alt="Remy Sharp"
          src="https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dw593932e3/hi-res/cm-295875628001_lifestyle.jpg?sw=1000&sh=1250&sfrm=jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dw3524805e/hi-res/cm-1394330_lifestyle.jpg?sw=1000&sh=1250&sfrm=jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dw8cfe2c8b/hi-res/cm-1434606_alternate4.jpg?sw=1000&sh=1250&sfrm=jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dwa222d7e6/hi-res/cm-1464847_alternate4.jpg?sw=1000&sh=1250&sfrm=jpg"
        />
      </AvatarGroup>
    </Box>
  );
};

export default LatestProducts;
