import React from "react"
import { View, Text } from "react-native"
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MercadoPago from './screens/MercadoPago'
import SumUp from './screens/SumUp'
import SuperGet from './screens/SuperGet'

import { Icon } from "native-base";
import MPicon from "./TabNavStyles/MPicon";
import SUicon from "./TabNavStyles/SUicon"

class App extends React.Component {
	render() {
		return (
			<View>
				<Text>
					Oi!
				</Text>
			</View>
		)
	}
}


const TabNavigator = createBottomTabNavigator({
	"Mercado Pago": {
		screen: MercadoPago,
		navigationOptions: () => ({
			tabBarIcon: ({ tintColor }) => (
				<MPicon />
			)
		}
		)
	},
	"SumUp": {
		screen: SumUp,
		navigationOptions: () => ({
			tabBarIcon: ({ tintColor }) => (
				<SUicon />
			)
		})
	}
},
);

export default createAppContainer(TabNavigator);