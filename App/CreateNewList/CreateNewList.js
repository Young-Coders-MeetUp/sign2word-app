//
//  CreateNewList
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"


export default class CreateNewList extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onSavePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("CreateAddTerm")
	}

	onCancelPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Home")
	}

	render() {
	
		return <View
				style={styles.createNewlistView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<View
						style={styles.hoverView}>
						<LinearGradient
							start={{
								x: 0.16,
								y: -0.08,
							}}
							end={{
								x: 0.82,
								y: 1.07,
							}}
							locations={[0, 1]}
							colors={["rgb(61, 16, 84)", "rgb(123, 30, 88)"]}
							style={styles.imageBookViewLinearGradient}>
							<View
								style={styles.imageBookView}>
								<View
									style={styles.rectangle4View}/>
							</View>
						</LinearGradient>
						<Image
							source={require("./../../assets/images/line-6.png")}
							style={styles.lineImage}/>
						<TouchableOpacity
							onPress={this.onSavePressed}
							style={styles.saveButton}>
							<Text
								style={styles.saveButtonText}>Save</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						right: 23,
						width: 367,
						top: 35,
						bottom: 13,
						alignItems: "center",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-end",
							width: 182,
							height: 22,
							marginRight: 15,
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.labelText}>New List</Text>
						<TouchableOpacity
							onPress={this.onCancelPressed}
							style={styles.cancelButton}>
							<Text
								style={styles.cancelButtonText}>cancel</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.choseColorView}>
						<Image
							source={require("./../../assets/images/colors.png")}
							style={styles.colorsImage}/>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	createNewlistView: {
		backgroundColor: "white",
		flex: 1,
	},
	hoverView: {
		backgroundColor: "rgba(255, 255, 255, 0.7)",
		height: 896,
		alignItems: "flex-end",
	},
	imageBookViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		width: 110,
		height: 146,
		marginRight: 149,
		marginTop: 93,
	},
	imageBookView: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "flex-end",
	},
	rectangle4View: {
		backgroundColor: "white",
		width: 7,
		height: 146,
		marginRight: 10,
	},
	lineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 3,
		height: 33,
		marginRight: 142,
		marginTop: 59,
	},
	saveButton: {
		backgroundColor: "rgb(123, 30, 88)",
		borderRadius: 18.5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "center",
		width: 117,
		height: 37,
		marginTop: 199,
	},
	saveButtonText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	saveButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	labelText: {
		color: "rgb(123, 30, 88)",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		marginRight: 62,
	},
	cancelButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 49,
		height: 20,
	},
	cancelButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	cancelButtonText: {
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	choseColorView: {
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "rgba(155, 155, 155, 0.14)",
		shadowRadius: 38,
		shadowOpacity: 1,
		width: 367,
		height: 242,
		justifyContent: "center",
		alignItems: "center",
	},
	colorsImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 237,
		height: 160,
	},
})
