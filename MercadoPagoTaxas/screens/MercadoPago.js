import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Thumbnail, Icon, Footer, FooterTab, Header, ScrollableTab } from "native-base";
import { TextInput, DefaultTheme } from "react-native-paper";
import TextInputMask from "react-native-text-input-mask";
const lojinha = require("../images/lojinhaIcon.png")

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

export default class MercadoPago extends Component {
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
			<View>


				<ScrollView>
					<View style={styles.container}>
						<View style={styles.thumbView}>
							<Thumbnail source={lojinha} style={styles.thumb} />
						</View>

						<View
							style={{
								flexDirection: "row",
								alignContent: "center",
								justifyContent: "center"
							}}
						>
						<View>
							<Button
							style={styles.xButton}
								onPress={() => {
									captureScreen({
										format: "jpg",
										quality: 0.8
									})
										.then(
											uri => console.log("Image saved to", uri),
											error => console.error("Oops, snapshot failed", error)
										);
								}}
								title="capture"
								color="#841584"
								accessibilityLabel="Capture"
							></Button>


						</View>
							<TextInput
								theme={{
									dark: true,
									colors: {
										...DefaultTheme.colors,
										primary: "black",
										accent: "red"
									}
								}}
								label="Valor à Vista"
								onChangeText={text =>
									this.setState(
										{
											text
										},
										() => this._onPress()
									)
								}
								value={this.state.text}
								keyboardType="numeric"
								returnKeyType="done"
								onSubmitEditing={() => this._onPress()}
								mode="outlined"
								style={styles.input}
							/>
						</View>
						<View>
							<View style={styles.lista}>
								<Button rounded dark style={styles.xButton}>
									<Text style={styles.xButtonText}>1x</Text>
								</Button>
								<Text style={styles.texto}>
									R$ {(this.state.uma / 1).toFixed(2)}{" "}
								</Text>
								<Text style={styles.texto2}>R$ {this.state.uma}</Text>
							</View>
							<View style={styles.lista}>
								<Button rounded dark style={styles.xButton}>
									<Text style={styles.xButtonText}>2x</Text>
								</Button>
								<Text style={styles.texto}>
									R$ {(this.state.duas / 2).toFixed(2)}{" "}
								</Text>
								<Text style={styles.texto2}>R$ {this.state.duas}</Text>
							</View>
							<View style={styles.lista}>
								<Button rounded dark style={styles.xButton}>
									<Text style={styles.xButtonText}>3x</Text>
								</Button>
								<Text style={styles.texto}>
									R$ {(this.state.tres / 3).toFixed(2)}{" "}
								</Text>
								<Text style={styles.texto2}>R$ {this.state.tres}</Text>
							</View>
							<View style={styles.lista}>
								<Button rounded dark style={styles.xButton}>
									<Text style={styles.xButtonText}>4x</Text>
								</Button>
								<Text style={styles.texto}>
									R$ {(this.state.quatro / 4).toFixed(2)}
								</Text>
								<Text style={styles.texto2}>R$ {this.state.quatro}</Text>
							</View>
							<View style={styles.lista}>
								<Button rounded dark style={styles.xButton}>
									<Text style={styles.xButtonText}>5x</Text>
								</Button>
								<Text style={styles.texto}>
									R$ {(this.state.cinco / 5).toFixed(2)}{" "}
								</Text>
								<Text style={styles.texto2}>R$ {this.state.cinco}</Text>
							</View>
							<View style={styles.lista}>
								<Button rounded dark style={styles.xButton}>
									<Text style={styles.xButtonText}>6x</Text>
								</Button>
								<Text style={styles.texto}>
									R$ {(this.state.seis / 6).toFixed(2)}{" "}
								</Text>
								<Text style={styles.texto2}>R$ {this.state.seis}</Text>
							</View>
							<View style={styles.lista}>
								<Button rounded dark style={styles.xButton}>
									<Text style={styles.xButtonText}>7x</Text>
								</Button>
								<Text style={styles.texto}>
									R$ {(this.state.sete / 7).toFixed(2)}{" "}
								</Text>
								<Text style={styles.texto2}>R$ {this.state.sete}</Text>
							</View>
							<View style={styles.lista}>
								<Button rounded dark style={styles.xButton}>
									<Text style={styles.xButtonText}>8x</Text>
								</Button>
								<Text style={styles.texto}>
									R$ {(this.state.oito / 8).toFixed(2)}{" "}
								</Text>
								<Text style={styles.texto2}>R$ {this.state.oito}</Text>
							</View>
							<View style={styles.lista}>
								<Button rounded dark style={styles.xButton}>
									<Text style={styles.xButtonText}>9x</Text>
								</Button>
								<Text style={styles.texto}>
									R$ {(this.state.nove / 9).toFixed(2)}{" "}
								</Text>
								<Text style={styles.texto2}>R$ {this.state.nove}</Text>
							</View>
							<View style={styles.lista}>
								<Button rounded dark style={styles.xButton}>
									<Text style={styles.xButtonText}>10x</Text>
								</Button>
								<Text style={styles.texto}>
									R$ {(this.state.dez / 10).toFixed(2)}
								</Text>
								<Text style={styles.texto2}>R$ {this.state.dez}</Text>
							</View>
							<View style={styles.lista}>
								<Button rounded dark style={styles.xButton}>
									<Text style={styles.xButtonText}>11x</Text>
								</Button>
								<Text style={styles.texto}>
									R$ {(this.state.onze / 11).toFixed(2)}{" "}
								</Text>
								<Text style={styles.texto2}>R$ {this.state.onze}</Text>
							</View>
							<View style={styles.listaFinal}>
								<Button rounded dark style={styles.xButton}>
									<Text style={styles.xButtonText}>12x</Text>
								</Button>
								<Text style={styles.texto}>
									R$ {(this.state.doze / 12).toFixed(2)}{" "}
								</Text>
								<Text style={styles.texto2}>R$ {this.state.doze}</Text>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 5
	},
	thumbView: {
		position: "relative",
		alignItems: "center"
	},
	thumb: {
		alignSelf: "center",
		margin: 3,
		width: 140,
		height: 140
	},
	input: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
		width: 250
	},
	okButton: {
		textAlign: "center",
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
		width: 50,
		height: 50,
		margin: 10,
		marginTop: 20
	},
	texto: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
		marginLeft: 10
	},
	texto2: {
		flex: 1,
		textAlign: "right",
		alignSelf: "stretch",
		marginTop: 8,
		marginHorizontal: 20,
		fontWeight: "bold",
		fontSize: 20
	},
	lista: {
		height: 50,
		//alignItems: "center",
		//alignContent: "center",
		borderRadius: 20,
		borderLeftWidth: 2,
		borderTopWidth: 2,
		borderRightWidth: 2,
		flexDirection: "row"
	},
	listaFinal: {
		height: 50,
		//alignItems: "center",
		//alignContent: "center",
		borderRadius: 20,
		borderWidth: 2,
		flexDirection: "row"
	},
	xButton: {
		width: 35,
		height: 35,
		margin: 5,
		marginTop: 7,
		textAlignVertical: "center",
		alignItems: "center",
		justifyContent: "center"
	},
	xButtonText: {
		fontWeight: "bold",
		color: "white",
		shadowOffset: {
			width: 0,
			height: 0
		}
	}
});
