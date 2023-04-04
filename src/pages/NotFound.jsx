import React from "react";
import Typography from "@mui/material/Typography";
import { Box} from "@mui/material";

const NotFound = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ marginTop: "30px", color: "#EC407A", fontFamily: "Alkatra" }}
      >
        This page is not Available right now
        <br></br>
        <Typography
          variant="h6"
          sx={{
            marginTop: "30px",
            marginLeft: "150px",
            color: "#EC407A",
            fontFamily: "Alkatra",
          }}
        >
          Pease try again later
        </Typography>
      </Typography>
    </Box>
  );
};

export default NotFound;
