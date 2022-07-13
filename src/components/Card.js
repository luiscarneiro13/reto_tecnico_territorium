import React, { useRef } from "react";
import { AspectRatio, Box, Text, Image, Stack } from "native-base";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addCart, deleteCart } from '../redux/slices/cartSlice'

const Card = ({ item }) => {

    const cart = useSelector(state => state.cart.cart)
    const agregated = cart.map(data => data.id).some(data => data === item.id)
    const dispatch = useDispatch()
    const ref = useRef()

    const handleAdd = () => {
        dispatch(addCart(item))
    }

    const handleDelete = () => {
        dispatch(deleteCart(item.id))
    }

    return (
        <Box ref={ref} alignItems="center">
            <Box margin={5} rounded="lg" borderRadius={15} overflow="hidden" borderColor="coolGray.300" borderWidth="1">
                <AspectRatio w="100%" ratio={4 / 2}>
                    <Image source={{ uri: item.thumbnail }} alt="image" />
                </AspectRatio>
                <Stack padding={5}>
                    <Text fontFamily='body' style={styles.category} >{item.category}</Text>
                    <Text fontFamily='body' fontWeight={600} style={styles.title}>{item.title}</Text>
                    <Text fontFamily='body' style={styles.description}>"{item.description}"</Text>
                    <View style={styles.rowPrice}>
                        {agregated
                            ?
                            <TouchableOpacity onPress={handleDelete}>
                                <Text fontFamily='body' style={styles.added}>Added to cart</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={handleAdd}>
                                <Text fontFamily='body' style={styles.addCart}>+ Add to cart</Text>
                            </TouchableOpacity>
                        }
                        <Text fontFamily='body' fontWeight={600} style={styles.price}>${item.price}</Text>
                    </View>
                </Stack>
            </Box>
        </Box >
    )
}

export default Card

const styles = StyleSheet.create({
    category: {
        color: '#507ED8',
        fontSize: 10,
        textTransform: 'uppercase',
    },
    title: {
        color: '#373E4A',
        fontSize: 16,
    },
    description: {
        color: '#737C8B',
        fontSize: 12,
    },
    rowPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5
    },
    addCart: {
        color: '#507ED8',
        fontSize: 14,
    },
    added: {
        color: '#32B963',
        fontSize: 14,
    },
    price: {
        color: '#373E4A',
        fontSize: 18,
    },
})