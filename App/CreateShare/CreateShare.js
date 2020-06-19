//
//  CreateShare
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class CreateShare extends React.Component {

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
		
		navigate("CreatePreviewList")
	}

	render() {
	
		return <View
				style={styles.createShareView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 26,
						bottom: 43,
						alignItems: "flex-end",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 145,
						}}>
						<View
							style={styles.bgView}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 18,
								width: 222,
								top: 41,
								height: 52,
								alignItems: "flex-start",
							}}>
							<TouchableOpacity
								onPress={this.onResourcesNavBarBackPressed}
								style={styles.resourcesNavBarBackButton}>
								<Image
									source={require("./../../assets/images/resources-nav-bar-back.png")}
									style={styles.resourcesNavBarBackButtonImage}/>
							</TouchableOpacity>
							<Image
								source={require("./../../assets/images/group-3.png")}
								style={styles.groupImage}/>
						</View>
					</View>
					<View
						style={styles.lineView}/>
					<View
						style={styles.contactCardView}>
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
							<Image
								source={require("./../../assets/images/rectangle-5.png")}
								style={styles.rectangle5Image}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								alignSelf: "center",
								width: 220,
								top: 23,
								height: 279,
								alignItems: "center",
							}}>
							<Image
								source={require("./../../assets/images/adam.png")}
								style={styles.adamImage}/>
							<Text
								style={styles.biologyTermsShareText}>Biology Terms</Text>
							<Image
								source={require("./../../assets/images/shape.png")}
								style={styles.shapeImage}/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("./../../assets/images/share-alt-3.png")}
						style={styles.shareAlt3Image}/>
				</View>
				<Text
					style={styles.shareText}>Share</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	createShareView: {
		backgroundColor: "white",
		flex: 1,
	},
	bgView: {
		backgroundColor: "rgb(247, 247, 247)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 145,
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
	groupImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "center",
		width: 66,
		height: 8,
		marginTop: 23,
	},
	lineView: {
		backgroundColor: "rgb(102, 25, 87)",
		width: 88,
		height: 1,
		marginRight: 155,
		marginTop: 34,
	},
	contactCardView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 280,
		height: 356,
		marginTop: 41,
	},
	rectangle5Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 358,
	},
	adamImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 56,
		height: 56,
	},
	biologyTermsShareText: {
		backgroundColor: "transparent",
		color: "rgb(118, 118, 118)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 19,
		marginTop: 9,
	},
	shapeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 142,
		height: 142,
		marginTop: 15,
	},
	shareAlt3Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 17,
		height: 17,
		marginRight: 58,
	},
	shareText: {
		color: "rgb(103, 26, 87)",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 41,
		letterSpacing: 0.41,
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		top: 53,
	},
})
