import React, { useEffect, useState } from 'react'
import { Spinner, View } from 'native-base'
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
    <View style={{ backgroundColor: 'white' }}>
      <Banner />
      {data.length ? <List data={data} /> : <Spinner size="lg" marginTop={100} />}
    </View>
  )
}