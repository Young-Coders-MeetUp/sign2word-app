//
//  App.js
//  Sign2Word App
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import * as Font from "expo-font"
// import CreateAddTerm from "./App/CreateAddTerm/CreateAddTerm"
// import CreateNewList from "./App/CreateNewList/CreateNewList"
// import CreatePreviewList from "./App/CreatePreviewList/CreatePreviewList"
// import CreateShare from "./App/CreateShare/CreateShare"
// import GameCorrect from "./App/GameCorrect/GameCorrect"
// import GameIncorrect from "./App/GameIncorrect/GameIncorrect"
// import GameModeChoice from "./App/GameModeChoice/GameModeChoice"
// import GameOverview from "./App/GameOverview/GameOverview"
// import GameQuestionPlaceHolder from "./App/GameQuestionPlaceHolder/GameQuestionPlaceHolder"
// import GameVocabChoice from "./App/GameVocabChoice/GameVocabChoice"
// import Home from "./App/Home/Home"
// import MathsNumbersSet from "./App/MathsNumbersSet/MathsNumbersSet"
// import MyWordsCourses from "./App/MyWordsCourses/MyWordsCourses"
// import MyWordsHome from "./App/MyWordsHome/MyWordsHome"
// import MyWordsLists from "./App/MyWordsLists/MyWordsLists"
// import MyWordsMathsCourse from "./App/MyWordsMathsCourse/MyWordsMathsCourse"
// import MyWordsNewCourse from "./App/MyWordsNewCourse/MyWordsNewCourse"
// import MyWordsNewList from "./App/MyWordsNewList/MyWordsNewList"
// import NumbersSetAddTerms from "./App/NumbersSetAddTerms/NumbersSetAddTerms"
// import NumbersSetIndividualSigns from "./App/NumbersSetIndividualSigns/NumbersSetIndividualSigns"
import React from "react"
// import TranslateAddTo from "./App/TranslateAddTo/TranslateAddTo"
import TranslateHome from "./App/TranslateHome/TranslateHome"
// import TranslateMoreInfo from "./App/TranslateMoreInfo/TranslateMoreInfo"
import { AppLoading, DangerZone } from "expo"
import { createAppContainer, createStackNavigator } from "react-navigation"

const PushRouteOne = createStackNavigator({
	// Home: {
	// 	screen: Home,
	// },
	 TranslateHome: {
	 	screen: TranslateHome,
	 },
	// TranslateMoreInfo: {
	// 	screen: TranslateMoreInfo,
	// },
	// TranslateAddTo: {
	// 	screen: TranslateAddTo,
	// },
	// CreateNewList: {
	// 	screen: CreateNewList,
	// },
	// CreateAddTerm: {
	// 	screen: CreateAddTerm,
	// },
	// GameVocabChoice: {
	// 	screen: GameVocabChoice,
	// },
	// GameModeChoice: {
	// 	screen: GameModeChoice,
	// },
	// GameQuestionPlaceHolder: {
	// 	screen: GameQuestionPlaceHolder,
	// },
	// MyWordsHome: {
	// 	screen: MyWordsHome,
	// },
	// MyWordsNewCourse: {
	// 	screen: MyWordsNewCourse,
	// },
	// MyWordsCourses: {
	// 	screen: MyWordsCourses,
	// },
	// MyWordsMathsCourse: {
	// 	screen: MyWordsMathsCourse,
	// },
	// MathsNumbersSet: {
	// 	screen: MathsNumbersSet,
	// },
	// MyWordsNewList: {
	// 	screen: MyWordsNewList,
	// },
	// MyWordsLists: {
	// 	screen: MyWordsLists,
	// },
	// CreatePreviewList: {
	// 	screen: CreatePreviewList,
	// },
	// CreateShare: {
	// 	screen: CreateShare,
	// },
}, {
	initialRouteName: "TranslateHome",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			".AppleSystemUIFont": require("./assets/fonts/SFNS.ttf"),
			"LucidaGrande": require("./assets/fonts/LucidaGrande.ttf"),
			"Helvetica-Bold": require("./assets/fonts/Helvetica.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}
