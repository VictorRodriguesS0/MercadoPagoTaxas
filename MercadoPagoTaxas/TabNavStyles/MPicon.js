import React from "react"
import { View, Text, Image } from "react-native"


class MPicon extends React.Component {
    render() {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image source={require('../images/MercadoPago.png')} style={{
                    width: 20,
                    height: 20
                }}
                />
            </View>
        );
    }
}

export default MPicon;