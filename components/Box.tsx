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
    onClick?: () => void
    leagueName: String
    img: HTMLImageElement
    noBorder?: boolean
}

const Box: React.FC<Props> = (props) => {
    if (props.noBorder) {
        return (
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={props.onClick} style={styles.touchable}>
                    <Image source={props.img} style={styles.imageStyle} />
                    <View style={styles.content}>
                        <Text style={{ ...FONTS.body4, fontWeight: 'bold', color: COLORS.primary }}>
                            {props.leagueName}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    else
        return (
            <View style={styles.borderWrapper}>
                <TouchableOpacity onPress={props.onClick} style={styles.touchable}>
                    <Image source={props.img} style={styles.imageStyle} />
                    <View style={styles.content}>
                        <Text style={{ ...FONTS.body4, fontWeight: 'bold', color: COLORS.primary }}>
                            {props.leagueName}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
}
// height: PixelRatio.getPixelSizeForLayoutSize(135),
const styles = StyleSheet.create({
    wrapper: {
        width: (SIZES.width / 3) - 20,
        height: (SIZES.width / 3),
        borderColor: COLORS.black,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: COLORS.white
    },
    borderWrapper: {
        width: (SIZES.width / 3) - 20,
        height: (SIZES.width / 3),
        borderColor: COLORS.black,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        borderWidth: 0.3,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
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
export default Box;