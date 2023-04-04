import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import {
  Badge,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import "../../src/index.css";
import { Add, Favorite, FavoriteBorder, Remove } from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import { useGetproductByNameQuery } from "../Redux/ProductsApi";
import { addTocart } from "Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { addToFav } from "Redux/favoriteSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -1,
    top: 1,
    backgroundColor: "#EC407A",
    padding: "0 4px",
    color: "white",
  },
}));

const Products = () => {
  const { data,isLoading } = useGetproductByNameQuery();
  console.log(data);
  // @ts-ignore
  const { selectedProducts, selectedProductsID } = useSelector(
    // @ts-ignore
    (state) => state.cartt
  );
  const ProductQuantity = (itemApi) => {
    const myProd = selectedProducts.find((itemUser) => {
      return itemUser.id === itemApi.id;
    });
    return myProd.quantity;
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isImage1, setIsImage1] = useState(true);
  const handleImageToggle = () => {
    setIsImage1((prev) => !prev);
  };
  if (isLoading) {
    return (
      <Box sx={{ justifyContent: "center" }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }
  if (data) {
    return (
      <Stack
        direction="row"
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              className="card"
              sx={{ minWidth: 200, mr: "10px", mt: "20px" }}
            >
              {isImage1 ? (
                <CardMedia
                  component="img"
                  height="230"
                  image={item.image[0]}
                  alt="Paella dish"
                  onClick={handleImageToggle}
                />
              ) : (
                <CardMedia
                  component="img"
                  height="230"
                  image={item.image[3]}
                  alt="Paella dish"
                  onClick={handleImageToggle}
                />
              )}
              <Typography
                sx={{ pl: "35px", pt: "10px", fontFamily: "Alkatra" }}
                variant="h5"
                onClick={() => {
                  navigate(`product/${item.id}`);
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{ pl: "80px", pt: "10px", fontFamily: "Alkatra" }}
                variant="h6"
              >
                ${item.price}
              </Typography>
              <CardActions sx={{ justifyContent: "space-between" }}>
                {selectedProductsID.includes(item.id) ? (
                  <div style={{ alignItems: "center", display: "flex" }}>
                    <IconButton
                      size="small"
                      onClick={() => {
                        dispatch(decreaseQuantity(item));
                      }}
                      sx={{ mr: "7px" }}
                    >
                      <Remove />
                    </IconButton>
                    <StyledBadge
                      badgeContent={ProductQuantity(item)}
                    ></StyledBadge>
                    <IconButton
                      size="small"
                      onClick={() => {
                        dispatch(increaseQuantity(item));
                      }}
                      sx={{ ml: "7px" }}
                    >
                      <Add />
                    </IconButton>
                  </div>
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => {
                      dispatch(addTocart(item));
                    }}
                    sx={{
                      background: pink[400],
                      textTransform: "capitalize",
                      color: "white",
                    }}
                  >
                    AddToCart
                  </Button>
                )}
                {/* <IconButton  aria-label="add to favorites">
                  <Checkbox
                    icon={<Visibility />}
                    checkedIcon={<Visibility sx={{ color: pink[600] }} />}
                  />
                </IconButton> */}
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => {
                    dispatch(addToFav(item));
                  }}
                >
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{ color: pink[600] }} />}
                  />
                </IconButton>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    );
  }
};

export default Products;
