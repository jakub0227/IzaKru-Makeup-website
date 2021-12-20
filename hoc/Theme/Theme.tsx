import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { FC } from "react";

export const Theme: FC = (props) => {
  const theme = createMuiTheme({
    props: {
      MuiTypography: {
        gutterBottom: true,
      },
    },
    typography: {
      fontFamily: ["'Lato', 'Pacifico', sans-serif"].join(","),
    },
    palette: {
      primary: { main: "#9F9DAE" },
      secondary: { light: "#F3DED6", main: "#B9A0A7" },
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
