//
//  TranslateMoreInfo
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class TranslateMoreInfo extends React.Component {

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
		
		navigate("TranslateAddTo")
	}

	onSaveTwoPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("TranslateHome")
	}

	render() {
	
		return <View
				style={styles.translateMoreinfoView}>
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
							width: 293,
							top: 31,
							height: 115,
							alignItems: "center",
						}}>
						<Text
							style={styles.translateText}>Translate</Text>
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
				<Text
					style={styles.detectedWordText}>Detected Word:</Text>
				<View
					style={{
						flex: 1,
					}}/>
				<TouchableOpacity
					onPress={this.onSavePressed}
					style={styles.saveToLibraryButton}>
					<Text
						style={styles.saveToLibraryButtonText}>Save to Library</Text>
				</TouchableOpacity>
				<View
					pointerEvents="box-none"
					style={{
						width: 235,
						height: 37,
						marginBottom: 24,
					}}>
					<TouchableOpacity
						onPress={this.onSaveTwoPressed}
						style={styles.backButton}>
						<Text
							style={styles.backButtonText}>.</Text>
					</TouchableOpacity>
					<Text
						style={styles.backText}>Back</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	translateMoreinfoView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	bgView: {
		backgroundColor: "rgb(247, 247, 247)",
		position: "absolute",
		left: 9,
		right: 0,
		top: 0,
		height: 145,
	},
	translateText: {
		color: "rgb(103, 26, 87)",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 41,
		letterSpacing: 0.41,
		backgroundColor: "transparent",
	},
	groupImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 66,
		height: 8,
		marginTop: 13,
	},
	lineImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "flex-start",
		width: 289,
		height: 3,
		marginTop: 51,
	},
	group13View: {
		backgroundColor: "transparent",
		borderRadius: 4,
		borderWidth: 2,
		borderColor: "rgb(206, 210, 217)",
		borderStyle: "solid",
		alignSelf: "flex-start",
		width: 371,
		height: 263,
		marginLeft: 17,
		marginTop: 13,
	},
	detectedWordText: {
		color: "black",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 20,
		paddingTop: 1,
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 124,
		marginTop: 34,
	},
	saveToLibraryButton: {
		backgroundColor: "rgb(123, 30, 88)",
		borderRadius: 18.5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 235,
		height: 37,
		marginBottom: 35,
	},
	saveToLibraryButtonText: {
		color: "white",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	saveToLibraryButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	backButton: {
		backgroundColor: "rgb(123, 30, 88)",
		borderRadius: 18.5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		alignSelf: "center",
		width: 235,
		bottom: 0,
		height: 37,
	},
	backButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	backButtonText: {
		color: "white",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	backText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.22,
		position: "absolute",
		alignSelf: "center",
		bottom: 7,
	},
})
