//
//  NumbersSetIndividualSigns
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class NumbersSetIndividualSigns extends React.Component {

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

	render() {
	
		return <View
				style={styles.numberssetIndividualsignsView}>
				<View
					style={styles.iphoneXBarsNavigationNavigationBarLargeTitle1ActionOnWhiteView}>
					<TouchableOpacity
						onPress={this.onResourcesNavBarBackPressed}
						style={styles.resourcesNavBarBackButton}>
						<Image
							source={require("./../../assets/images/resources-nav-bar-back.png")}
							style={styles.resourcesNavBarBackButtonImage}/>
					</TouchableOpacity>
				</View>
				<View
					style={styles.lineView}/>
			</View>
	}
}

const styles = StyleSheet.create({
	numberssetIndividualsignsView: {
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
		alignItems: "flex-start",
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
		marginLeft: 18,
		marginTop: 61,
	},
	resourcesNavBarBackButtonImage: {
		resizeMode: "contain",
	},
	lineView: {
		backgroundColor: "rgb(102, 25, 87)",
		borderWidth: 1,
		borderColor: "rgb(102, 25, 87)",
		borderStyle: "solid",
		position: "absolute",
		right: 16,
		width: 378,
		top: 161,
		height: 1,
	},
})
