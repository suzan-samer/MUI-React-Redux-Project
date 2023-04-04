import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Checkbox,
  CircularProgress,
  IconButton,
  Stack,
  styled,
} from "@mui/material";
import { useGetOneProductByNameQuery } from "Redux/ProductsApi";
import { useParams } from "react-router-dom";
import Details from "./Details";
import { useRef, useState } from "react";
import { pink } from "@mui/material/colors";
import { Add, Favorite, FavoriteBorder, Remove } from "@mui/icons-material";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -1,
    top: 1,
    backgroundColor: "#EC407A",
    padding: "0 4px",
    color: "white",
  },
}));
const ProductDetails = () => {
  let { id } = useParams();
  const { data, error, isLoading } = useGetOneProductByNameQuery(id);
  const [index, setindex] = useState(0);
  const [inde, setinde] = useState(0);

  const myRef = useRef(null);
  const tabImg = (index) => {
    setindex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };
  console.log(id);
  console.log(data);
  if (isLoading) {
    return (
      <Box sx={{ justifyContent: "center" }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }
  if (data) {
    return (
      <>
        <div className="app">
          <div className="details">
            <div className="big-img">
              <img src={data.image[index]} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2 style={{ fontFamily: "Alkatra" }}>{data.title}</h2>
                <span style={{ fontFamily: "Alkatra" }}>${data.price}</span>
              </div>
              <p style={{ fontFamily: "Alkatra" }}>{data.description}</p>

              <div className="colors">
                {data.colors.map((color, index) => (
                  <button style={{ background: color }} key={index}></button>
                ))}
              </div>
              <div style={{ alignItems: "center", display: "flex" }}>
                <IconButton size="small" sx={{ mr: "7px" }}>
                  <Remove />
                </IconButton>
                <StyledBadge badgeContent={1}></StyledBadge>
                <IconButton size="small" sx={{ ml: "7px" }}>
                  <Add />
                </IconButton>
              </div>

              <Details images={data.image} tab={tabImg} myRef={myRef} />
              <CardActions sx={{ justifyContent: "space-between", mt: "60px" }}>
                <Button
                  variant="contained"
                  sx={{
                    background: pink[400],
                    textTransform: "capitalize",
                    color: "white",
                  }}
                >
                  AddToCart
                </Button>

                <IconButton aria-label="add to favorites">
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{ color: pink[600] }} />}
                  />
                </IconButton>
              </CardActions>
            </div>
            <p
              style={{
                fontFamily: "Alkatra",
                fontSize: "30px",
                marginTop: "50px",
              }}
            >
              You may also like
            </p>
          </div>

          <Stack
            direction="row"
            sx={{ flexWrap: "wrap", justifyContent: "center" }}
          >
            <Card
              className="card"
              sx={{ maxWidth: 200, mr: "10px", mt: "20px" }}
            >
              <CardMedia
                component="img"
                height="230"
                image="https://img.ltwebstatic.com/images3_pi/2023/01/16/16738431481ec37f8cf423216d6391e295ae17565a_thumbnail_405x552.webp"
                alt="Paella dish"
              />
            </Card>
            <Card
              className="card"
              sx={{ maxWidth: 200, mr: "10px", mt: "20px" }}
            >
              <CardMedia
                component="img"
                height="230"
                image="https://img.ltwebstatic.com/images3_pi/2022/05/30/165391001895e4b73dbd2714f24e13a2dadfdda7a6_thumbnail_405x552.webp"
                alt="Paella dish"
              />
            </Card>
            <Card
              className="card"
              sx={{ maxWidth: 200, mr: "10px", mt: "20px" }}
            >
              <CardMedia
                component="img"
                height="230"
                image="https://img.ltwebstatic.com/images3_pi/2022/07/28/1658981012fd052784c681c5244d7dec050ffc3f47_thumbnail_405x552.webp"
                alt="Paella dish"
              />
            </Card>

            <Card
              className="card"
              sx={{ maxWidth: 200, mr: "10px", mt: "20px" }}
            >
              <CardMedia
                component="img"
                height="230"
                image="https://img.ltwebstatic.com/images3_pi/2023/01/11/16734327832fb199026f78712ccdea0e04ad0c42c4_thumbnail_900x.webp"
                alt="Paella dish"
              />
            </Card>
            <Card
              className="card"
              sx={{ maxWidth: 200, mr: "10px", mt: "20px" }}
            >
              <CardMedia
                component="img"
                height="230"
                image="https://img.ltwebstatic.com/images3_pi/2022/12/23/16717658341120a8f8cdc58afec3f15269f336b6ef_thumbnail_900x.webp"
                alt="Paella dish"
              />
            </Card>
            <Card
              className="card"
              sx={{ maxWidth: 200, mr: "10px", mt: "20px" }}
            >
              <CardMedia
                component="img"
                height="230"
                image="https://img.ltwebstatic.com/images3_pi/2022/05/09/165208482061bdd291af4e248573f7e1b203351e2d_thumbnail_900x.webp"
                alt="Paella dish"
              />
            </Card>
          </Stack>
        </div>
      </>
    );
  }
};

export default ProductDetails;
