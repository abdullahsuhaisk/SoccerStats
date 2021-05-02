import React from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import { COLORS, SIZES, FONTS, icons, images } from "../constants"


interface Props {
    leagueName: String
    img: HTMLImageElement
}

const BoxOfDetailScreen: React.FC<Props> = (props) => {
    return (
        <View style={styles.wrapper}>
            <Image source={props.img} style={styles.imageStyle} />
            <View style={styles.content}>
                <Text style={{ ...FONTS.body4, fontWeight: 'bold', color: COLORS.primary }}>
                    {props.leagueName}
                </Text>
            </View>
        </View>
    );
}
// height: PixelRatio.getPixelSizeForLayoutSize(135),
const styles = StyleSheet.create({
    wrapper: {
        width: (SIZES.width / 3) - 20,
        height: (SIZES.width / 3),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        borderColor: COLORS.white,
        borderWidth: 1,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    imageStyle: {
        width: '70%',
        maxHeight: '70%',
        resizeMode: 'contain'
    },
    touchable: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default BoxOfDetailScreen;