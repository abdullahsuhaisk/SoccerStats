import React, { useEffect } from 'react'
import { Image } from 'react-native'
import { images } from '../constants';

interface TeamsImageProps {
  styles?: any
  imageName: any
}

const TeamsImage: React.FC<TeamsImageProps> = ({ imageName, styles }) => {
  function imageNameSimplication(imageName: string): string {
    let simplicatiazedImageName = imageName.trim()
    // .(dot) is exist ? and . and space together exist
    let startPosition = simplicatiazedImageName.indexOf('.') > simplicatiazedImageName.indexOf(' ') ? simplicatiazedImageName.indexOf('.') : simplicatiazedImageName.indexOf(' ')
    // if (startPosition < 0) {
    //   // ' ' (space) is exist ?
    //   startPosition = simplicatiazedImageName.indexOf(' ')
    // }
    // Does need reShape ?
    if (startPosition > 0) {
      const endPosition = simplicatiazedImageName.length
      console.log(simplicatiazedImageName)
      if (startPosition + 1 < simplicatiazedImageName.length / 2) {
        // If space or dot in leading Example: BB Erzurum && Y.Malatyaspor
        simplicatiazedImageName = simplicatiazedImageName.slice(startPosition + 1, endPosition)
        // console.log(simplicatiazedImageName)
        return simplicatiazedImageName;
      } else {
        // If Space in the end example Gaziantep FK
        // console.log(simplicatiazedImageName)
        simplicatiazedImageName = simplicatiazedImageName.slice(0, startPosition)
        // console.log(simplicatiazedImageName)
        return simplicatiazedImageName
      }
    }
    else {
      return simplicatiazedImageName
    }
  }

  return (
    <Image source={images[imageNameSimplication(imageName)]} style={{ width: 20, height: 20, ...styles }} />
  );
}

export default TeamsImage