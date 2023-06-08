import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    typography: {
        fontFamily: ["Poppins", "Lato", "Parisienne"].join(","),
        Regular: 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 900,
    },
    palette: {
        primary: {
            main: "#5DC4FF",
            gradient: "linear-gradient(102.28deg, #5DC4FF 0%, #006FAE 104.87%);",
        },
        secondary: {
            main: "#33BCA1",
            light: "#fff",
            dimLight: "#F3F3F3",
        },
    },
});