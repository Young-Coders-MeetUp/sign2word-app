//
//  CreatePreviewList
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class CreatePreviewList extends React.Component {

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
		
		navigate("CreateAddTerm")
	}

	onSavePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Home")
	}

	onSaveTwoPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("CreateShare")
	}

	render() {
	
		return <View
				style={styles.createPreviewlistView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 231,
					}}>
					<View
						style={styles.iphoneXBarsNavigationNavigationBarLargeTitle1ActionOnWhiteView}>
						<View
							style={styles.groupView}>
							<TouchableOpacity
								onPress={this.onResourcesNavBarBackPressed}
								style={styles.resourcesNavBarBackButton}>
								<Image
									source={require("./../../assets/images/resources-nav-bar-back.png")}
									style={styles.resourcesNavBarBackButtonImage}/>
							</TouchableOpacity>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.labelText}>Edit</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 18,
							right: 16,
							top: 107,
							height: 55,
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.previewListText}>Preview List</Text>
						<View
							style={styles.lineView}/>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					pointerEvents="box-none"
					style={{
						height: 28,
						marginLeft: 36,
						marginRight: 38,
						marginBottom: 37,
						flexDirection: "row",
						alignItems: "flex-end",
					}}>
					<TouchableOpacity
						onPress={this.onSavePressed}
						style={styles.saveButton}>
						<Text
							style={styles.saveButtonText}>Save</Text>
					</TouchableOpacity>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							width: 155,
							height: 28,
						}}>
						<TouchableOpacity
							onPress={this.onSaveTwoPressed}
							style={styles.shareButton}>
							<Text
								style={styles.shareButtonText}>Share</Text>
						</TouchableOpacity>
						<Image
							source={require("./../../assets/images/share-alt-3.png")}
							style={styles.shareAlt3Image}/>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	createPreviewlistView: {
		backgroundColor: "white",
		flex: 1,
	},
	iphoneXBarsNavigationNavigationBarLargeTitle1ActionOnWhiteView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 231,
	},
	groupView: {
		backgroundColor: "transparent",
		height: 42,
		marginLeft: 17,
		marginRight: 18,
		marginTop: 56,
		flexDirection: "row",
		alignItems: "center",
	},
	resourcesNavBarBackButtonImage: {
		resizeMode: "contain",
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
		marginLeft: 1,
		marginTop: 5,
	},
	resourcesNavBarBackButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	labelText: {
		backgroundColor: "transparent",
		color: "rgb(123, 30, 88)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		marginRight: 2,
	},
	previewListText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 41,
		letterSpacing: 0.41,
		alignSelf: "flex-start",
	},
	lineView: {
		backgroundColor: "rgb(102, 25, 87)",
		borderWidth: 1,
		borderColor: "rgb(102, 25, 87)",
		borderStyle: "solid",
		width: 378,
		height: 1,
		marginTop: 13,
	},
	saveButton: {
		backgroundColor: "rgb(123, 30, 88)",
		borderRadius: 14,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 155,
		height: 28,
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
	shareButton: {
		backgroundColor: "rgb(123, 30, 88)",
		borderRadius: 14,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		right: 0,
		width: 155,
		bottom: 0,
		height: 28,
	},
	shareButtonText: {
		color: "white",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	shareButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	shareAlt3Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 20,
		width: 17,
		bottom: 6,
		height: 17,
	},
})
