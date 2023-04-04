const { grey } = require("@mui/material/colors");
const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          suzan: {
            main: "#64748B",
          },

          favColor: {
            main: grey[200],
          },
        }
      : {
          // palette values for dark mode
          suzan: {
            main: "teal",
          },

          favColor: {
            main: "black",
          },
        }),
  },
});


export default getDesignTokens;