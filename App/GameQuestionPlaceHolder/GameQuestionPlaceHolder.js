//
//  GameQuestionPlaceHolder
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class GameQuestionPlaceHolder extends React.Component {

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

	render() {
	
		return <View
				style={styles.gameQuestionplaceholderView}>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 146,
						marginRight: 1,
						marginTop: 26,
					}}>
					<View
						style={styles.bgView}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							width: 289,
							top: 31,
							height: 115,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.sign2wordText}>Sign2Word</Text>
						<Image
							source={require("./../../assets/images/group-3.png")}
							style={styles.groupImage}/>
						<Image
							source={require("./../../assets/images/line-3.png")}
							style={styles.lineImage}/>
					</View>
				</View>
				<View
					style={styles.group13View}/>
			</View>
	}
}

const styles = StyleSheet.create({
	gameQuestionplaceholderView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "flex-start",
	},
	bgView: {
		backgroundColor: "rgb(247, 247, 247)",
		position: "absolute",
		left: 9,
		right: 0,
		top: 0,
		height: 145,
	},
	sign2wordText: {
		color: "rgb(103, 26, 87)",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 41,
		letterSpacing: 0.41,
		backgroundColor: "transparent",
		marginLeft: 53,
	},
	groupImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 66,
		height: 8,
		marginLeft: 111,
		marginTop: 14,
	},
	lineImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 289,
		height: 3,
		marginTop: 50,
	},
	group13View: {
		backgroundColor: "transparent",
		borderRadius: 4,
		borderWidth: 2,
		borderColor: "rgb(206, 210, 217)",
		borderStyle: "solid",
		width: 371,
		height: 285,
		marginLeft: 20,
		marginTop: 54,
	},
})
