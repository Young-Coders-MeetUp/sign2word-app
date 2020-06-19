//
//  GameOverview
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class GameOverview extends React.Component {

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
				style={styles.gameOverviewView}>
				<View
					pointerEvents="box-none"
					style={{
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
							right: 110,
							top: 27,
							height: 119,
							alignItems: "flex-end",
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
					style={styles.cancelButtonView}>
					<View
						style={styles.closeBackgroundView}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 468,
						marginLeft: 12,
						marginRight: 16,
						marginTop: 26,
					}}>
					<Image
						source={require("./../../assets/images/group-2.png")}
						style={styles.group2Image}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 13,
							top: 0,
							height: 468,
						}}>
						<Image
							source={require("./../../assets/images/line-2.png")}
							style={styles.line2Image}/>
						<Image
							source={require("./../../assets/images/line-2-2.png")}
							style={styles.line2TwoImage}/>
						<View
							style={styles.group3View}>
							<Text
								style={styles.textText}> </Text>
							<Image
								source={require("./../../assets/images/image-2.png")}
								style={styles.image2Image}/>
						</View>
					</View>
					<Text
						style={styles.addedToTrickyTerText}>Added to ‘Tricky terms’</Text>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.saveView}>
					<Text
						style={styles.doneText}>Done</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	gameOverviewView: {
		backgroundColor: "white",
		flex: 1,
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
		backgroundColor: "transparent",
		color: "rgb(103, 26, 87)",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 41,
		letterSpacing: 0.41,
	},
	groupImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 66,
		height: 8,
		marginRight: 59,
		marginTop: 16,
	},
	lineImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "flex-start",
		width: 289,
		height: 3,
		marginTop: 52,
	},
	cancelButtonView: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.5)",
		shadowRadius: 4,
		shadowOpacity: 1,
		height: 66,
		marginRight: 1,
		marginTop: 11,
	},
	closeBackgroundView: {
		backgroundColor: "white",
		borderRadius: 12,
		height: 57,
		marginLeft: 15,
		marginRight: 15,
	},
	group2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 49,
		width: 78,
		top: 27,
		height: 78,
	},
	line2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 167,
		width: 3,
		top: 33,
		height: 435,
	},
	line2TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		right: 0,
		width: 350,
		top: 123,
		height: 3,
	},
	group3View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 205,
		top: 0,
		height: 149,
	},
	textText: {
		color: "black",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		bottom: 0,
	},
	image2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 2,
		right: 0,
		top: 0,
		height: 141,
	},
	addedToTrickyTerText: {
		backgroundColor: "transparent",
		color: "rgb(103, 26, 87)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.27,
		position: "absolute",
		right: 0,
		top: 370,
	},
	saveView: {
		backgroundColor: "rgb(123, 30, 88)",
		borderRadius: 18.5,
		alignSelf: "flex-end",
		width: 212,
		height: 51,
		marginRight: 23,
		marginBottom: 17,
		justifyContent: "center",
		alignItems: "center",
	},
	doneText: {
		color: "white",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.25,
		backgroundColor: "transparent",
	},
})
