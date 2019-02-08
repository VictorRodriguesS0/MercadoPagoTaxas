import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Thumbnail, Icon, Footer, FooterTab, Header, ScrollableTab } from "native-base";
import { TextInput, DefaultTheme } from "react-native-paper";
import TextInputMask from "react-native-text-input-mask";
const lojinha = require("../images/lojinhaIcon.png")

const taxa2 = 6.5 / 100;
const taxa3 = 8.23 / 100;
const taxa4 = 10.01 / 100;
const taxa5 = 11.86 / 100;
const taxa6 = 13.77 / 100;
const taxa7 = 15.74 / 100;
const taxa8 = 17.79 / 100;
const taxa9 = 19.91 / 100;
const taxa10 = 22.1 / 100;
const taxa11 = 24.38 / 100;
const taxa12 = 26.74 / 100;

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

        let valorColocar = (valor * 104.82) / 100;

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
		duas = (valor * taxa2 + valor).toFixed(2);
		tres = (valor * taxa3 + valor).toFixed(2);
		quatro = (valor * taxa4 + valor).toFixed(2);
		cinco = (valor * taxa5 + valor).toFixed(2);
		seis = (valor * taxa6 + valor).toFixed(2);
		sete = (valor * taxa7 + valor).toFixed(2);
		oito = (valor * taxa8 + valor).toFixed(2);
		nove = (valor * taxa9 + valor).toFixed(2);
		dez = (valor * taxa10 + valor).toFixed(2);
		onze = (valor * taxa11 + valor).toFixed(2);
		doze = (valor * taxa12 + valor).toFixed(2);

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
