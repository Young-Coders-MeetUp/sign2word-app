//
//  NumbersSetAddTerms
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"


export default class NumbersSetAddTerms extends React.Component {

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
		
		navigate("MathsNumbersSet")
	}

	onSavePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("MathsNumbersSet")
	}

	render() {
	
		return <View
				style={styles.numberssetAddtermsView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: -18,
						bottom: 81,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 753,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 18,
								height: 433,
								alignItems: "flex-start",
							}}>
							<View
								style={styles.iphoneXBarsNavigationNavigationBarLargeTitle1ActionOnWhiteView}>
								<Text
									style={styles.newTermText}>New Term</Text>
							</View>
							<Image
								source={require("./../../assets/images/group-2-2.png")}
								style={styles.group2Image}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 14,
								right: 14,
								top: 0,
								height: 753,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.iERunningText}>i.e. Running</Text>
							<TouchableOpacity
								onPress={this.onResourcesNavBarBackPressed}
								style={styles.resourcesNavBarBackButton}>
								<Image
									source={require("./../../assets/images/resources-nav-bar-back.png")}
									style={styles.resourcesNavBarBackButtonImage}/>
							</TouchableOpacity>
							<Image
								source={require("./../../assets/images/line-5.png")}
								style={styles.lineImage}/>
							<View
								style={styles.group3View}>
								<Text
									style={styles.titleText}>Title*</Text>
								<TextInput
									autoCorrect={false}
									style={styles.groupTwoTextInput}/>
								<Text
									style={styles.descriptionText}>Description*</Text>
								<TextInput
									autoCorrect={false}
									style={styles.groupTextInput}/>
								<Text
									style={styles.addVideoText}>Add Video*</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.group13View}>
									<Text
										style={styles.clikHereToUploadCopyText}>Clik here to upload</Text>
								</View>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onSavePressed}
						style={styles.saveButton}>
						<Text
							style={styles.saveButtonText}>Save</Text>
					</TouchableOpacity>
				</View>
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
	numberssetAddtermsView: {
		backgroundColor: "white",
		flex: 1,
	},
	iphoneXBarsNavigationNavigationBarLargeTitle1ActionOnWhiteView: {
		backgroundColor: "white",
		alignSelf: "stretch",
		height: 230,
		alignItems: "center",
	},
	newTermText: {
		color: "black",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 41,
		letterSpacing: 0.41,
		backgroundColor: "transparent",
		marginTop: 118,
	},
	group2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 28,
		height: 2,
		marginLeft: 35,
		marginTop: 201,
	},
	iERunningText: {
		backgroundColor: "transparent",
		color: "rgb(96, 106, 123)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		marginLeft: 16,
	},
	resourcesNavBarBackButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	resourcesNavBarBackButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 12,
		height: 21,
		marginTop: 60,
	},
	resourcesNavBarBackButtonImage: {
		resizeMode: "contain",
	},
	lineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "center",
		width: 146,
		height: 3,
		marginTop: 95,
	},
	group3View: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 520,
		marginLeft: 4,
		marginTop: 29,
		alignItems: "flex-start",
	},
	titleText: {
		backgroundColor: "transparent",
		color: "rgb(51, 57, 66)",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		marginLeft: 7,
	},
	groupTwoTextInput: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "white",
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "rgb(149, 158, 172)",
		borderStyle: "solid",
		padding: 0,
		width: 327,
		height: 40,
		marginTop: 13,
	},
	descriptionText: {
		color: "rgb(51, 57, 66)",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		backgroundColor: "transparent",
		marginLeft: 8,
		marginTop: 35,
	},
	groupTextInput: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "white",
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "rgb(149, 158, 172)",
		borderStyle: "solid",
		padding: 0,
		alignSelf: "stretch",
		height: 123,
		marginTop: 13,
	},
	addVideoText: {
		color: "rgb(51, 57, 66)",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		backgroundColor: "transparent",
		marginLeft: 11,
		marginTop: 45,
	},
	group13View: {
		backgroundColor: "transparent",
		borderRadius: 4,
		borderWidth: 2,
		borderColor: "rgb(206, 210, 217)",
		borderStyle: "solid",
		alignSelf: "stretch",
		height: 166,
		marginLeft: 11,
		justifyContent: "center",
		alignItems: "center",
	},
	clikHereToUploadCopyText: {
		backgroundColor: "transparent",
		color: "rgb(96, 106, 123)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 21,
	},
	saveButton: {
		backgroundColor: "rgb(123, 30, 88)",
		borderRadius: 18.5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "center",
		width: 205,
		height: 37,
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
	fabViewLinearGradient: {
		borderRadius: 28,
		shadowColor: "rgba(138, 64, 115, 0.45)",
		shadowRadius: 24,
		shadowOpacity: 1,
		position: "absolute",
		alignSelf: "center",
		width: 56,
		top: 44,
		height: 56,
	},
	fabView: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	icons8PlusImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 25,
		marginLeft: 16,
		marginRight: 15,
	},
})
