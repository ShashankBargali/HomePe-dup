import { ScrollView, Text } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import QrCodeSect from '../components/Passbook/Templates/QrCodeSect'
import styles from '../../assets/styles'
import StmtsSect from '../components/Passbook/Templates/StmtsSect'
import AppContext from '../../context/AppContext'
import ContLoader from '../components/General/ContLoader'

const Passbook = () => {
  const context = useContext(AppContext)
  const [trnxs, setTrnxs] = useState([null])
  const [fetched, setFetched] = useState(false)


  const getRecentTrnx = async () => {
    const data = await context.rcntTrnx();
    setTrnxs(data.response)
    setFetched(data.success)
    console.log(data)
  }
  useEffect(() => {
    getRecentTrnx();
  }, [])

  useEffect(() => {
    console.log(trnxs)
  }, [trnxs])

  return (
    <ScrollView style={[styles.ctrStyles.pyContainer, styles.ctrStyles.container, styles.ctrStyles.fullContainer]}>
      <QrCodeSect />
      {!fetched ? <ContLoader /> : <StmtsSect trnxs={trnxs} urlParser={context.urlParser} />}
    </ScrollView>
  )
}

export default Passbook