import { View, StyleSheet } from 'react-native'
import React from 'react'
import { AspectRatio, Image, Text } from 'native-base'

export default function Banner() {

    const item = {
        thumbnail: 'https://dummyjson.com/image/i/products/7/thumbnail.jpg',
        new: 'Nuevo Curso',
        description1: 'TÉCNICAS DE ILUSTRACIÓN',
        description2: 'PARA LIBROS INFANTILES',
        action:'ver más'
    }

    return (
        <View>
            <AspectRatio w="100%" ratio={4 / 2}>
                <Image source={{ uri: item.thumbnail }} alt="image" />
            </AspectRatio>
            <View style={styles.containerText}>
                <Text fontFamily='body' style={styles.new}>{item.new}</Text>
                <Text fontFamily='body' fontWeight='600' style={styles.description}>{item.description1}</Text>
                <Text fontFamily='body' fontWeight='600' style={styles.description}>{item.description2}</Text>
                <Text fontFamily='body' style={styles.action}>{item.action}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerText: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingLeft: 36,
        paddingTop: 50
    },
    new: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 14
    },
    description: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 20,
        marginTop:10
    },
    action: {
        textTransform: 'capitalize',
        color: 'white',
        fontSize: 14,
        marginTop:10
    },
})