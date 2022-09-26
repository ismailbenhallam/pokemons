import {extendTheme, withDefaultColorScheme} from "@chakra-ui/react";

const theme = extendTheme({
        colors: {
            secondary: {
                500: "#FECA1B",
                600: "#CA9D00",
                700: "#987200",
                800: "#6A4A00",
                900: "#452400",
            },
            primary: {
                500: "#3761A8",
                600: "#5A7EC8",
                700: "#7B9CE9",
                800: "#9CBBFF",
                900: "#BEDCFF",
            },
            error: {
                500: "#E3350E"
            }
        },
        fonts: {
            body: `Roboto`,
        },
    },
    withDefaultColorScheme({
        colorScheme: "primary",
    }),
)

export default theme