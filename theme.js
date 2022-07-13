import { extendTheme } from "native-base"

export const theme = extendTheme({
    fontConfig: {
        OpenSans: {
            100: {
                normal: 'OpenSans_400Regular',
            },
            200: {
                normal: 'OpenSans_400Regular',
            },
            300: {
                normal: 'OpenSans_400Regular',
            },
            400: {
                normal: 'OpenSans_400Regular',
            },
            500: {
                normal: 'OpenSans_600SemiBold',
            },
            600: {
                normal: 'OpenSans_600SemiBold',
            },
        },

    },
    fonts: {
        heading: "OpenSans",
        body: "OpenSans",
        mono: "OpenSans",
    },
})