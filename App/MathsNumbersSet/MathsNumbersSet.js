//
//  MathsNumbersSet
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


export default class MathsNumbersSet extends React.Component {

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
		
		navigate("MyWordsMathsCourse")
	}

	render() {
	
		return <View
				style={styles.mathsNumberssetView}>
				<TouchableOpacity
					onPress={this.onResourcesNavBarBackPressed}
					style={styles.resourcesNavBarBackButton}>
					<Image
						source={require("./../../assets/images/resources-nav-bar-back.png")}
						style={styles.resourcesNavBarBackButtonImage}/>
				</TouchableOpacity>
				<Text
					style={styles.numbersSetText}>				Numbers Set</Text>
				<View
					style={styles.lineView}/>
			</View>
	}
}

const styles = StyleSheet.create({
	mathsNumberssetView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "flex-start",
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
		marginLeft: 18,
		marginTop: 67,
	},
	resourcesNavBarBackButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	numbersSetText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 41,
		letterSpacing: 0.41,
		marginTop: 5,
	},
	lineView: {
		backgroundColor: "rgb(102, 25, 87)",
		borderWidth: 1,
		borderColor: "rgb(102, 25, 87)",
		borderStyle: "solid",
		alignSelf: "flex-end",
		width: 378,
		height: 1,
		marginRight: 16,
		marginTop: 27,
	},
})
