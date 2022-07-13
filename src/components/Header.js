import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Icon, Image } from 'native-base'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

const Header = () => {

    const cart = useSelector(state => state.cart.cart)

    return (
        <View style={styles.container}>
            <Icon as={FontAwesome} name="bars" size={22} color='#FFF' />
            <View style={{ width: '40%' }}>
                <Image
                    resizeMode="contain"
                    source={require('../assets/logo_territorium_blanco.png')}
                    alt='Image'
                />
            </View>
            <Icon as={Ionicons} name="cart" size={30} color='#FFF' />
            {cart.length > 0 &&
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{cart.length}</Text>
                </View>
            }
        </View >
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 15,
        paddingTop: 20,
        zIndex: 99
    },
    fab: {
        position: 'absolute',
        backgroundColor: '#E8C724',
        width: 15,
        height: 15,
        borderRadius: 100,
        justifyContent: 'center',
        right: -5
    },
    fabText: {
        color: '#723896',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 10
    }
})
