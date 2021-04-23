import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  PixelRatio,
  ImageProps,
  FlatList
} from 'react-native'
import { Button } from '../../components';
import { COLORS, SIZES, FONTS, icons, images } from "../../constants"

const AppIntroContainer: React.FC<{
  // show: boolean;
  // setShow: Function
}> = (props) => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get('window');
  const { navigate } = props.navigation;

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  const sliderElements = [{
    image: images.silder1_pic,
    header: "Header 1",
    content: "Paragraph content will be here amazing mobile app stast bet things you can easly follow tips and sometings etc..."
  },
  {
    image: images.silder2_pic,
    header: "Header 2",
    content: "Paragraph content will be here amazing mobile app stast bet things you can easly follow tips and sometings etc..."
  },
  {
    image: images.silder3_pic,
    header: "Header 3",
    content: "Paragraph content will be here amazing mobile app stast bet things you can easly follow tips and sometings etc..."
  },
  {
    image: images.silder4_pic,
    header: "Header 4",
    content: "Paragraph content will be here amazing mobile app stast bet things you can easly follow tips and sometings etc..."
  }
  ]
  const renderItem = (slider) => {
    return (
      <View style={{ width, height }}>
        {screen1(slider.item)}
      </View>);
  };

  const handleOnClick = () => {
    navigate("Login")
    props.onDone()
  }


  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FlatList
        style={{ flex: 1 }}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={sliderElements}
        renderItem={renderItem}
        keyExtractor={item => item.header}
        onScroll={(event: any) => {
          setSliderPage(event);
        }}>
      </FlatList>
      <View>
        {
          pageIndex < sliderElements.length - 1 ?
            <View style={styles.paginationWrapper}>
              {Array.from(sliderElements.keys()).map((key, index) => (
                <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
              ))}
            </View>
            :
            <View style={{ ...styles.buttonWrapper }}>
              <View style={{ width: SIZES.width / 3 }}>
                <Button title={"Login"} onClick={handleOnClick} />
              </View>
            </View>
        }
      </View>
    </View>
  )
}

const screen1: React.FunctionComponent<{
  image: ImageProps,
  header: string,
  content: string
}> = ({ image, header, content }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image source={image} style={styles.imageStyle} />
      <View style={styles.wrapper}>
        <Text style={{ ...FONTS.h1, ...styles.header }}>{header}</Text>
        <Text style={{ ...FONTS.body3, color: COLORS.secondaryText }}>{content}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: '100%',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 10
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.white
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'flex-end',
    alignItems: 'center'

  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#0898A0',
    marginLeft: 10,
  },
});
export default AppIntroContainer;