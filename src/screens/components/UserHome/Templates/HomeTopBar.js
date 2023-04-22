import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../../../assets/styles'

const HomeTopBar = (props) => {
  const { active, setActive } = props
  return (
    <View style={styles.topBar.container}>
      {active ?
        <TouchableOpacity style={styles.topBar.burger} onPress={() => { setActive(false) }}>
          <View style={[styles.topBar.burg, styles.topBar.activeBurg1]}></View>
          <View style={[styles.topBar.burg, styles.topBar.activeBurg2]}></View>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.topBar.burger} onPress={() => { setActive(true) }}>
          <View style={styles.topBar.burg}></View>
          <View style={styles.topBar.burg}></View>
          <View style={styles.topBar.burg}></View>
        </TouchableOpacity>
      }
      <Text style={[styles.txtStyles.mainHead, styles.txtStyles.whiteTxt, styles.txtStyles.fontUbuntu]}>HomePe</Text>

    </View>
  )
}

export default HomeTopBar