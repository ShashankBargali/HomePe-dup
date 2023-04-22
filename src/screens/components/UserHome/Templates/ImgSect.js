import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'

const ImgSect = () => {
  return (
    <View>
        <Image style={[styles.imgStyles.img, {resizeMode: 'contain'}]} source={require('../../../../assets/Images/topImg2.jpg')} />
    </View>
  )
}

export default ImgSect