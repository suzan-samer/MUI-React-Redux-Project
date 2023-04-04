import { Favorite } from "@mui/icons-material";
import { Card, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromFav } from "Redux/favoriteSlice";

const FavoritePage = () => {
  // @ts-ignore
  const { selectedFavProducts } = useSelector((state) => state.favorite);
  console.log(selectedFavProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Stack direction="row" sx={{ flexWrap: "wrap", maxHeight: "240px" }}>
      {selectedFavProducts.map((item) => {
        return (
          <Card
            className="card"
            sx={{ maxWidth: 150, mr: "5px", ml: "10px", mt: "20px" }}
          >
            <CardMedia
              component="img"
              height="230"
              image={item.image[0]}
              alt="Paella dish"
            />
            <Typography
              sx={{ pt: "10px" }}
              variant="h5"
              onClick={() => {
                navigate(`product/${item.id}`);
              }}
            ></Typography>

            <IconButton
              sx={{
                pt: "20px",
                position: "absolute",
                bottom: "203px",
                left: "114px",
              }}
              aria-label="add to favorites"
              onClick={() => {
                dispatch(removeFromFav(item));
              }}
            >
              <Favorite sx={{ color: pink[600] }} />
            </IconButton>
          </Card>
        );
      })}
    </Stack>
  );
};

export default FavoritePage;
