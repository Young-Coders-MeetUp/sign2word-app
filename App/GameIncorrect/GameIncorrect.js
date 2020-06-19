//
//  GameIncorrect
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import ScreenHeader from "../../components/ScreenHeader"
import GameResponse from "../../components/GameResponse"


export default class GameIncorrect extends React.Component {

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
	
	}

	render() {
	
		return <View
			style={styles.gameIncorrectView}>
			<View
				pointerEvents="box-none"
				style={{
					height: 146,
					marginRight: 1,
					marginTop: 26,
				}}>
				<ScreenHeader
					title = "Sign2Word"
					subtitle = ""
					height = {150} />
				<Image
					source={require("./../../assets/images/line-3.png")}
					style={styles.lineImage}/>
			</View>
			<View
				style={styles.placeholder}/>
			<GameResponse ResponseText = " Added to tricky Terms"
				ResponseImage = {image.Incorrect} />
			<TouchableOpacity
				onPress={this.onButtonPressed}
				style={styles.saveButton}>
				<Text
					style={styles.saveButtonText}>Next</Text>
			</TouchableOpacity>
		</View>
	}
}

const image = {
	Incorrect: require("./../../assets/images/sad-face-red-329x319-329x319.png")
};

const styles = StyleSheet.create({
	gameIncorrectView: {
		backgroundColor: "white",
		flex: 1,
	},
	lineImage: {
		marginTop: -40,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	placeholder: {
		backgroundColor: "transparent",
		borderRadius: 4,
		borderWidth: 2,
		borderColor: "rgb(206, 210, 217)",
		borderStyle: "solid",
		alignSelf: "flex-start",
		width: 371,
		height: 263,
		marginLeft: 20,
		marginTop: 62,
	},
	
	saveButton: {
		backgroundColor: "rgb(123, 30, 88)",
		borderRadius: 18.5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-end",
		width: 212,
		height: 51,
		marginRight: 23,
		marginBottom: 23,
	},
	saveButtonText: {
		color: "white",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})