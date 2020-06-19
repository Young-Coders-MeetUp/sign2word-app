//
//  CreateAddTerm
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"


export default class CreateAddTerm extends React.Component {

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
		
		navigate("CreateNewList")
	}

	onSavePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("CreatePreviewList")
	}

	render() {
	
		return <View
				style={styles.createAddtermView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 40,
						alignItems: "flex-end",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 736,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								height: 433,
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
								top: 67,
								height: 669,
							}}>
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
					<View
						style={styles.saveView}>
						<Text
							style={styles.addMoreTermsText}>Add More Terms</Text>
					</View>
					<TouchableOpacity
						onPress={this.onSavePressed}
						style={styles.doneButton}>
						<Text
							style={styles.doneButtonText}>Done</Text>
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
	createAddtermView: {
		backgroundColor: "white",
		flex: 1,
	},
	iphoneXBarsNavigationNavigationBarLargeTitle1ActionOnWhiteView: {
		backgroundColor: "white",
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
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-start",
		width: 28,
		height: 2,
		marginLeft: 35,
		marginTop: 201,
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
		height: 522,
		marginLeft: 4,
		marginTop: 28,
		alignItems: "flex-start",
	},
	titleText: {
		color: "rgb(51, 57, 66)",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		backgroundColor: "transparent",
		marginLeft: 7,
	},
	groupTwoTextInput: {
		backgroundColor: "white",
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "rgb(149, 158, 172)",
		borderStyle: "solid",
		padding: 0,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 327,
		height: 41,
		marginTop: 13,
	},
	descriptionText: {
		backgroundColor: "transparent",
		color: "rgb(51, 57, 66)",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		marginLeft: 8,
		marginTop: 34,
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
		height: 124,
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
		height: 167,
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
	saveView: {
		backgroundColor: "rgb(123, 30, 88)",
		borderRadius: 18.5,
		width: 205,
		height: 37,
		marginRight: 102,
		marginBottom: 18,
		justifyContent: "center",
		alignItems: "center",
	},
	addMoreTermsText: {
		color: "white",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.22,
		backgroundColor: "transparent",
	},
	doneButton: {
		backgroundColor: "rgb(123, 30, 88)",
		borderRadius: 18.5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 205,
		height: 37,
		marginRight: 102,
	},
	doneButtonText: {
		color: "white",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	doneButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
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
		position: "absolute",
		alignSelf: "center",
		width: 56,
		top: 44,
		height: 56,
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
