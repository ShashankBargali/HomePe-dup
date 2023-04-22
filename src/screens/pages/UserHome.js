import { PanResponder, ScrollView } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TopSect from '../components/UserHome/Templates/TopSect'
import MiddleSect from '../components/UserHome/Templates/MiddleSect'
import BtmSect from '../components/UserHome/Templates/BtmSect'
import AppContext from '../../context/AppContext'
import LogOutSect from '../components/UserHome/Templates/LogOutSect'
import ImgSect from '../components/UserHome/Templates/ImgSect'
import HomeTopBar from '../components/UserHome/Templates/HomeTopBar'
import SideBar from '../components/SideBar/SideBar'


const UserHome = ({ navigation }) => {
  const context = useContext(AppContext);
  const [active, setActive] = useState(false)

  const pan = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, c) => {
      if(c.dx < 0){
        setActive(false)
      }
    }
    
  })

  useEffect(() => {
    checkLogged();
  }, [])


  const checkLogged = async () => {
    const token = await AsyncStorage.getItem('authToken')
    if (!token) {
      navigation.navigate('Login')
    }
    else {
      await context.setAuthToken(token)
      return;
    }
  }

  return (
    <ScrollView scrollEnabled={!active} style={{ backgroundColor: 'white' }} {...pan.panHandlers} >
      <SideBar active={active} setActive={setActive} />
      <HomeTopBar active={active} setActive={setActive} />
      <ImgSect />
      <TopSect />
      <MiddleSect />
      <BtmSect />
    </ScrollView>
  )
}

export default UserHome