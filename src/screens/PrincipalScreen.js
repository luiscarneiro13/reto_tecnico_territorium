import React, { useEffect, useState } from 'react'
import { View } from 'native-base'
import { getProducts } from '../utils/Api'
import List from '../components/List'
import Banner from '../components/Banner'

export default function PrincipalScreen() {

  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const response = await getProducts()
        setData(response)
      } catch (error) {

      }
    })()
  }, [])


  return (
    <View>
      <Banner />
      <List data={data} />
    </View>
  )
}