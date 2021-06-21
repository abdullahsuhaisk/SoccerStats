import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    white: "#fdfdfd",
    black: "#353535",
    primary: "#26263e",
    secondary: "#7ba87d",
    lightPrimary: "#495872",
    lightSecondary: "#f6f6c5",
    secondaryText: "#d7d7e3",
    blue: '#246afd',
    transparentBlack: 'rgba(0, 0, 0, 0.2)',
    transparentBlack1: 'rgba(0, 0, 0, 0.5)',
    line: '#bababa',
    selectedIcon: '#fed55e'
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontSize: SIZES.largeTitle },
    h1: { fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontSize: SIZES.h2, lineHeight: 30, fontWeight: 'bold' },
    h3: { fontSize: SIZES.h3, lineHeight: 22, fontWeight: 'bold' },
    h4: { fontSize: SIZES.h4, lineHeight: 22, fontWeight: 'bold' },
    body1: { fontSize: SIZES.body1, lineHeight: 36, fontWeight: 'bold', color: COLORS.primary },
    body2: { fontSize: SIZES.body2, lineHeight: 30, fontWeight: 'bold', color: COLORS.primary },
    body3: { fontSize: SIZES.body3, lineHeight: 22, fontWeight: 'bold', color: COLORS.primary },
    body4: { fontSize: SIZES.body4, lineHeight: 22, fontWeight: 'bold', color: COLORS.primary },
    body5: { fontSize: SIZES.body5, lineHeight: 22, fontWeight: 'bold', color: COLORS.primary },
};
// export const FONTS = {
//     largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
//     h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
//     h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30, fontWeight: 'bold' },
//     h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22, fontWeight: 'bold' },
//     h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 , fontWeight: 'bold'},
//     body1: { fontFamily: "Roboto-Medium", fontSize: SIZES.body1, lineHeight: 36 },
//     body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
//     body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
//     body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
//     body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
// };

export const shadowStyle = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
}

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
