import React from "react"
import { View, Text, Image } from "react-native"


class SUicon extends React.Component {
    render() {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image source={require('../images/SumUp.png')} style={{
                    width: 20,
                    height: 20
                }}
                />
            </View>
        );
    }
}

export default SUicon;