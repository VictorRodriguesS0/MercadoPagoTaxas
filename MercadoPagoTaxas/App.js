import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
	Container,
	Button,
	Input,
	Form,
	Item,
	Label,
	Icon,
	Thumbnail,
	Content,
	Card,
	CardItem
} from "native-base";

const tec = require("./images/tecStore.png");

const taxaCredito = 5.31 / 100;
const taxa2 = 4.09 / 100;
const taxa3 = 5.41 / 100;
const taxa4 = 6.7 / 100;
const taxa5 = 7.96 / 100;
const taxa6 = 9.2 / 100;
const taxa7 = 10.41 / 100;
const taxa8 = 11.61 / 100;
const taxa9 = 12.78 / 100;
const taxa10 = 13.92 / 100;
const taxa11 = 15.05 / 100;
const taxa12 = 16.15 / 100;

export default class App extends Component {
	state = {
		text: "",
		valor: 0.0,
		valorColocar: 0.0,
		uma: 0.0,
		duas: 0.0,
		tres: 0.0,
		quatro: 0.0,
		cinco: 0.0,
		seis: 0.0,
		sete: 0.0,
		oito: 0.0,
		nove: 0.0,
		dez: 0.0,
		onze: 0.0,
		doze: 0.0
	};

	_onPress() {
		let valor = parseFloat(this.state.text);

		let valorColocar = (valor * 105.61) / 100;

		let uma = this.state.uma;
		let duas = this.state.duas;
		let tres = this.state.tres;
		let quatro = this.state.quatro;
		let cinco = this.state.cinco;
		let seis = this.state.seis;
		let sete = this.state.sete;
		let oito = this.state.oito;
		let nove = this.state.nova;
		let dez = this.state.dez;
		let onze = this.state.onze;
		let doze = this.state.doze;

		uma = valorColocar.toFixed(2);
		duas = (valorColocar * taxa2 + valorColocar).toFixed(2);
		tres = (valorColocar * taxa3 + valorColocar).toFixed(2);
		quatro = (valorColocar * taxa4 + valorColocar).toFixed(2);
		cinco = (valorColocar * taxa5 + valorColocar).toFixed(2);
		seis = (valorColocar * taxa6 + valorColocar).toFixed(2);
		sete = (valorColocar * taxa7 + valorColocar).toFixed(2);
		oito = (valorColocar * taxa8 + valorColocar).toFixed(2);
		nove = (valorColocar * taxa9 + valorColocar).toFixed(2);
		dez = (valorColocar * taxa10 + valorColocar).toFixed(2);
		onze = (valorColocar * taxa11 + valorColocar).toFixed(2);
		doze = (valorColocar * taxa12 + valorColocar).toFixed(2);

		this.setState({
			valor: valor,
			valorColocar: valorColocar,
			uma: uma,
			duas: duas,
			tres: tres,
			quatro: quatro,
			cinco: cinco,
			seis: seis,
			sete: sete,
			oito: oito,
			nove: nove,
			dez: dez,
			onze: onze,
			doze: doze
		});
	}

	render() {
		return (
			<KeyboardAwareScrollView>
				<Container>
					<Content>
						<Thumbnail
							source={tec}
							style={{
								alignSelf: "center",
								margin: 10,
								width: 100,
								height: 100
							}}
						/>
					</Content>

					<Content>
						<Form>
							<Item floatingLabel>
								<Label> Valor do produto a vista</Label>
								<Input
									onChangeText={text => this.setState({ text })}
									value={this.state.text}
									keyboardType="numeric"
								/>
							</Item>
						</Form>

						<Button
							style={styles.okButton}
							rounded
							success
							onPress={() => this._onPress()}
						>
							<Icon name="checkmark" />
						</Button>
					</Content>
					<Content>
						<Card>
							<CardItem>
								<Text>
									Valor a colocar na maquina:{" "}
									{this.state.valorColocar.toFixed(2)}
								</Text>
							</CardItem>
							<CardItem>
								<Text>
									1x {this.state.uma} - {this.state.uma}
								</Text>
							</CardItem>
							<CardItem>
								<Text>
									2x: {(this.state.duas / 2).toFixed(2)} - Total:{" "}
									{this.state.duas}
								</Text>
							</CardItem>
							<CardItem>
								<Text>
									3x {(this.state.tres / 3).toFixed(2)} - {this.state.tres}
								</Text>
							</CardItem>
							<CardItem>
								<Text>
									4x {(this.state.quatro / 4).toFixed(2)} - {this.state.quatro}
								</Text>
							</CardItem>
							<CardItem>
								<Text>
									5x {(this.state.cinco / 5).toFixed(2)} - {this.state.cinco}
								</Text>
							</CardItem>
							<CardItem>
								<Text>
									6x {(this.state.seis / 6).toFixed(2)} - {this.state.seis}
								</Text>
							</CardItem>
							<CardItem>
								<Text>
									7x {(this.state.sete / 7).toFixed(2)} - {this.state.sete}
								</Text>
							</CardItem>
							<CardItem>
								<Text>
									8x {(this.state.oito / 8).toFixed(2)} - {this.state.oito}
								</Text>
							</CardItem>
							<CardItem>
								<Text>
									9x {(this.state.nove / 9).toFixed(2)} - {this.state.nove}
								</Text>
							</CardItem>
							<CardItem>
								<Text>
									10x {(this.state.dez / 10).toFixed(2)} - {this.state.dez}
								</Text>
							</CardItem>
							<CardItem>
								<Text>
									11x {(this.state.onze / 11).toFixed(2)} - {this.state.onze}
								</Text>
							</CardItem>
							<CardItem>
								<Text>
									12x {(this.state.doze / 12).toFixed(2)} - {this.state.doze}
								</Text>
							</CardItem>
						</Card>
					</Content>
				</Container>
			</KeyboardAwareScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: "center",
		alignItems: "center"
		//backgroundColor: "#F5FCFF"
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	okButton: {
		textAlign: "center",
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center"
	},
	texto: {
		alignContent: "space-between"
	}
});
