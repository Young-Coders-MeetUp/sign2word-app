//
//  Home
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
// import ButtonText from "../../components/ButtonText"
import ScreenHeader from "../../components/ScreenHeader"
import Logo from "../../components/Logo"
import HomeScreenButtonsTemplate from "../../components/HomeScreenButtonsTemplate"
import Navigator from "../../components/Navigator"


export default class Home extends React.Component {

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

	onTRANSLATEPressed = () => {
		const { navigate } = this.props.navigation
		navigate("TranslateHome")
	}

	onMYWORDSPressed = () => {
		const { navigate } = this.props.navigation
		navigate("MyWordsHome")
	}

	onCREATEPressed = () => {
		const { navigate } = this.props.navigation
		navigate("CreateNewList")
	}

	onPLAYPressed = () => {
		const { navigate } = this.props.navigation
		navigate("GameVocabChoice")
	}

	render() {
		return <View
				style={{
					backgroundColor: "white",
					flex: 3,
				}}>
				<ScreenHeader 
					title = "Sign2Word"
					subTitle = "Welcome back"
					height = {187} />
				<View
					pointerEvents="box-none"
					style={{
						height: 238,
						marginLeft: 118,
						marginTop: 8,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<Logo />
				</View>
				<View style={{
					alignSelf: "center",
					marginTop: 20}}>
					<Image
						source={require("./../../assets/images/group-3.png")}
						style={{backgroundColor: "transparent"}}/>
				</View>
				<View style = {{
					justifyContent: "space-around",
					flex: 5,
					alignSelf: "center",
				}}>
					<TouchableOpacity
						onPress={this.onTRANSLATEPressed}>
						<HomeScreenButtonsTemplate label = "TRANSLATE"
							source = {icons.translate}/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.onMYWORDSPressed}>
						<HomeScreenButtonsTemplate label = "MY WORDS"
							source = {icons.myWords}/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.onCREATEPressed}>
						<HomeScreenButtonsTemplate label = "CREATE"
							source = {icons.create}/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.onPLAYPressed}>
						<HomeScreenButtonsTemplate label = "PLAY"
							source = {icons.play}/>
					</TouchableOpacity>
				</View>
				<Navigator />
			</View>
	}
}

const icons = {
	translate: require("./../../assets/images/translate-2.png"),
	myWords: require("./../../assets/images/myWordsIcon.png"),
	create: require("./../../assets/images/edit-alt-2.png"),
	play: require("./../../assets/images/GameIcon.png")
}