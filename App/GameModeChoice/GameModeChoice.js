//
//  GameModeChoice
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"


export default class GameModeChoice extends React.Component {

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

	onCancelButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("GameQuestionPlaceHolder")
	}

	render() {
	
		return <View
				style={styles.gameModechoiceView}>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 188,
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
							right: 54,
							top: 37,
							height: 151,
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/group-4.png")}
							style={styles.groupImage}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 174,
								height: 129,
								marginLeft: 32,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.playText}>Play!</Text>
							<Image
								source={require("./../../assets/images/group-3.png")}
								style={styles.groupTwoImage}/>
							<Text
								style={styles.testYourKnowledgeText}>Test your knowledge with these fun games!</Text>
						</View>
						<Image
							source={require("./../../assets/images/line-3.png")}
							style={styles.lineImage}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 176,
						marginLeft: 159,
						marginRight: 153,
						marginTop: 34,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							height: 176,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 5,
								right: 10,
								top: 41,
								height: 135,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.rectangle5View}/>
							<View
								style={styles.rectangle5TwoView}/>
							<View
								style={styles.rectangle5ThreeView}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.rectangle4View}/>
						</View>
						<LinearGradient
							start={{
								x: 0.5,
								y: 0,
							}}
							end={{
								x: 0.5,
								y: 1,
							}}
							locations={[0, 1]}
							colors={["rgb(250, 217, 97)", "rgb(247, 107, 28)"]}
							style={styles.bookViewLinearGradient}>
							<View
								style={styles.bookView}/>
						</LinearGradient>
						<View
							style={styles.rectangle4TwoView}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 10,
							right: 30,
							top: 157,
							height: 18,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.rectangle5FourView}/>
						<View
							style={styles.rectangle5FiveView}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								height: 18,
								marginLeft: 2,
							}}>
							<View
								style={styles.rectangle5SixView}/>
							<Text
								style={styles.mathsText}>Maths</Text>
						</View>
					</View>
				</View>
				<Image
					source={require("./../../assets/images/line.png")}
					style={styles.lineTwoImage}/>
				<TouchableOpacity
					onPress={this.onSavePressed}
					style={styles.sign2wordButton}>
					<Text
						style={styles.sign2wordButtonText}>Sign2Word</Text>
				</TouchableOpacity>
				<LinearGradient
					start={{
						x: 0.5,
						y: 0,
					}}
					end={{
						x: 0.5,
						y: 1,
					}}
					locations={[0, 1]}
					colors={["rgb(250, 217, 97)", "rgb(247, 107, 28)"]}
					style={styles.oval5ViewLinearGradient}>
					<View
						style={styles.oval5View}/>
				</LinearGradient>
				<View
					style={styles.saveView}>
					<Text
						style={styles.word2signText}>Word2Sign</Text>
				</View>
				<LinearGradient
					start={{
						x: 0.5,
						y: 0,
					}}
					end={{
						x: 0.5,
						y: 1,
					}}
					locations={[0, 1]}
					colors={["rgb(250, 217, 97)", "rgb(247, 107, 28)"]}
					style={styles.oval5TwoViewLinearGradient}>
					<View
						style={styles.oval5TwoView}/>
				</LinearGradient>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.saveTwoView}>
					<Text
						style={styles.mixedText}>Mixed</Text>
				</View>
				<LinearGradient
					start={{
						x: 0.5,
						y: 0,
					}}
					end={{
						x: 0.5,
						y: 1,
					}}
					locations={[0, 1]}
					colors={["rgb(250, 217, 97)", "rgb(247, 107, 28)"]}
					style={styles.oval5ThreeViewLinearGradient}>
					<View
						style={styles.oval5ThreeView}/>
				</LinearGradient>
				<TouchableOpacity
					onPress={this.onCancelButtonPressed}
					style={styles.cancelButtonButton}>
					<Text
						style={styles.cancelButtonButtonText}>Start</Text>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	gameModechoiceView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "flex-end",
	},
	bgView: {
		backgroundColor: "rgb(247, 247, 247)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 187,
	},
	groupImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 135,
		height: 110,
	},
	playText: {
		backgroundColor: "transparent",
		color: "rgb(103, 26, 87)",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 41,
		letterSpacing: 0.41,
	},
	groupTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 66,
		height: 8,
		marginLeft: 7,
		marginTop: 22,
	},
	testYourKnowledgeText: {
		color: "rgb(103, 26, 87)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		width: 169,
		marginLeft: 5,
		marginTop: 20,
	},
	lineImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 289,
		height: 3,
		marginTop: 18,
	},
	rectangle5View: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginTop: 93,
	},
	rectangle5TwoView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginLeft: 2,
		marginTop: 93,
	},
	rectangle5ThreeView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginLeft: 2,
		marginTop: 93,
	},
	rectangle4View: {
		backgroundColor: "white",
		width: 7,
		height: 135,
	},
	bookView: {
		width: "100%",
		height: "100%",
	},
	bookViewLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		right: 0,
		width: 102,
		top: 0,
		height: 135,
	},
	rectangle4TwoView: {
		backgroundColor: "white",
		position: "absolute",
		right: 13,
		width: 7,
		top: 0,
		height: 135,
	},
	rectangle5FourView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginTop: 4,
	},
	rectangle5FiveView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginLeft: 2,
		marginTop: 4,
	},
	rectangle5SixView: {
		backgroundColor: "white",
		borderRadius: 1,
		position: "absolute",
		left: 0,
		width: 8,
		top: 4,
		height: 2,
	},
	mathsText: {
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		top: 0,
	},
	lineTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 95,
		height: 3,
		marginRight: 157,
		marginTop: 17,
	},
	sign2wordButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	sign2wordButton: {
		backgroundColor: "rgb(123, 30, 88)",
		borderRadius: 18.5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 212,
		height: 51,
		marginRight: 98,
		marginTop: 37,
	},
	sign2wordButtonText: {
		color: "white",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	oval5View: {
		width: "100%",
		height: "100%",
	},
	oval5ViewLinearGradient: {
		borderRadius: 4,
		width: 8,
		height: 8,
		marginRight: 195,
		marginTop: 15,
	},
	saveView: {
		backgroundColor: "rgb(123, 30, 88)",
		borderRadius: 18.5,
		width: 212,
		height: 51,
		marginRight: 97,
		marginTop: 21,
		justifyContent: "center",
		alignItems: "center",
	},
	word2signText: {
		color: "white",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.22,
		backgroundColor: "transparent",
	},
	oval5TwoView: {
		width: "100%",
		height: "100%",
	},
	oval5TwoViewLinearGradient: {
		borderRadius: 4,
		width: 8,
		height: 8,
		marginRight: 194,
		marginTop: 18,
	},
	saveTwoView: {
		backgroundColor: "rgb(123, 30, 88)",
		borderRadius: 18.5,
		width: 212,
		height: 51,
		marginRight: 97,
		marginBottom: 26,
		justifyContent: "center",
		alignItems: "center",
	},
	mixedText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.22,
	},
	oval5ThreeView: {
		width: "100%",
		height: "100%",
	},
	oval5ThreeViewLinearGradient: {
		borderRadius: 4,
		width: 8,
		height: 8,
		marginRight: 194,
		marginBottom: 41,
	},
	cancelButtonButton: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.5)",
		shadowRadius: 4,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "stretch",
		height: 66,
		marginRight: 2,
		marginBottom: 35,
	},
	cancelButtonButtonText: {
		color: "rgb(0, 118, 255)",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	cancelButtonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
})
