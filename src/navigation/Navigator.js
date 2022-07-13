import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import PrincipalScreen from '../screens/PrincipalScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'

const Stack = createStackNavigator();

export default function Navigator() {

    const colors = ['#25568D', '#833197']

    const GradientHeader = () => (
        <View style={{ backgroundColor: '#eee' }}>
            <LinearGradient
                colors={colors}
                style={{ height: 80 }}
                start={[0, 1]} end={[1, 0]}
            >
                <Header />
            </LinearGradient>
        </View>
    )

    return (
        <Stack.Navigator screenOptions={{
            header: props => <GradientHeader {...props} />,
            headerStyle: styles.headerStyle,
            cardStyle:{backgroundColor:'white'}
        }}>
            <Stack.Screen name="Principal" component={PrincipalScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
})