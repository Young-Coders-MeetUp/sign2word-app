//
//  MyWordsMathsCourse
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"


export default class MyWordsMathsCourse extends React.Component {

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

	onResourcesNavBarBackPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("MyWordsCourses")
	}

	onBookPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("MathsNumbersSet")
	}

	render() {
	
		return <View
				style={styles.mywordsMathscourseView}>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 230,
					}}>
					<View
						style={styles.iphoneXBarsNavigationNavigationBarLargeTitle1ActionOnWhiteView}>
						<Text
							style={styles.labelText}>Edit</Text>
						<Text
							style={styles.mathsText}>Maths</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 14,
							right: 16,
							top: 67,
							height: 96,
							alignItems: "flex-end",
						}}>
						<TouchableOpacity
							onPress={this.onResourcesNavBarBackPressed}
							style={styles.resourcesNavBarBackButton}>
							<Image
								source={require("./../../assets/images/resources-nav-bar-back.png")}
								style={styles.resourcesNavBarBackButtonImage}/>
						</TouchableOpacity>
						<View
							style={styles.lineView}/>
					</View>
				</View>
				<View
					style={styles.group12View}>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							alignSelf: "stretch",
							marginLeft: 1,
							marginRight: 54,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								marginBottom: 11,
							}}>
							<TouchableOpacity
								onPress={this.onBookPressed}
								style={styles.bookButton}>
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
									style={styles.bookButtonLinearGradient}/>
							</TouchableOpacity>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 10,
									right: 0,
									top: 0,
									bottom: 0,
									flexDirection: "row",
									alignItems: "flex-end",
								}}>
								<View
									style={styles.rectangle5ThreeView}/>
								<View
									style={styles.rectangle5FourView}/>
								<View
									style={styles.rectangle5FiveView}/>
								<View
									style={styles.rectangle4TwoView}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.rectangle4View}/>
							</View>
						</View>
						<Text
							style={styles.numbersSetText}>Numbers Set</Text>
					</View>
					<View
						style={styles.rectangle5View}/>
					<View
						style={styles.rectangle5TwoView}/>
				</View>
				<Image
					source={require("./../../assets/images/group-2-2.png")}
					style={styles.group2Image}/>
				<View
					style={{
						flex: 1,
					}}/>
				<LinearGradient
					start={{
						x: 0.2,
						y: 0.22,
					}}
					end={{
						x: 0.81,
						y: 0.8,
					}}
					locations={[0, 1]}
					colors={["rgb(61, 15, 84)", "rgb(123, 30, 88)"]}
					style={styles.fabViewLinearGradient}>
					<View
						style={styles.fabView}>
						<Image
							source={require("./../../assets/images/icons8-plus.png")}
							style={styles.icons8PlusImage}/>
					</View>
				</LinearGradient>
			</View>
	}
}

const styles = StyleSheet.create({
	mywordsMathscourseView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "flex-start",
	},
	iphoneXBarsNavigationNavigationBarLargeTitle1ActionOnWhiteView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 230,
		alignItems: "flex-start",
	},
	labelText: {
		color: "rgb(123, 30, 88)",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 20,
		marginTop: 58,
	},
	mathsText: {
		color: "black",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 41,
		letterSpacing: 0.41,
		backgroundColor: "transparent",
		marginLeft: 19,
		marginTop: 26,
	},
	resourcesNavBarBackButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-start",
		width: 12,
		height: 21,
	},
	resourcesNavBarBackButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	resourcesNavBarBackButtonImage: {
		resizeMode: "contain",
	},
	lineView: {
		backgroundColor: "rgb(102, 25, 87)",
		borderWidth: 1,
		borderColor: "rgb(102, 25, 87)",
		borderStyle: "solid",
		width: 378,
		height: 1,
		marginTop: 74,
	},
	group12View: {
		backgroundColor: "transparent",
		width: 181,
		height: 165,
		marginLeft: 26,
		marginTop: 6,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	bookButton: {
		position: "absolute",
		left: 0,
		width: 104,
		top: 1,
		height: 135,
	},
	bookButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	bookButtonImage: {
		resizeMode: "contain",
	},
	bookButtonLinearGradient: {
		borderRadius: 2,
		borderWidth: 3,
		borderColor: "white",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: "100%",
		height: "100%",
	},
	rectangle5ThreeView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginBottom: 10,
	},
	rectangle5FourView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginLeft: 14,
		marginBottom: 10,
	},
	rectangle5FiveView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginLeft: 2,
		marginBottom: 10,
	},
	rectangle4TwoView: {
		backgroundColor: "white",
		alignSelf: "flex-start",
		width: 7,
		height: 135,
		marginLeft: 28,
	},
	rectangle4View: {
		backgroundColor: "white",
		alignSelf: "flex-start",
		width: 7,
		height: 135,
		marginTop: 1,
	},
	numbersSetText: {
		color: "rgb(74, 74, 74)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 8,
	},
	rectangle5View: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginRight: 2,
		marginBottom: 39,
	},
	rectangle5TwoView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 8,
		height: 2,
		marginBottom: 39,
	},
	group2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 28,
		height: 2,
		marginLeft: 35,
		marginTop: 30,
	},
	fabView: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	fabViewLinearGradient: {
		borderRadius: 28,
		shadowColor: "rgba(138, 64, 115, 0.45)",
		shadowRadius: 24,
		shadowOpacity: 1,
		alignSelf: "flex-end",
		width: 56,
		height: 56,
		marginRight: 16,
		marginBottom: 19,
	},
	icons8PlusImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 25,
		marginLeft: 16,
		marginRight: 15,
	},
})
