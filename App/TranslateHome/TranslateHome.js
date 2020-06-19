//
//  TranslateHome
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class TranslateHome extends React.Component {

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

	onMorePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("TranslateMoreInfo")
	}

	render() {
	
		return <View
				style={styles.translateHomeView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 105,
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
							height: 74,
							alignItems: "center",
						}}>
						<Text
							style={styles.translateText}>Translate</Text>
						<Image
							source={require("../../assets/images/group-3.png")}
							style={styles.groupImage}/>
						<Image
							source={require("../../assets/images/line-3.png")}
							style={styles.lineImage}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						flex: 1,
						marginLeft: 2,
						marginTop: 9,
						marginBottom: 72,
					}}>
					<View
						style={styles.group13View}/>
					<View
						style={styles.hoverView}>
						<Text
							style={styles.saveText}>Save</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 36,
							right: 38,
							bottom: 23,
							height: 113,
							justifyContent: "flex-end",
						}}>
						<TouchableOpacity
							onPress={this.onMorePressed}
							style={styles.moreButton}>
							<Text
								style={styles.moreButtonText}>More…</Text>
						</TouchableOpacity>
						<Image
							source={require("../../assets/images/line-4.png")}
							style={styles.lineTwoImage}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 76,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Image
								source={require("../../assets/images/translate.png")}
								style={styles.translateImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.usingTheSignToWoText}>Using the sign to word feature you are able to sign into your built in camera to receive a written English translation</Text>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	translateHomeView: {
		backgroundColor: "white",
		flex: 1,
	},
	bgView: {
		backgroundColor: "rgb(247, 247, 247)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 104,
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 66,
		height: 8,
		marginTop: 13,
	},
	lineImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 289,
		height: 3,
		marginTop: 10,
	},
	group13View: {
		backgroundColor: "transparent",
		borderRadius: 4,
		borderWidth: 2,
		borderColor: "rgb(206, 210, 217)",
		borderStyle: "solid",
		position: "absolute",
		left: 18,
		width: 371,
		top: 0,
		height: 669,
	},
	hoverView: {
		backgroundColor: "rgba(255, 255, 255, 0.7)",
		opacity: 0.8,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 173,
		alignItems: "center",
	},
	saveText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.22,
		marginTop: 95,
	},
	moreButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-end",
		width: 54,
		height: 19,
		marginRight: 23,
		marginBottom: 8,
	},
	moreButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	moreButtonText: {
		color: "rgba(0, 0, 238, 0.75)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	lineTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 246,
		height: 3,
		marginBottom: 7,
	},
	translateImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 73,
		height: 65,
		marginBottom: 9,
	},
	usingTheSignToWoText: {
		color: "rgb(103, 26, 87)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		width: 256,
	},
})
