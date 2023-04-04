import { Add,Delete, Remove } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "Redux/cartSlice";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -1,
    top: 1,
    backgroundColor: "#EC407A",
    padding: "0 4px",
    color: "white",
  },
}));
const ProductCart = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { selectedProducts } = useSelector((state) => state.cartt);
  console.log(selectedProducts);
  let subTotal = 0;
  return (
    <Box paddingTop="40px" justifyContent="center">
      {selectedProducts.map((item) => {
        subTotal += item.price * item.quantity;
        return (
          <Paper
            key={item.title}
            // dir="rtl"
            sx={{
              width: { sm: "450px", xs: "340px", lg: "550px" },
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: { sm: "20px", xs: "20px" },
              marginLeft: { sm: "20px", xs: "10px" },
              marginRight: { sm: "20px", xs: "30px" },
              marginTop: "10px",
              paddingBottom: "5px",
              borderTop: " 3px solid ",
              borderColor: "#EC407A",
              background: "white",
            }}
          >
            <IconButton
              sx={{ display: { sm: "none", xs: "block", md: "none" } }}
              onClick={() => {
                dispatch(deleteProduct(item));
              }}
            >
              <Delete sx={{ color: "#EC407A" }} />
            </IconButton>
            <Button
              onClick={() => {
                dispatch(deleteProduct(item));
              }}
              sx={{ display: { sm: "block", xs: "none", md: "block" } }}
              variant="text"
              color="error"
            >
              Delete
            </Button>

            <Typography sx={{ mr: "33px" }} variant="body1" color="initial">
              ${item.quantity * item.price}
            </Typography>
            <div style={{ alignItems: "center", display: "flex" }}>
              <IconButton
                onClick={() => {
                  dispatch(decreaseQuantity(item));
                }}
                sx={{ color: "#EC407A", mr: "7px" }}
              >
                <Remove />
              </IconButton>
              <StyledBadge badgeContent={item.quantity}></StyledBadge>
              <IconButton
                onClick={() => {
                  dispatch(increaseQuantity(item));
                }}
                sx={{ color: "#EC407A", ml: "7px" }}
              >
                <Add />
              </IconButton>
            </div>
            <Typography variant="body1" color="initial">
              {item.title}
            </Typography>
            <img
              width="55px"
              height="70px"
              style={{ paddingTop: "5px", paddingRight: "5px" }}
              src={item.image[0]}
              alt="suzan"
            />
          </Paper>
        );
      })}

      <Paper sx={{ width: "200px", mx: "auto", alignItems: "center" }}>
        <Typography p={2} variant="h6" m={4}>
          Total Price
        </Typography>
        <Divider />
        <Stack sx={{ justifyContent: "space-between", p: 1.2 }} direction="row">
          <Typography variant="body1">total</Typography>
          <Typography variant="body1">${subTotal}</Typography>
        </Stack>
        <Divider />
        <Button sx={{ background: "#F06292" }} fullWidth variant="contained">
          CHECK OUT{" "}
        </Button>
      </Paper>
    </Box>
  );
};

export default ProductCart;
